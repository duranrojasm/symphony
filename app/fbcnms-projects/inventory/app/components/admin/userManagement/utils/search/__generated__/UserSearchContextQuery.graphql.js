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
export type FilterOperator = "CONTAINS" | "DATE_GREATER_OR_EQUAL_THAN" | "DATE_GREATER_THAN" | "DATE_LESS_OR_EQUAL_THAN" | "DATE_LESS_THAN" | "IS" | "IS_NOT_ONE_OF" | "IS_ONE_OF" | "%future added value";
export type PermissionValue = "BY_CONDITION" | "NO" | "YES" | "%future added value";
export type PropertyKind = "bool" | "date" | "datetime_local" | "email" | "enum" | "float" | "gps_location" | "int" | "node" | "range" | "string" | "%future added value";
export type UserFilterType = "USER_NAME" | "USER_ORGANIZATION" | "USER_STATUS" | "%future added value";
export type UserRole = "ADMIN" | "OWNER" | "USER" | "%future added value";
export type UserStatus = "ACTIVE" | "DEACTIVATED" | "%future added value";
export type UsersGroupStatus = "ACTIVE" | "DEACTIVATED" | "%future added value";
export type UserFilterInput = {|
  filterType: UserFilterType,
  operator: FilterOperator,
  stringValue?: ?string,
  propertyValue?: ?PropertyTypeInput,
  statusValue?: ?UserStatus,
  idSet?: ?$ReadOnlyArray<string>,
  stringSet?: ?$ReadOnlyArray<string>,
  maxDepth?: ?number,
|};
export type PropertyTypeInput = {|
  id?: ?string,
  externalId?: ?string,
  name: string,
  type: PropertyKind,
  nodeType?: ?string,
  index?: ?number,
  category?: ?string,
  stringValue?: ?string,
  intValue?: ?number,
  booleanValue?: ?boolean,
  floatValue?: ?number,
  latitudeValue?: ?number,
  longitudeValue?: ?number,
  rangeFromValue?: ?number,
  rangeToValue?: ?number,
  isEditable?: ?boolean,
  isInstanceProperty?: ?boolean,
  isMandatory?: ?boolean,
  isDeleted?: ?boolean,
|};
export type UserSearchContextQueryVariables = {|
  filters: $ReadOnlyArray<UserFilterInput>
|};
export type UserSearchContextQueryResponse = {|
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
export type UserSearchContextQuery = {|
  variables: UserSearchContextQueryVariables,
  response: UserSearchContextQueryResponse,
|};
*/


/*
query UserSearchContextQuery(
  $filters: [UserFilterInput!]!
) {
  users(first: 500, filterBy: $filters) {
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
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "filters"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "authID",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "firstName",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "lastName",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "email",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "status",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "role",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "description",
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
    "args": [
      {
        "kind": "Variable",
        "name": "filterBy",
        "variableName": "filters"
      },
      {
        "kind": "Literal",
        "name": "first",
        "value": 500
      }
    ],
    "concreteType": "UserConnection",
    "kind": "LinkedField",
    "name": "users",
    "plural": false,
    "selections": [
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
              (v1/*: any*/),
              (v2/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/),
              (v7/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "UsersGroup",
                "kind": "LinkedField",
                "name": "groups",
                "plural": true,
                "selections": [
                  (v1/*: any*/),
                  (v8/*: any*/),
                  (v9/*: any*/),
                  (v6/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "User",
                    "kind": "LinkedField",
                    "name": "members",
                    "plural": true,
                    "selections": [
                      (v1/*: any*/),
                      (v2/*: any*/),
                      (v3/*: any*/),
                      (v4/*: any*/),
                      (v5/*: any*/),
                      (v6/*: any*/),
                      (v7/*: any*/)
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
                      (v1/*: any*/),
                      (v8/*: any*/),
                      (v9/*: any*/),
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
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "UserSearchContextQuery",
    "selections": (v13/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UserSearchContextQuery",
    "selections": (v13/*: any*/)
  },
  "params": {
    "cacheID": "b574e285f3e5bb12d5c7eb0d34cb706c",
    "id": null,
    "metadata": {},
    "name": "UserSearchContextQuery",
    "operationKind": "query",
    "text": "query UserSearchContextQuery(\n  $filters: [UserFilterInput!]!\n) {\n  users(first: 500, filterBy: $filters) {\n    edges {\n      node {\n        id\n        authID\n        firstName\n        lastName\n        email\n        status\n        role\n        groups {\n          id\n          name\n          description\n          status\n          members {\n            id\n            authID\n            firstName\n            lastName\n            email\n            status\n            role\n          }\n          policies {\n            id\n            name\n            description\n            isGlobal\n            policy {\n              __typename\n              ... on InventoryPolicy {\n                read {\n                  isAllowed\n                }\n                location {\n                  create {\n                    isAllowed\n                  }\n                  update {\n                    isAllowed\n                    locationTypeIds\n                  }\n                  delete {\n                    isAllowed\n                  }\n                }\n                equipment {\n                  create {\n                    isAllowed\n                  }\n                  update {\n                    isAllowed\n                  }\n                  delete {\n                    isAllowed\n                  }\n                }\n                equipmentType {\n                  create {\n                    isAllowed\n                  }\n                  update {\n                    isAllowed\n                  }\n                  delete {\n                    isAllowed\n                  }\n                }\n                locationType {\n                  create {\n                    isAllowed\n                  }\n                  update {\n                    isAllowed\n                  }\n                  delete {\n                    isAllowed\n                  }\n                }\n                portType {\n                  create {\n                    isAllowed\n                  }\n                  update {\n                    isAllowed\n                  }\n                  delete {\n                    isAllowed\n                  }\n                }\n                serviceType {\n                  create {\n                    isAllowed\n                  }\n                  update {\n                    isAllowed\n                  }\n                  delete {\n                    isAllowed\n                  }\n                }\n              }\n              ... on WorkforcePolicy {\n                read {\n                  isAllowed\n                  projectTypeIds\n                  workOrderTypeIds\n                }\n                templates {\n                  create {\n                    isAllowed\n                  }\n                  update {\n                    isAllowed\n                  }\n                  delete {\n                    isAllowed\n                  }\n                }\n                data {\n                  create {\n                    isAllowed\n                  }\n                  update {\n                    isAllowed\n                  }\n                  delete {\n                    isAllowed\n                  }\n                  assign {\n                    isAllowed\n                  }\n                  transferOwnership {\n                    isAllowed\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'bcf8fa5196184a9a972736065128c4c6';

module.exports = node;
