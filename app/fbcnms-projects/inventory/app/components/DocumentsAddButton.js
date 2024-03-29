/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 * @format
 */

import type {
  AddImageMutationResponse,
  AddImageMutationVariables,
  ImageEntity,
} from '../mutations/__generated__/AddImageMutation.graphql';
import type {AppContextType} from '@fbcnms/ui/context/AppContext';
import type {MutationCallbacks} from '../mutations/MutationCallbacks.js';
import type {WithSnackbarProps} from 'notistack';
import type {WithStyles} from '@material-ui/core';

import AddImageMutation from '../mutations/AddImageMutation';
import AppContext from '@fbcnms/ui/context/AppContext';
import Button from '@symphony/design-system/components/Button';
import Clickable from '@symphony/design-system/components/Core/Clickable';
import FileUploadButton from './FileUpload/FileUploadButton';
import FormAction from '@symphony/design-system/components/Form/FormAction';
import PopoverMenu from '@symphony/design-system/components/Select/PopoverMenu';
import React from 'react';
import SnackbarItem from '@fbcnms/ui/components/SnackbarItem';
import Strings from '../common/InventoryStrings';
import Text from '@symphony/design-system/components/Text';
import {LogEvents, ServerLogger} from '../common/LoggingUtils';
import {withSnackbar} from 'notistack';
import {withStyles} from '@material-ui/core/styles';

const styles = {
  uploadCategory: {
    padding: '0px',
  },
  uploadCategoryButton: {
    display: 'block',
    padding: '4px',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    width: '100%',
  },
};

type Props = {|
  entityId: ?string,
  entityType: ImageEntity,
|} & WithSnackbarProps &
  WithStyles<typeof styles>;

type State = {
  isMenuOpened: boolean,
};

const FileTypeEnum = {
  IMAGE: 'IMAGE',
  FILE: 'FILE',
};

class DocumentsAddButton extends React.Component<Props, State> {
  static contextType = AppContext;
  context: AppContextType;

  state = {
    isMenuOpened: false,
  };

  render() {
    const {entityId, classes} = this.props;
    const categoriesEnabled = this.context.isFeatureEnabled('file_categories');

    if (!entityId) {
      return null;
    }

    return (
      <FormAction>
        {categoriesEnabled && Strings.documents.categories.length ? (
          <PopoverMenu
            skin="primary"
            menuDockRight={true}
            options={Strings.documents.categories.map(category => ({
              key: category,
              label: (
                <FileUploadButton
                  key={category}
                  onFileUploaded={this.onDocumentUploaded(category)}>
                  {openFileUploadDialog => (
                    <Clickable onClick={openFileUploadDialog}>
                      <Text
                        className={classes.uploadCategoryButton}
                        variant="body2">
                        {category}
                      </Text>
                    </Clickable>
                  )}
                </FileUploadButton>
              ),
              value: category,
              className: classes.uploadCategory,
            }))}>
            {Strings.documents.uploadButton}
          </PopoverMenu>
        ) : (
          <FileUploadButton onFileUploaded={this.onDocumentUploaded(null)}>
            {openFileUploadDialog => (
              <Button skin="primary" onClick={openFileUploadDialog}>
                {Strings.documents.uploadButton}
              </Button>
            )}
          </FileUploadButton>
        )}
      </FormAction>
    );
  }

  onDocumentUploaded = (category: ?string) => (file, key) => {
    ServerLogger.info(LogEvents.LOCATION_CARD_UPLOAD_FILE_CLICKED);
    if (this.props.entityId == null) {
      return;
    }
    const variables: AddImageMutationVariables = {
      input: {
        entityType: this.props.entityType,
        entityId: this.props.entityId,
        imgKey: key,
        fileName: file.name,
        fileSize: file.size,
        modified: new Date(file.lastModified).toISOString(),
        contentType: file.type,
        category: category,
      },
    };

    const updater = store => {
      const {entityId} = this.props;
      if (entityId == null) {
        return;
      }
      const newNode = store.getRootField('addImage');
      const entityProxy = store.get(entityId);
      if (newNode == null || entityProxy == null) {
        return;
      }
      const fileType = newNode.getValue('fileType');
      if (fileType == FileTypeEnum.IMAGE) {
        const imageNodes = entityProxy.getLinkedRecords('images') || [];
        entityProxy.setLinkedRecords([...imageNodes, newNode], 'images');
      } else {
        const fileNodes = entityProxy.getLinkedRecords('files') || [];
        entityProxy.setLinkedRecords([...fileNodes, newNode], 'files');
      }
    };

    const callbacks: MutationCallbacks<AddImageMutationResponse> = {
      onCompleted: (_, errors) => {
        if (errors && errors[0]) {
          this.props.enqueueSnackbar(errors[0].message, {
            children: key => (
              <SnackbarItem
                id={key}
                message={errors[0].message}
                variant="error"
              />
            ),
          });
        }
      },
      onError: () => {},
    };

    AddImageMutation(variables, callbacks, updater);
  };
}

export default withStyles(styles)(withSnackbar(DocumentsAddButton));
