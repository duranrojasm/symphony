// Copyright (c) 2004-present Facebook All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

// Code generated by entc, DO NOT EDIT.

package surveytemplatequestion

import (
	"time"

	"github.com/facebook/ent"
)

const (
	// Label holds the string label denoting the surveytemplatequestion type in the database.
	Label = "survey_template_question"
	// FieldID holds the string denoting the id field in the database.
	FieldID = "id"
	// FieldCreateTime holds the string denoting the create_time field in the database.
	FieldCreateTime = "create_time"
	// FieldUpdateTime holds the string denoting the update_time field in the database.
	FieldUpdateTime = "update_time"
	// FieldQuestionTitle holds the string denoting the question_title field in the database.
	FieldQuestionTitle = "question_title"
	// FieldQuestionDescription holds the string denoting the question_description field in the database.
	FieldQuestionDescription = "question_description"
	// FieldQuestionType holds the string denoting the question_type field in the database.
	FieldQuestionType = "question_type"
	// FieldIndex holds the string denoting the index field in the database.
	FieldIndex = "index"

	// EdgeCategory holds the string denoting the category edge name in mutations.
	EdgeCategory = "category"

	// Table holds the table name of the surveytemplatequestion in the database.
	Table = "survey_template_questions"
	// CategoryTable is the table the holds the category relation/edge.
	CategoryTable = "survey_template_questions"
	// CategoryInverseTable is the table name for the SurveyTemplateCategory entity.
	// It exists in this package in order to avoid circular dependency with the "surveytemplatecategory" package.
	CategoryInverseTable = "survey_template_categories"
	// CategoryColumn is the table column denoting the category relation/edge.
	CategoryColumn = "survey_template_category_survey_template_questions"
)

// Columns holds all SQL columns for surveytemplatequestion fields.
var Columns = []string{
	FieldID,
	FieldCreateTime,
	FieldUpdateTime,
	FieldQuestionTitle,
	FieldQuestionDescription,
	FieldQuestionType,
	FieldIndex,
}

// ForeignKeys holds the SQL foreign-keys that are owned by the SurveyTemplateQuestion type.
var ForeignKeys = []string{
	"survey_template_category_survey_template_questions",
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
