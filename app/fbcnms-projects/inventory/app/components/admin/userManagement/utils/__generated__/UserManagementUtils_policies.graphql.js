/**
 * @generated
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 **/

 /**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
export type PermissionValue = "BY_CONDITION" | "NO" | "YES" | "%future added value";
export type UserRole = "ADMIN" | "OWNER" | "USER" | "%future added value";
export type UserStatus = "ACTIVE" | "DEACTIVATED" | "%future added value";
export type UsersGroupStatus = "ACTIVE" | "DEACTIVATED" | "%future added value";
import type { FragmentReference } from "relay-runtime";
declare export opaque type UserManagementUtils_policies$ref: FragmentReference;
declare export opaque type UserManagementUtils_policies$fragmentType: UserManagementUtils_policies$ref;
export type UserManagementUtils_policies = {|
  +id: string,
  +name: string,
  +description: ?string,
  +isGlobal: boolean,
  +policy: {|
    +__typename: "InventoryPolicy",
    +read: {|
      +isAllowed: PermissionValue
    |},
    +location: {|
      +create: {|
        +isAllowed: PermissionValue
      |},
      +update: {|
        +isAllowed: PermissionValue,
        +locationTypeIds: ?$ReadOnlyArray<string>,
      |},
      +delete: {|
        +isAllowed: PermissionValue
      |},
    |},
    +equipment: {|
      +create: {|
        +isAllowed: PermissionValue
      |},
      +update: {|
        +isAllowed: PermissionValue
      |},
      +delete: {|
        +isAllowed: PermissionValue
      |},
    |},
    +equipmentType: {|
      +create: {|
        +isAllowed: PermissionValue
      |},
      +update: {|
        +isAllowed: PermissionValue
      |},
      +delete: {|
        +isAllowed: PermissionValue
      |},
    |},
    +locationType: {|
      +create: {|
        +isAllowed: PermissionValue
      |},
      +update: {|
        +isAllowed: PermissionValue
      |},
      +delete: {|
        +isAllowed: PermissionValue
      |},
    |},
    +portType: {|
      +create: {|
        +isAllowed: PermissionValue
      |},
      +update: {|
        +isAllowed: PermissionValue
      |},
      +delete: {|
        +isAllowed: PermissionValue
      |},
    |},
    +serviceType: {|
      +create: {|
        +isAllowed: PermissionValue
      |},
      +update: {|
        +isAllowed: PermissionValue
      |},
      +delete: {|
        +isAllowed: PermissionValue
      |},
    |},
  |} | {|
    +__typename: "WorkforcePolicy",
    +read: {|
      +isAllowed: PermissionValue,
      +projectTypeIds: ?$ReadOnlyArray<string>,
      +workOrderTypeIds: ?$ReadOnlyArray<string>,
    |},
    +templates: {|
      +create: {|
        +isAllowed: PermissionValue
      |},
      +update: {|
        +isAllowed: PermissionValue
      |},
      +delete: {|
        +isAllowed: PermissionValue
      |},
    |},
    +data: {|
      +create: {|
        +isAllowed: PermissionValue
      |},
      +update: {|
        +isAllowed: PermissionValue
      |},
      +delete: {|
        +isAllowed: PermissionValue
      |},
      +assign: {|
        +isAllowed: PermissionValue
      |},
      +transferOwnership: {|
        +isAllowed: PermissionValue
      |},
    |},
  |} | {|
    // This will never be '%other', but we need some
    // value in case none of the concrete values match.
    +__typename: "%other"
  |},
  +groups: $ReadOnlyArray<{|
    +id: string,
    +name: string,
    +description: ?string,
    +status: UsersGroupStatus,
    +members: $ReadOnlyArray<{|
      +id: string,
      +authID: string,
      +firstName: string,
      +lastName: string,
      +email: string,
      +status: UserStatus,
      +role: UserRole,
    |}>,
    +policies: $ReadOnlyArray<{|
      +id: string,
      +name: string,
      +description: ?string,
      +isGlobal: boolean,
      +policy: {|
        +__typename: "InventoryPolicy",
        +read: {|
          +isAllowed: PermissionValue
        |},
        +location: {|
          +create: {|
            +isAllowed: PermissionValue
          |},
          +update: {|
            +isAllowed: PermissionValue,
            +locationTypeIds: ?$ReadOnlyArray<string>,
          |},
          +delete: {|
            +isAllowed: PermissionValue
          |},
        |},
        +equipment: {|
          +create: {|
            +isAllowed: PermissionValue
          |},
          +update: {|
            +isAllowed: PermissionValue
          |},
          +delete: {|
            +isAllowed: PermissionValue
          |},
        |},
        +equipmentType: {|
          +create: {|
            +isAllowed: PermissionValue
          |},
          +update: {|
            +isAllowed: PermissionValue
          |},
          +delete: {|
            +isAllowed: PermissionValue
          |},
        |},
        +locationType: {|
          +create: {|
            +isAllowed: PermissionValue
          |},
          +update: {|
            +isAllowed: PermissionValue
          |},
          +delete: {|
            +isAllowed: PermissionValue
          |},
        |},
        +portType: {|
          +create: {|
            +isAllowed: PermissionValue
          |},
          +update: {|
            +isAllowed: PermissionValue
          |},
          +delete: {|
            +isAllowed: PermissionValue
          |},
        |},
        +serviceType: {|
          +create: {|
            +isAllowed: PermissionValue
          |},
          +update: {|
            +isAllowed: PermissionValue
          |},
          +delete: {|
            +isAllowed: PermissionValue
          |},
        |},
      |} | {|
        +__typename: "WorkforcePolicy",
        +read: {|
          +isAllowed: PermissionValue,
          +projectTypeIds: ?$ReadOnlyArray<string>,
          +workOrderTypeIds: ?$ReadOnlyArray<string>,
        |},
        +templates: {|
          +create: {|
            +isAllowed: PermissionValue
          |},
          +update: {|
            +isAllowed: PermissionValue
          |},
          +delete: {|
            +isAllowed: PermissionValue
          |},
        |},
        +data: {|
          +create: {|
            +isAllowed: PermissionValue
          |},
          +update: {|
            +isAllowed: PermissionValue
          |},
          +delete: {|
            +isAllowed: PermissionValue
          |},
          +assign: {|
            +isAllowed: PermissionValue
          |},
          +transferOwnership: {|
            +isAllowed: PermissionValue
          |},
        |},
      |} | {|
        // This will never be '%other', but we need some
        // value in case none of the concrete values match.
        +__typename: "%other"
      |},
    |}>,
  |}>,
  +$refType: UserManagementUtils_policies$ref,
|};
export type UserManagementUtils_policies$data = UserManagementUtils_policies;
export type UserManagementUtils_policies$key = {
  +$data?: UserManagementUtils_policies$data,
  +$fragmentRefs: UserManagementUtils_policies$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "description",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isGlobal",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isAllowed",
  "storageKey": null
},
v5 = [
  (v4/*: any*/)
],
v6 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "BasicPermissionRule",
    "kind": "LinkedField",
    "name": "create",
    "plural": false,
    "selections": (v5/*: any*/),
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "concreteType": "BasicPermissionRule",
    "kind": "LinkedField",
    "name": "update",
    "plural": false,
    "selections": (v5/*: any*/),
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "concreteType": "BasicPermissionRule",
    "kind": "LinkedField",
    "name": "delete",
    "plural": false,
    "selections": (v5/*: any*/),
    "storageKey": null
  }
],
v7 = {
  "alias": null,
  "args": null,
  "concreteType": null,
  "kind": "LinkedField",
  "name": "policy",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "__typename",
      "storageKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "BasicPermissionRule",
          "kind": "LinkedField",
          "name": "read",
          "plural": false,
          "selections": (v5/*: any*/),
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "LocationCUD",
          "kind": "LinkedField",
          "name": "location",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "LocationPermissionRule",
              "kind": "LinkedField",
              "name": "create",
              "plural": false,
              "selections": (v5/*: any*/),
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "concreteType": "LocationPermissionRule",
              "kind": "LinkedField",
              "name": "update",
              "plural": false,
              "selections": [
                (v4/*: any*/),
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "locationTypeIds",
                  "storageKey": null
                }
              ],
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "concreteType": "LocationPermissionRule",
              "kind": "LinkedField",
              "name": "delete",
              "plural": false,
              "selections": (v5/*: any*/),
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "CUD",
          "kind": "LinkedField",
          "name": "equipment",
          "plural": false,
          "selections": (v6/*: any*/),
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "CUD",
          "kind": "LinkedField",
          "name": "equipmentType",
          "plural": false,
          "selections": (v6/*: any*/),
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "CUD",
          "kind": "LinkedField",
          "name": "locationType",
          "plural": false,
          "selections": (v6/*: any*/),
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "CUD",
          "kind": "LinkedField",
          "name": "portType",
          "plural": false,
          "selections": (v6/*: any*/),
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "CUD",
          "kind": "LinkedField",
          "name": "serviceType",
          "plural": false,
          "selections": (v6/*: any*/),
          "storageKey": null
        }
      ],
      "type": "InventoryPolicy",
      "abstractKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "WorkforcePermissionRule",
          "kind": "LinkedField",
          "name": "read",
          "plural": false,
          "selections": [
            (v4/*: any*/),
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "projectTypeIds",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "workOrderTypeIds",
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "CUD",
          "kind": "LinkedField",
          "name": "templates",
          "plural": false,
          "selections": (v6/*: any*/),
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "WorkforceCUD",
          "kind": "LinkedField",
          "name": "data",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "WorkforcePermissionRule",
              "kind": "LinkedField",
              "name": "create",
              "plural": false,
              "selections": (v5/*: any*/),
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "concreteType": "WorkforcePermissionRule",
              "kind": "LinkedField",
              "name": "update",
              "plural": false,
              "selections": (v5/*: any*/),
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "concreteType": "WorkforcePermissionRule",
              "kind": "LinkedField",
              "name": "delete",
              "plural": false,
              "selections": (v5/*: any*/),
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "concreteType": "WorkforcePermissionRule",
              "kind": "LinkedField",
              "name": "assign",
              "plural": false,
              "selections": (v5/*: any*/),
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "concreteType": "WorkforcePermissionRule",
              "kind": "LinkedField",
              "name": "transferOwnership",
              "plural": false,
              "selections": (v5/*: any*/),
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "type": "WorkforcePolicy",
      "abstractKey": null
    }
  ],
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "status",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "UserManagementUtils_policies",
  "selections": [
    (v0/*: any*/),
    (v1/*: any*/),
    (v2/*: any*/),
    (v3/*: any*/),
    (v7/*: any*/),
    {
      "alias": null,
      "args": null,
      "concreteType": "UsersGroup",
      "kind": "LinkedField",
      "name": "groups",
      "plural": true,
      "selections": [
        (v0/*: any*/),
        (v1/*: any*/),
        (v2/*: any*/),
        (v8/*: any*/),
        {
          "alias": null,
          "args": null,
          "concreteType": "User",
          "kind": "LinkedField",
          "name": "members",
          "plural": true,
          "selections": [
            (v0/*: any*/),
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "authID",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "firstName",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "lastName",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "email",
              "storageKey": null
            },
            (v8/*: any*/),
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "role",
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "PermissionsPolicy",
          "kind": "LinkedField",
          "name": "policies",
          "plural": true,
          "selections": [
            (v0/*: any*/),
            (v1/*: any*/),
            (v2/*: any*/),
            (v3/*: any*/),
            (v7/*: any*/)
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "PermissionsPolicy",
  "abstractKey": null
};
})();
// prettier-ignore
(node/*: any*/).hash = 'f676f41b24c85854388c84f554e91b2b';

module.exports = node;
