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
import type { ConcreteRequest } from 'relay-runtime';
export type PermissionValue = "BY_CONDITION" | "NO" | "YES" | "%future added value";
export type UserRole = "ADMIN" | "OWNER" | "USER" | "%future added value";
export type UserStatus = "ACTIVE" | "DEACTIVATED" | "%future added value";
export type UsersGroupStatus = "ACTIVE" | "DEACTIVATED" | "%future added value";
export type AccountSettings_UserQueryVariables = {|
  id: string
|};
export type AccountSettings_UserQueryResponse = {|
  +node: ?{|
    +id?: string,
    +authID?: string,
    +firstName?: string,
    +lastName?: string,
    +email?: string,
    +status?: UserStatus,
    +role?: UserRole,
    +groups?: $ReadOnlyArray<?{|
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
  |}
|};
export type AccountSettings_UserQuery = {|
  variables: AccountSettings_UserQueryVariables,
  response: AccountSettings_UserQueryResponse,
|};
*/


/*
query AccountSettings_UserQuery(
  $id: ID!
) {
  node(id: $id) {
    __typename
    ... on User {
      id
      authID
      firstName
      lastName
      email
      status
      role
      groups {
        id
        name
        description
        status
        members {
          id
          authID
          firstName
          lastName
          email
          status
          role
        }
        policies {
          id
          name
          description
          isGlobal
          policy {
            __typename
            ... on InventoryPolicy {
              read {
                isAllowed
              }
              location {
                create {
                  isAllowed
                }
                update {
                  isAllowed
                  locationTypeIds
                }
                delete {
                  isAllowed
                }
              }
              equipment {
                create {
                  isAllowed
                }
                update {
                  isAllowed
                }
                delete {
                  isAllowed
                }
              }
              equipmentType {
                create {
                  isAllowed
                }
                update {
                  isAllowed
                }
                delete {
                  isAllowed
                }
              }
              locationType {
                create {
                  isAllowed
                }
                update {
                  isAllowed
                }
                delete {
                  isAllowed
                }
              }
              portType {
                create {
                  isAllowed
                }
                update {
                  isAllowed
                }
                delete {
                  isAllowed
                }
              }
              serviceType {
                create {
                  isAllowed
                }
                update {
                  isAllowed
                }
                delete {
                  isAllowed
                }
              }
            }
            ... on WorkforcePolicy {
              read {
                isAllowed
                projectTypeIds
                workOrderTypeIds
              }
              templates {
                create {
                  isAllowed
                }
                update {
                  isAllowed
                }
                delete {
                  isAllowed
                }
              }
              data {
                create {
                  isAllowed
                }
                update {
                  isAllowed
                }
                delete {
                  isAllowed
                }
                assign {
                  isAllowed
                }
                transferOwnership {
                  isAllowed
                }
              }
            }
          }
        }
      }
    }
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "authID",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "firstName",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "lastName",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "email",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "status",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "role",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "description",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isAllowed",
  "storageKey": null
},
v13 = [
  (v12/*: any*/)
],
v14 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "BasicPermissionRule",
    "kind": "LinkedField",
    "name": "create",
    "plural": false,
    "selections": (v13/*: any*/),
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "concreteType": "BasicPermissionRule",
    "kind": "LinkedField",
    "name": "update",
    "plural": false,
    "selections": (v13/*: any*/),
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "concreteType": "BasicPermissionRule",
    "kind": "LinkedField",
    "name": "delete",
    "plural": false,
    "selections": (v13/*: any*/),
    "storageKey": null
  }
],
v15 = {
  "alias": null,
  "args": null,
  "concreteType": "UsersGroup",
  "kind": "LinkedField",
  "name": "groups",
  "plural": true,
  "selections": [
    (v2/*: any*/),
    (v9/*: any*/),
    (v10/*: any*/),
    (v7/*: any*/),
    {
      "alias": null,
      "args": null,
      "concreteType": "User",
      "kind": "LinkedField",
      "name": "members",
      "plural": true,
      "selections": [
        (v2/*: any*/),
        (v3/*: any*/),
        (v4/*: any*/),
        (v5/*: any*/),
        (v6/*: any*/),
        (v7/*: any*/),
        (v8/*: any*/)
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
        (v2/*: any*/),
        (v9/*: any*/),
        (v10/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "isGlobal",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": null,
          "kind": "LinkedField",
          "name": "policy",
          "plural": false,
          "selections": [
            (v11/*: any*/),
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
                  "selections": (v13/*: any*/),
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
                      "selections": (v13/*: any*/),
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
                        (v12/*: any*/),
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
                      "selections": (v13/*: any*/),
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
                  "selections": (v14/*: any*/),
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "CUD",
                  "kind": "LinkedField",
                  "name": "equipmentType",
                  "plural": false,
                  "selections": (v14/*: any*/),
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "CUD",
                  "kind": "LinkedField",
                  "name": "locationType",
                  "plural": false,
                  "selections": (v14/*: any*/),
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "CUD",
                  "kind": "LinkedField",
                  "name": "portType",
                  "plural": false,
                  "selections": (v14/*: any*/),
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "CUD",
                  "kind": "LinkedField",
                  "name": "serviceType",
                  "plural": false,
                  "selections": (v14/*: any*/),
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
                    (v12/*: any*/),
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
                  "selections": (v14/*: any*/),
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
                      "selections": (v13/*: any*/),
                      "storageKey": null
                    },
                    {
                      "alias": null,
                      "args": null,
                      "concreteType": "WorkforcePermissionRule",
                      "kind": "LinkedField",
                      "name": "update",
                      "plural": false,
                      "selections": (v13/*: any*/),
                      "storageKey": null
                    },
                    {
                      "alias": null,
                      "args": null,
                      "concreteType": "WorkforcePermissionRule",
                      "kind": "LinkedField",
                      "name": "delete",
                      "plural": false,
                      "selections": (v13/*: any*/),
                      "storageKey": null
                    },
                    {
                      "alias": null,
                      "args": null,
                      "concreteType": "WorkforcePermissionRule",
                      "kind": "LinkedField",
                      "name": "assign",
                      "plural": false,
                      "selections": (v13/*: any*/),
                      "storageKey": null
                    },
                    {
                      "alias": null,
                      "args": null,
                      "concreteType": "WorkforcePermissionRule",
                      "kind": "LinkedField",
                      "name": "transferOwnership",
                      "plural": false,
                      "selections": (v13/*: any*/),
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
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "AccountSettings_UserQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          {
            "kind": "InlineFragment",
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/),
              (v7/*: any*/),
              (v8/*: any*/),
              (v15/*: any*/)
            ],
            "type": "User",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AccountSettings_UserQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          (v11/*: any*/),
          (v2/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/),
              (v7/*: any*/),
              (v8/*: any*/),
              (v15/*: any*/)
            ],
            "type": "User",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "1751ca0afcc5d534fc93a79ae1b36caa",
    "id": null,
    "metadata": {},
    "name": "AccountSettings_UserQuery",
    "operationKind": "query",
    "text": "query AccountSettings_UserQuery(\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ... on User {\n      id\n      authID\n      firstName\n      lastName\n      email\n      status\n      role\n      groups {\n        id\n        name\n        description\n        status\n        members {\n          id\n          authID\n          firstName\n          lastName\n          email\n          status\n          role\n        }\n        policies {\n          id\n          name\n          description\n          isGlobal\n          policy {\n            __typename\n            ... on InventoryPolicy {\n              read {\n                isAllowed\n              }\n              location {\n                create {\n                  isAllowed\n                }\n                update {\n                  isAllowed\n                  locationTypeIds\n                }\n                delete {\n                  isAllowed\n                }\n              }\n              equipment {\n                create {\n                  isAllowed\n                }\n                update {\n                  isAllowed\n                }\n                delete {\n                  isAllowed\n                }\n              }\n              equipmentType {\n                create {\n                  isAllowed\n                }\n                update {\n                  isAllowed\n                }\n                delete {\n                  isAllowed\n                }\n              }\n              locationType {\n                create {\n                  isAllowed\n                }\n                update {\n                  isAllowed\n                }\n                delete {\n                  isAllowed\n                }\n              }\n              portType {\n                create {\n                  isAllowed\n                }\n                update {\n                  isAllowed\n                }\n                delete {\n                  isAllowed\n                }\n              }\n              serviceType {\n                create {\n                  isAllowed\n                }\n                update {\n                  isAllowed\n                }\n                delete {\n                  isAllowed\n                }\n              }\n            }\n            ... on WorkforcePolicy {\n              read {\n                isAllowed\n                projectTypeIds\n                workOrderTypeIds\n              }\n              templates {\n                create {\n                  isAllowed\n                }\n                update {\n                  isAllowed\n                }\n                delete {\n                  isAllowed\n                }\n              }\n              data {\n                create {\n                  isAllowed\n                }\n                update {\n                  isAllowed\n                }\n                delete {\n                  isAllowed\n                }\n                assign {\n                  isAllowed\n                }\n                transferOwnership {\n                  isAllowed\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n    id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '69cc582ae7f726145f7626fd99ab4cf7';

module.exports = node;
