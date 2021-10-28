// Copyright (c) 2004-present Facebook All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

// Code generated by entc, DO NOT EDIT.

package kqicomparator

import (
	"time"

	"github.com/facebook/ent"
)

const (
	// Label holds the string label denoting the kqicomparator type in the database.
	Label = "kqi_comparator"
	// FieldID holds the string denoting the id field in the database.
	FieldID = "id"
	// FieldCreateTime holds the string denoting the create_time field in the database.
	FieldCreateTime = "create_time"
	// FieldUpdateTime holds the string denoting the update_time field in the database.
	FieldUpdateTime = "update_time"
	// FieldNumber holds the string denoting the number field in the database.
	FieldNumber = "number"
	// FieldComparatorType holds the string denoting the comparatortype field in the database.
	FieldComparatorType = "comparator_type"

	// EdgeComparatorkqitargetfk holds the string denoting the comparatorkqitargetfk edge name in mutations.
	EdgeComparatorkqitargetfk = "comparatorkqitargetfk"
	// EdgeKqitargetcomparatorfk holds the string denoting the kqitargetcomparatorfk edge name in mutations.
	EdgeKqitargetcomparatorfk = "kqitargetcomparatorfk"

	// Table holds the table name of the kqicomparator in the database.
	Table = "kqi_comparators"
	// ComparatorkqitargetfkTable is the table the holds the comparatorkqitargetfk relation/edge.
	ComparatorkqitargetfkTable = "kqi_comparators"
	// ComparatorkqitargetfkInverseTable is the table name for the Comparator entity.
	// It exists in this package in order to avoid circular dependency with the "comparator" package.
	ComparatorkqitargetfkInverseTable = "comparators"
	// ComparatorkqitargetfkColumn is the table column denoting the comparatorkqitargetfk relation/edge.
	ComparatorkqitargetfkColumn = "comparator_comparatorkqitargetfk"
	// KqitargetcomparatorfkTable is the table the holds the kqitargetcomparatorfk relation/edge.
	KqitargetcomparatorfkTable = "kqi_comparators"
	// KqitargetcomparatorfkInverseTable is the table name for the KqiTarget entity.
	// It exists in this package in order to avoid circular dependency with the "kqitarget" package.
	KqitargetcomparatorfkInverseTable = "kqi_targets"
	// KqitargetcomparatorfkColumn is the table column denoting the kqitargetcomparatorfk relation/edge.
	KqitargetcomparatorfkColumn = "kqi_target_kqitargetcomparatorfk"
)

// Columns holds all SQL columns for kqicomparator fields.
var Columns = []string{
	FieldID,
	FieldCreateTime,
	FieldUpdateTime,
	FieldNumber,
	FieldComparatorType,
}

// ForeignKeys holds the SQL foreign-keys that are owned by the KqiComparator type.
var ForeignKeys = []string{
	"comparator_comparatorkqitargetfk",
	"kqi_target_kqitargetcomparatorfk",
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
	// ComparatorTypeValidator is a validator for the "comparatorType" field. It is called by the builders before save.
	ComparatorTypeValidator func(string) error
)