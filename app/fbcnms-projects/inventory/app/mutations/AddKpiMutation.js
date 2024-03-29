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
    AddKpiMutation,
    AddKpiMutationResponse,
    AddKpiMutationVariables,
  } from './__generated__/AddKpiMutation.graphql';
  import type {MutationCallbacks} from './MutationCallbacks.js';
  import type {SelectorStoreUpdater} from 'relay-runtime';
  
  import RelayEnvironment from '../common/RelayEnvironment.js';
  import {commitMutation, graphql} from 'react-relay';
  
  const mutation = graphql`
    mutation AddKpiMutation($input: AddKpiInput!) {
        addKpi(input: $input) {
            id
            name
            domainFk {
                id
                name
            }
        }
    }
    `;

  export default (
    variables: AddKpiMutationVariables,
    callbacks?: MutationCallbacks<AddKpiMutationResponse>,
    updater?: SelectorStoreUpdater,
  ) => {
    const {onCompleted, onError} = callbacks ? callbacks : {};
    commitMutation<AddKpiMutation>(RelayEnvironment, {
      mutation,
      variables,
      updater,
      onCompleted,
      onError,
    });
  };
  