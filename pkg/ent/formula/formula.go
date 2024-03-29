// Copyright (c) 2004-present Facebook All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

// Code generated by entc, DO NOT EDIT.

package formula

import (
	"time"

	"github.com/facebook/ent"
)

const (
	// Label holds the string label denoting the formula type in the database.
	Label = "formula"
	// FieldID holds the string denoting the id field in the database.
	FieldID = "id"
	// FieldCreateTime holds the string denoting the create_time field in the database.
	FieldCreateTime = "create_time"
	// FieldUpdateTime holds the string denoting the update_time field in the database.
	FieldUpdateTime = "update_time"
	// FieldTextFormula holds the string denoting the textformula field in the database.
	FieldTextFormula = "text_formula"
	// FieldStatus holds the string denoting the status field in the database.
	FieldStatus = "status"

	// EdgeTech holds the string denoting the tech edge name in mutations.
	EdgeTech = "tech"
	// EdgeKpi holds the string denoting the kpi edge name in mutations.
	EdgeKpi = "kpi"
	// EdgeCounterformula holds the string denoting the counterformula edge name in mutations.
	EdgeCounterformula = "counterformula"

	// Table holds the table name of the formula in the database.
	Table = "formulas"
	// TechTable is the table the holds the tech relation/edge.
	TechTable = "formulas"
	// TechInverseTable is the table name for the Tech entity.
	// It exists in this package in order to avoid circular dependency with the "tech" package.
	TechInverseTable = "teches"
	// TechColumn is the table column denoting the tech relation/edge.
	TechColumn = "tech_formulatech"
	// KpiTable is the table the holds the kpi relation/edge.
	KpiTable = "formulas"
	// KpiInverseTable is the table name for the Kpi entity.
	// It exists in this package in order to avoid circular dependency with the "kpi" package.
	KpiInverseTable = "kpis"
	// KpiColumn is the table column denoting the kpi relation/edge.
	KpiColumn = "kpi_formulakpi"
	// CounterformulaTable is the table the holds the counterformula relation/edge.
	CounterformulaTable = "counter_formulas"
	// CounterformulaInverseTable is the table name for the CounterFormula entity.
	// It exists in this package in order to avoid circular dependency with the "counterformula" package.
	CounterformulaInverseTable = "counter_formulas"
	// CounterformulaColumn is the table column denoting the counterformula relation/edge.
	CounterformulaColumn = "formula_counterformula"
)

// Columns holds all SQL columns for formula fields.
var Columns = []string{
	FieldID,
	FieldCreateTime,
	FieldUpdateTime,
	FieldTextFormula,
	FieldStatus,
}

// ForeignKeys holds the SQL foreign-keys that are owned by the Formula type.
var ForeignKeys = []string{
	"kpi_formulakpi",
	"tech_formulatech",
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
	// TextFormulaValidator is a validator for the "textFormula" field. It is called by the builders before save.
	TextFormulaValidator func(string) error
)
