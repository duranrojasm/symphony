/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 * @format
 */

import type {User} from '../utils/UserManagementUtils';

import * as React from 'react';
import Button from '@symphony/design-system/components/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormAction from '@symphony/design-system/components/Form/FormAction';
import FormContext, {FormContextProvider} from '../../../../common/FormContext';
import FormFieldTextInput from '../utils/FormFieldTextInput';
import Grid from '@material-ui/core/Grid';
import Strings from '@fbcnms/strings/Strings';
import Text from '@symphony/design-system/components/Text';
import UserAccountDetailsPane, {
  ACCOUNT_DISPLAY_VARIANTS,
} from './UserAccountDetailsPane';
import UserRoleAndStatusPane from './UserRoleAndStatusPane';
import fbt from 'fbt';
import symphony from '@symphony/design-system/theme/symphony';
import {USER_ROLES, USER_STATUSES} from '../utils/UserManagementUtils';
import {addUser} from '../data/Users';
import {generateTempId} from '../../../../common/EntUtils';
import {makeStyles} from '@material-ui/styles';
import {useEnqueueSnackbar} from '@fbcnms/ui/hooks/useSnackbar';
import {useState} from 'react';

const initialUserData: User = {
  id: generateTempId(),
  authID: '',
  email: '',
  firstName: '',
  lastName: '',
  role: USER_ROLES.USER.key,
  status: USER_STATUSES.ACTIVE.key,
  groups: [],
};

const useStyles = makeStyles(() => ({
  field: {},
  section: {
    '&:not(:last-child)': {
      paddingBottom: '16px',
      borderBottom: `1px solid ${symphony.palette.separator}`,
    },
    marginBottom: '16px',
  },
  sectionHeader: {
    marginBottom: '16px',
    '&>span': {
      display: 'block',
    },
  },
}));

type Props = $ReadOnly<{|
  onClose: (?User) => void,
|}>;

const NewUserDialog = ({onClose}: Props) => {
  const classes = useStyles();
  const [creatingUser, setCreatingUser] = useState(false);
  const [user, setUser] = useState<User>({...initialUserData});
  const [password, setPassword] = useState('');

  const enqueueSnackbar = useEnqueueSnackbar();
  const handleError = error => {
    setCreatingUser(false);
    enqueueSnackbar(error.response?.data?.error || error, {variant: 'error'});
  };

  const callAddUser = () => {
    setCreatingUser(true);
    addUser(user, password)
      .finally(() => setCreatingUser(false))
      .then(newUser => {
        onClose(newUser);
      })
      .catch(handleError);
  };

  return (
    <Dialog fullWidth={true} maxWidth="md" open={true}>
      <FormContextProvider permissions={{adminRightsRequired: true}}>
        <FormContext.Consumer>
          {form => {
            form.alerts.missingPermissions.check({
              fieldId: 'async_save',
              fieldDisplayName: 'Lock while saving',
              value: creatingUser,
              checkCallback: isOnSavingProcess =>
                isOnSavingProcess == true ? 'Saving new user' : '',
            });
            return (
              <>
                <DialogTitle disableTypography={true}>
                  <Text variant="h6">
                    <fbt desc="">New User Account</fbt>
                  </Text>
                </DialogTitle>
                <DialogContent>
                  <div className={classes.section}>
                    <div className={classes.sectionHeader}>
                      <Text variant="subtitle1">
                        <fbt desc="">Personal Details</fbt>
                      </Text>
                    </div>
                    <Grid container spacing={2}>
                      <Grid key="first_name" item xs={12} sm={6} lg={4} xl={4}>
                        <FormFieldTextInput
                          validationId="first_name"
                          label={`${fbt('First Name', '')}`}
                          value={user.firstName || ''}
                          onValueChanged={firstName =>
                            setUser(currentUser => ({
                              ...currentUser,
                              firstName,
                            }))
                          }
                        />
                      </Grid>
                      <Grid key="last_name" item xs={12} sm={6} lg={4} xl={4}>
                        <FormFieldTextInput
                          validationId="last_name"
                          label={`${fbt('Last Name', '')}`}
                          value={user.lastName || ''}
                          onValueChanged={lastName =>
                            setUser(currentUser => ({
                              ...currentUser,
                              lastName,
                            }))
                          }
                        />
                      </Grid>
                    </Grid>
                  </div>
                  <div className={classes.section}>
                    <UserRoleAndStatusPane
                      user={user}
                      onChange={setUser}
                      canSetDeactivated={false}
                    />
                  </div>
                  <UserAccountDetailsPane
                    variant={ACCOUNT_DISPLAY_VARIANTS.newUserDialog}
                    className={classes.section}
                    user={user}
                    onChange={(updatedUser, updatedPassword) => {
                      setUser(updatedUser);
                      setPassword(updatedPassword);
                    }}
                  />
                </DialogContent>
                <DialogActions>
                  <FormAction disabled={creatingUser}>
                    <Button onClick={() => onClose()} skin="regular">
                      {Strings.common.cancelButton}
                    </Button>
                  </FormAction>
                  <FormAction disableOnFromError={true} disabled={creatingUser}>
                    <Button onClick={callAddUser}>
                      {Strings.common.saveButton}
                    </Button>
                  </FormAction>
                </DialogActions>
              </>
            );
          }}
        </FormContext.Consumer>
      </FormContextProvider>
    </Dialog>
  );
};

export default NewUserDialog;
