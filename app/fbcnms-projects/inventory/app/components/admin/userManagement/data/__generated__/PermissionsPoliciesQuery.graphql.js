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
export type PermissionsPoliciesQueryVariables = {||};
export type PermissionsPoliciesQueryResponse = {|
  +permissionsPolicies: ?{|
    +edges: $ReadOnlyArray<{|
      +node: ?{|
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
      |}
    |}>
  |}
|};
export type PermissionsPoliciesQuery = {|
  variables: PermissionsPoliciesQueryVariables,
  response: PermissionsPoliciesQueryResponse,
|};
*/


/*
query PermissionsPoliciesQuery {
  permissionsPolicies(first: 500) {
    edges {
      node {
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
  "name": "__typename",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isAllowed",
  "storageKey": null
},
v6 = [
  (v5/*: any*/)
],
v7 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "BasicPermissionRule",
    "kind": "LinkedField",
    "name": "create",
    "plural": false,
    "selections": (v6/*: any*/),
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "concreteType": "BasicPermissionRule",
    "kind": "LinkedField",
    "name": "update",
    "plural": false,
    "selections": (v6/*: any*/),
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "concreteType": "BasicPermissionRule",
    "kind": "LinkedField",
    "name": "delete",
    "plural": false,
    "selections": (v6/*: any*/),
    "storageKey": null
  }
],
v8 = {
  "alias": null,
  "args": null,
  "concreteType": null,
  "kind": "LinkedField",
  "name": "policy",
  "plural": false,
  "selections": [
    (v4/*: any*/),
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
          "selections": (v6/*: any*/),
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
              "selections": (v6/*: any*/),
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
                (v5/*: any*/),
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
              "selections": (v6/*: any*/),
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
          "selections": (v7/*: any*/),
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "CUD",
          "kind": "LinkedField",
          "name": "equipmentType",
          "plural": false,
          "selections": (v7/*: any*/),
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "CUD",
          "kind": "LinkedField",
          "name": "locationType",
          "plural": false,
          "selections": (v7/*: any*/),
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "CUD",
          "kind": "LinkedField",
          "name": "portType",
          "plural": false,
          "selections": (v7/*: any*/),
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "CUD",
          "kind": "LinkedField",
          "name": "serviceType",
          "plural": false,
          "selections": (v7/*: any*/),
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
            (v5/*: any*/),
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
          "selections": (v7/*: any*/),
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
              "selections": (v6/*: any*/),
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "concreteType": "WorkforcePermissionRule",
              "kind": "LinkedField",
              "name": "update",
              "plural": false,
              "selections": (v6/*: any*/),
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "concreteType": "WorkforcePermissionRule",
              "kind": "LinkedField",
              "name": "delete",
              "plural": false,
              "selections": (v6/*: any*/),
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "concreteType": "WorkforcePermissionRule",
              "kind": "LinkedField",
              "name": "assign",
              "plural": false,
              "selections": (v6/*: any*/),
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "concreteType": "WorkforcePermissionRule",
              "kind": "LinkedField",
              "name": "transferOwnership",
              "plural": false,
              "selections": (v6/*: any*/),
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
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "status",
  "storageKey": null
},
v10 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "PermissionsPolicyEdge",
    "kind": "LinkedField",
    "name": "edges",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "PermissionsPolicy",
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
          (v2/*: any*/),
          (v3/*: any*/),
          (v8/*: any*/),
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
              (v9/*: any*/),
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
                  (v9/*: any*/),
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
                  (v8/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          (v4/*: any*/)
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
v11 = [
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
    "name": "PermissionsPoliciesQuery",
    "selections": [
      {
        "alias": "permissionsPolicies",
        "args": null,
        "concreteType": "PermissionsPolicyConnection",
        "kind": "LinkedField",
        "name": "__PermissionsPoliciesQuery_permissionsPolicies_connection",
        "plural": false,
        "selections": (v10/*: any*/),
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
    "name": "PermissionsPoliciesQuery",
    "selections": [
      {
        "alias": null,
        "args": (v11/*: any*/),
        "concreteType": "PermissionsPolicyConnection",
        "kind": "LinkedField",
        "name": "permissionsPolicies",
        "plural": false,
        "selections": (v10/*: any*/),
        "storageKey": "permissionsPolicies(first:500)"
      },
      {
        "alias": null,
        "args": (v11/*: any*/),
        "filters": null,
        "handle": "connection",
        "key": "PermissionsPoliciesQuery_permissionsPolicies",
        "kind": "LinkedHandle",
        "name": "permissionsPolicies"
      }
    ]
  },
  "params": {
    "cacheID": "be0a4b9c6f90b07606aa86d0d54c01c3",
    "id": null,
    "metadata": {
      "connection": [
        {
          "count": null,
          "cursor": null,
          "direction": "forward",
          "path": [
            "permissionsPolicies"
          ]
        }
      ]
    },
    "name": "PermissionsPoliciesQuery",
    "operationKind": "query",
    "text": "query PermissionsPoliciesQuery {\n  permissionsPolicies(first: 500) {\n    edges {\n      node {\n        id\n        name\n        description\n        isGlobal\n        policy {\n          __typename\n          ... on InventoryPolicy {\n            read {\n              isAllowed\n            }\n            location {\n              create {\n                isAllowed\n              }\n              update {\n                isAllowed\n                locationTypeIds\n              }\n              delete {\n                isAllowed\n              }\n            }\n            equipment {\n              create {\n                isAllowed\n              }\n              update {\n                isAllowed\n              }\n              delete {\n                isAllowed\n              }\n            }\n            equipmentType {\n              create {\n                isAllowed\n              }\n              update {\n                isAllowed\n              }\n              delete {\n                isAllowed\n              }\n            }\n            locationType {\n              create {\n                isAllowed\n              }\n              update {\n                isAllowed\n              }\n              delete {\n                isAllowed\n              }\n            }\n            portType {\n              create {\n                isAllowed\n              }\n              update {\n                isAllowed\n              }\n              delete {\n                isAllowed\n              }\n            }\n            serviceType {\n              create {\n                isAllowed\n              }\n              update {\n                isAllowed\n              }\n              delete {\n                isAllowed\n              }\n            }\n          }\n          ... on WorkforcePolicy {\n            read {\n              isAllowed\n              projectTypeIds\n              workOrderTypeIds\n            }\n            templates {\n              create {\n                isAllowed\n              }\n              update {\n                isAllowed\n              }\n              delete {\n                isAllowed\n              }\n            }\n            data {\n              create {\n                isAllowed\n              }\n              update {\n                isAllowed\n              }\n              delete {\n                isAllowed\n              }\n              assign {\n                isAllowed\n              }\n              transferOwnership {\n                isAllowed\n              }\n            }\n          }\n        }\n        groups {\n          id\n          name\n          description\n          status\n          members {\n            id\n            authID\n            firstName\n            lastName\n            email\n            status\n            role\n          }\n          policies {\n            id\n            name\n            description\n            isGlobal\n            policy {\n              __typename\n              ... on InventoryPolicy {\n                read {\n                  isAllowed\n                }\n                location {\n                  create {\n                    isAllowed\n                  }\n                  update {\n                    isAllowed\n                    locationTypeIds\n                  }\n                  delete {\n                    isAllowed\n                  }\n                }\n                equipment {\n                  create {\n                    isAllowed\n                  }\n                  update {\n                    isAllowed\n                  }\n                  delete {\n                    isAllowed\n                  }\n                }\n                equipmentType {\n                  create {\n                    isAllowed\n                  }\n                  update {\n                    isAllowed\n                  }\n                  delete {\n                    isAllowed\n                  }\n                }\n                locationType {\n                  create {\n                    isAllowed\n                  }\n                  update {\n                    isAllowed\n                  }\n                  delete {\n                    isAllowed\n                  }\n                }\n                portType {\n                  create {\n                    isAllowed\n                  }\n                  update {\n                    isAllowed\n                  }\n                  delete {\n                    isAllowed\n                  }\n                }\n                serviceType {\n                  create {\n                    isAllowed\n                  }\n                  update {\n                    isAllowed\n                  }\n                  delete {\n                    isAllowed\n                  }\n                }\n              }\n              ... on WorkforcePolicy {\n                read {\n                  isAllowed\n                  projectTypeIds\n                  workOrderTypeIds\n                }\n                templates {\n                  create {\n                    isAllowed\n                  }\n                  update {\n                    isAllowed\n                  }\n                  delete {\n                    isAllowed\n                  }\n                }\n                data {\n                  create {\n                    isAllowed\n                  }\n                  update {\n                    isAllowed\n                  }\n                  delete {\n                    isAllowed\n                  }\n                  assign {\n                    isAllowed\n                  }\n                  transferOwnership {\n                    isAllowed\n                  }\n                }\n              }\n            }\n          }\n        }\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'b0e3a85b985b97bd159367d23a3a0b1a';

module.exports = node;
