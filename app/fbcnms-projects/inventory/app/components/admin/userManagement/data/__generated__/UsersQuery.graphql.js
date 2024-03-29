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
export type UsersQueryVariables = {||};
export type UsersQueryResponse = {|
  +users: ?{|
    +edges: $ReadOnlyArray<{|
      +node: ?{|
        +id: string,
        +authID: string,
        +firstName: string,
        +lastName: string,
        +email: string,
        +status: UserStatus,
        +role: UserRole,
        +groups: $ReadOnlyArray<?{|
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
    |}>
  |}
|};
export type UsersQuery = {|
  variables: UsersQueryVariables,
  response: UsersQueryResponse,
|};
*/


/*
query UsersQuery {
  users(first: 500) {
    edges {
      node {
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
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
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
  "name": "authID",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "firstName",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "lastName",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "email",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "status",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "role",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "description",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isAllowed",
  "storageKey": null
},
v11 = [
  (v10/*: any*/)
],
v12 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "BasicPermissionRule",
    "kind": "LinkedField",
    "name": "create",
    "plural": false,
    "selections": (v11/*: any*/),
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "concreteType": "BasicPermissionRule",
    "kind": "LinkedField",
    "name": "update",
    "plural": false,
    "selections": (v11/*: any*/),
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "concreteType": "BasicPermissionRule",
    "kind": "LinkedField",
    "name": "delete",
    "plural": false,
    "selections": (v11/*: any*/),
    "storageKey": null
  }
],
v13 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "UserEdge",
    "kind": "LinkedField",
    "name": "edges",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "UsersGroup",
            "kind": "LinkedField",
            "name": "groups",
            "plural": true,
            "selections": [
              (v0/*: any*/),
              (v7/*: any*/),
              (v8/*: any*/),
              (v5/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "User",
                "kind": "LinkedField",
                "name": "members",
                "plural": true,
                "selections": [
                  (v0/*: any*/),
                  (v1/*: any*/),
                  (v2/*: any*/),
                  (v3/*: any*/),
                  (v4/*: any*/),
                  (v5/*: any*/),
                  (v6/*: any*/)
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
                  (v7/*: any*/),
                  (v8/*: any*/),
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
                      (v9/*: any*/),
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
                            "selections": (v11/*: any*/),
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
                                "selections": (v11/*: any*/),
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
                                  (v10/*: any*/),
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
                                "selections": (v11/*: any*/),
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
                            "selections": (v12/*: any*/),
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "CUD",
                            "kind": "LinkedField",
                            "name": "equipmentType",
                            "plural": false,
                            "selections": (v12/*: any*/),
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "CUD",
                            "kind": "LinkedField",
                            "name": "locationType",
                            "plural": false,
                            "selections": (v12/*: any*/),
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "CUD",
                            "kind": "LinkedField",
                            "name": "portType",
                            "plural": false,
                            "selections": (v12/*: any*/),
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "CUD",
                            "kind": "LinkedField",
                            "name": "serviceType",
                            "plural": false,
                            "selections": (v12/*: any*/),
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
                              (v10/*: any*/),
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
                            "selections": (v12/*: any*/),
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
                                "selections": (v11/*: any*/),
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "WorkforcePermissionRule",
                                "kind": "LinkedField",
                                "name": "update",
                                "plural": false,
                                "selections": (v11/*: any*/),
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "WorkforcePermissionRule",
                                "kind": "LinkedField",
                                "name": "delete",
                                "plural": false,
                                "selections": (v11/*: any*/),
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "WorkforcePermissionRule",
                                "kind": "LinkedField",
                                "name": "assign",
                                "plural": false,
                                "selections": (v11/*: any*/),
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "WorkforcePermissionRule",
                                "kind": "LinkedField",
                                "name": "transferOwnership",
                                "plural": false,
                                "selections": (v11/*: any*/),
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
          },
          (v9/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "cursor",
        "storageKey": null
      }
    ],
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "concreteType": "PageInfo",
    "kind": "LinkedField",
    "name": "pageInfo",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "endCursor",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "hasNextPage",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
],
v14 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 500
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "UsersQuery",
    "selections": [
      {
        "alias": "users",
        "args": null,
        "concreteType": "UserConnection",
        "kind": "LinkedField",
        "name": "__Users_users_connection",
        "plural": false,
        "selections": (v13/*: any*/),
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "UsersQuery",
    "selections": [
      {
        "alias": null,
        "args": (v14/*: any*/),
        "concreteType": "UserConnection",
        "kind": "LinkedField",
        "name": "users",
        "plural": false,
        "selections": (v13/*: any*/),
        "storageKey": "users(first:500)"
      },
      {
        "alias": null,
        "args": (v14/*: any*/),
        "filters": null,
        "handle": "connection",
        "key": "Users_users",
        "kind": "LinkedHandle",
        "name": "users"
      }
    ]
  },
  "params": {
    "cacheID": "8c55146905835405a116ec5ab889b968",
    "id": null,
    "metadata": {
      "connection": [
        {
          "count": null,
          "cursor": null,
          "direction": "forward",
          "path": [
            "users"
          ]
        }
      ]
    },
    "name": "UsersQuery",
    "operationKind": "query",
    "text": "query UsersQuery {\n  users(first: 500) {\n    edges {\n      node {\n        id\n        authID\n        firstName\n        lastName\n        email\n        status\n        role\n        groups {\n          id\n          name\n          description\n          status\n          members {\n            id\n            authID\n            firstName\n            lastName\n            email\n            status\n            role\n          }\n          policies {\n            id\n            name\n            description\n            isGlobal\n            policy {\n              __typename\n              ... on InventoryPolicy {\n                read {\n                  isAllowed\n                }\n                location {\n                  create {\n                    isAllowed\n                  }\n                  update {\n                    isAllowed\n                    locationTypeIds\n                  }\n                  delete {\n                    isAllowed\n                  }\n                }\n                equipment {\n                  create {\n                    isAllowed\n                  }\n                  update {\n                    isAllowed\n                  }\n                  delete {\n                    isAllowed\n                  }\n                }\n                equipmentType {\n                  create {\n                    isAllowed\n                  }\n                  update {\n                    isAllowed\n                  }\n                  delete {\n                    isAllowed\n                  }\n                }\n                locationType {\n                  create {\n                    isAllowed\n                  }\n                  update {\n                    isAllowed\n                  }\n                  delete {\n                    isAllowed\n                  }\n                }\n                portType {\n                  create {\n                    isAllowed\n                  }\n                  update {\n                    isAllowed\n                  }\n                  delete {\n                    isAllowed\n                  }\n                }\n                serviceType {\n                  create {\n                    isAllowed\n                  }\n                  update {\n                    isAllowed\n                  }\n                  delete {\n                    isAllowed\n                  }\n                }\n              }\n              ... on WorkforcePolicy {\n                read {\n                  isAllowed\n                  projectTypeIds\n                  workOrderTypeIds\n                }\n                templates {\n                  create {\n                    isAllowed\n                  }\n                  update {\n                    isAllowed\n                  }\n                  delete {\n                    isAllowed\n                  }\n                }\n                data {\n                  create {\n                    isAllowed\n                  }\n                  update {\n                    isAllowed\n                  }\n                  delete {\n                    isAllowed\n                  }\n                  assign {\n                    isAllowed\n                  }\n                  transferOwnership {\n                    isAllowed\n                  }\n                }\n              }\n            }\n          }\n        }\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '54d6b28dfd92b7fe7120702e142658a0';

module.exports = node;
