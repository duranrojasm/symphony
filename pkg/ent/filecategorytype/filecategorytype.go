// Copyright (c) 2004-present Facebook All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

// Code generated by entc, DO NOT EDIT.

package filecategorytype

import (
	"time"

	"github.com/facebook/ent"
)

const (
	// Label holds the string label denoting the filecategorytype type in the database.
	Label = "file_category_type"
	// FieldID holds the string denoting the id field in the database.
	FieldID = "id"
	// FieldCreateTime holds the string denoting the create_time field in the database.
	FieldCreateTime = "create_time"
	// FieldUpdateTime holds the string denoting the update_time field in the database.
	FieldUpdateTime = "update_time"
	// FieldName holds the string denoting the name field in the database.
	FieldName = "name"

	// EdgeLocationType holds the string denoting the location_type edge name in mutations.
	EdgeLocationType = "location_type"

	// Table holds the table name of the filecategorytype in the database.
	Table = "file_category_types"
	// LocationTypeTable is the table the holds the location_type relation/edge.
	LocationTypeTable = "file_category_types"
	// LocationTypeInverseTable is the table name for the LocationType entity.
	// It exists in this package in order to avoid circular dependency with the "locationtype" package.
	LocationTypeInverseTable = "location_types"
	// LocationTypeColumn is the table column denoting the location_type relation/edge.
	LocationTypeColumn = "location_type_file_category_type"
)

// Columns holds all SQL columns for filecategorytype fields.
var Columns = []string{
	FieldID,
	FieldCreateTime,
	FieldUpdateTime,
	FieldName,
}

// ForeignKeys holds the SQL foreign-keys that are owned by the FileCategoryType type.
var ForeignKeys = []string{
	"location_type_file_category_type",
}

// ValidColumn reports if the column name is valid (part of the table columns).
func ValidColumn(column string) bool {
	for i := range Columns {
		if column == Columns[i] {
			return true
		}
	}
	for i := range ForeignKeys {
		if column == ForeignKeys[i] {
			return true
		}
	}
	return false
}

// Note that the variables below are initialized by the runtime
// package on the initialization of the application. Therefore,
// it should be imported in the main as follows:
//
//	import _ "github.com/facebookincubator/symphony/pkg/ent/runtime"
//
var (
	Hooks  [1]ent.Hook
	Policy ent.Policy
	// DefaultCreateTime holds the default value on creation for the create_time field.
	DefaultCreateTime func() time.Time
	// DefaultUpdateTime holds the default value on creation for the update_time field.
	DefaultUpdateTime func() time.Time
	// UpdateDefaultUpdateTime holds the default value on update for the update_time field.
	UpdateDefaultUpdateTime func() time.Time
)