// Copyright (c) 2004-present Facebook All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

// Code generated by entc, DO NOT EDIT.

package blockinstance

import (
	"time"

	"github.com/facebook/ent/dialect/sql"
	"github.com/facebook/ent/dialect/sql/sqlgraph"
	"github.com/facebookincubator/symphony/pkg/ent/predicate"
)

// ID filters vertices based on their identifier.
func ID(id int) predicate.BlockInstance {
	return predicate.BlockInstance(func(s *sql.Selector) {
		s.Where(sql.EQ(s.C(FieldID), id))
	})
}

// IDEQ applies the EQ predicate on the ID field.
func IDEQ(id int) predicate.BlockInstance {
	return predicate.BlockInstance(func(s *sql.Selector) {
		s.Where(sql.EQ(s.C(FieldID), id))
	})
}

// IDNEQ applies the NEQ predicate on the ID field.
func IDNEQ(id int) predicate.BlockInstance {
	return predicate.BlockInstance(func(s *sql.Selector) {
		s.Where(sql.NEQ(s.C(FieldID), id))
	})
}

// IDIn applies the In predicate on the ID field.
func IDIn(ids ...int) predicate.BlockInstance {
	return predicate.BlockInstance(func(s *sql.Selector) {
		// if not arguments were provided, append the FALSE constants,
		// since we can't apply "IN ()". This will make this predicate falsy.
		if len(ids) == 0 {
			s.Where(sql.False())
			return
		}
		v := make([]interface{}, len(ids))
		for i := range v {
			v[i] = ids[i]
		}
		s.Where(sql.In(s.C(FieldID), v...))
	})
}

// IDNotIn applies the NotIn predicate on the ID field.
func IDNotIn(ids ...int) predicate.BlockInstance {
	return predicate.BlockInstance(func(s *sql.Selector) {
		// if not arguments were provided, append the FALSE constants,
		// since we can't apply "IN ()". This will make this predicate falsy.
		if len(ids) == 0 {
			s.Where(sql.False())
			return
		}
		v := make([]interface{}, len(ids))
		for i := range v {
			v[i] = ids[i]
		}
		s.Where(sql.NotIn(s.C(FieldID), v...))
	})
}

// IDGT applies the GT predicate on the ID field.
func IDGT(id int) predicate.BlockInstance {
	return predicate.BlockInstance(func(s *sql.Selector) {
		s.Where(sql.GT(s.C(FieldID), id))
	})
}

// IDGTE applies the GTE predicate on the ID field.
func IDGTE(id int) predicate.BlockInstance {
	return predicate.BlockInstance(func(s *sql.Selector) {
		s.Where(sql.GTE(s.C(FieldID), id))
	})
}

// IDLT applies the LT predicate on the ID field.
func IDLT(id int) predicate.BlockInstance {
	return predicate.BlockInstance(func(s *sql.Selector) {
		s.Where(sql.LT(s.C(FieldID), id))
	})
}

// IDLTE applies the LTE predicate on the ID field.
func IDLTE(id int) predicate.BlockInstance {
	return predicate.BlockInstance(func(s *sql.Selector) {
		s.Where(sql.LTE(s.C(FieldID), id))
	})
}

// CreateTime applies equality check predicate on the "create_time" field. It's identical to CreateTimeEQ.
func CreateTime(v time.Time) predicate.BlockInstance {
	return predicate.BlockInstance(func(s *sql.Selector) {
		s.Where(sql.EQ(s.C(FieldCreateTime), v))
	})
}

// UpdateTime applies equality check predicate on the "update_time" field. It's identical to UpdateTimeEQ.
func UpdateTime(v time.Time) predicate.BlockInstance {
	return predicate.BlockInstance(func(s *sql.Selector) {
		s.Where(sql.EQ(s.C(FieldUpdateTime), v))
	})
}

// FailureReason applies equality check predicate on the "failure_reason" field. It's identical to FailureReasonEQ.
func FailureReason(v string) predicate.BlockInstance {
	return predicate.BlockInstance(func(s *sql.Selector) {
		s.Where(sql.EQ(s.C(FieldFailureReason), v))
	})
}

// BlockInstanceCounter applies equality check predicate on the "block_instance_counter" field. It's identical to BlockInstanceCounterEQ.
func BlockInstanceCounter(v int) predicate.BlockInstance {
	return predicate.BlockInstance(func(s *sql.Selector) {
		s.Where(sql.EQ(s.C(FieldBlockInstanceCounter), v))
	})
}

// StartDate applies equality check predicate on the "start_date" field. It's identical to StartDateEQ.
func StartDate(v time.Time) predicate.BlockInstance {
	return predicate.BlockInstance(func(s *sql.Selector) {
		s.Where(sql.EQ(s.C(FieldStartDate), v))
	})
}

// EndDate applies equality check predicate on the "end_date" field. It's identical to EndDateEQ.
func EndDate(v time.Time) predicate.BlockInstance {
	return predicate.BlockInstance(func(s *sql.Selector) {
		s.Where(sql.EQ(s.C(FieldEndDate), v))
	})
}

// CreateTimeEQ applies the EQ predicate on the "create_time" field.
func CreateTimeEQ(v time.Time) predicate.BlockInstance {
	return predicate.BlockInstance(func(s *sql.Selector) {
		s.Where(sql.EQ(s.C(FieldCreateTime), v))
	})
}

// CreateTimeNEQ applies the NEQ predicate on the "create_time" field.
func CreateTimeNEQ(v time.Time) predicate.BlockInstance {
	return predicate.BlockInstance(func(s *sql.Selector) {
		s.Where(sql.NEQ(s.C(FieldCreateTime), v))
	})
}

// CreateTimeIn applies the In predicate on the "create_time" field.
func CreateTimeIn(vs ...time.Time) predicate.BlockInstance {
	v := make([]interface{}, len(vs))
	for i := range v {
		v[i] = vs[i]
	}
	return predicate.BlockInstance(func(s *sql.Selector) {
		// if not arguments were provided, append the FALSE constants,
		// since we can't apply "IN ()". This will make this predicate falsy.
		if len(v) == 0 {
			s.Where(sql.False())
			return
		}
		s.Where(sql.In(s.C(FieldCreateTime), v...))
	})
}

// CreateTimeNotIn applies the NotIn predicate on the "create_time" field.
func CreateTimeNotIn(vs ...time.Time) predicate.BlockInstance {
	v := make([]interface{}, len(vs))
	for i := range v {
		v[i] = vs[i]
	}
	return predicate.BlockInstance(func(s *sql.Selector) {
		// if not arguments were provided, append the FALSE constants,
		// since we can't apply "IN ()". This will make this predicate falsy.
		if len(v) == 0 {
			s.Where(sql.False())
			return
		}
		s.Where(sql.NotIn(s.C(FieldCreateTime), v...))
	})
}

// CreateTimeGT applies the GT predicate on the "create_time" field.
func CreateTimeGT(v time.Time) predicate.BlockInstance {
	return predicate.BlockInstance(func(s *sql.Selector) {
		s.Where(sql.GT(s.C(FieldCreateTime), v))
	})
}

// CreateTimeGTE applies the GTE predicate on the "create_time" field.
func CreateTimeGTE(v time.Time) predicate.BlockInstance {
	return predicate.BlockInstance(func(s *sql.Selector) {
		s.Where(sql.GTE(s.C(FieldCreateTime), v))
	})
}

// CreateTimeLT applies the LT predicate on the "create_time" field.
func CreateTimeLT(v time.Time) predicate.BlockInstance {
	return predicate.BlockInstance(func(s *sql.Selector) {
		s.Where(sql.LT(s.C(FieldCreateTime), v))
	})
}

// CreateTimeLTE applies the LTE predicate on the "create_time" field.
func CreateTimeLTE(v time.Time) predicate.BlockInstance {
	return predicate.BlockInstance(func(s *sql.Selector) {
		s.Where(sql.LTE(s.C(FieldCreateTime), v))
	})
}

// UpdateTimeEQ applies the EQ predicate on the "update_time" field.
func UpdateTimeEQ(v time.Time) predicate.BlockInstance {
	return predicate.BlockInstance(func(s *sql.Selector) {
		s.Where(sql.EQ(s.C(FieldUpdateTime), v))
	})
}

// UpdateTimeNEQ applies the NEQ predicate on the "update_time" field.
func UpdateTimeNEQ(v time.Time) predicate.BlockInstance {
	return predicate.BlockInstance(func(s *sql.Selector) {
		s.Where(sql.NEQ(s.C(FieldUpdateTime), v))
	})
}

// UpdateTimeIn applies the In predicate on the "update_time" field.
func UpdateTimeIn(vs ...time.Time) predicate.BlockInstance {
	v := make([]interface{}, len(vs))
	for i := range v {
		v[i] = vs[i]
	}
	return predicate.BlockInstance(func(s *sql.Selector) {
		// if not arguments were provided, append the FALSE constants,
		// since we can't apply "IN ()". This will make this predicate falsy.
		if len(v) == 0 {
			s.Where(sql.False())
			return
		}
		s.Where(sql.In(s.C(FieldUpdateTime), v...))
	})
}

// UpdateTimeNotIn applies the NotIn predicate on the "update_time" field.
func UpdateTimeNotIn(vs ...time.Time) predicate.BlockInstance {
	v := make([]interface{}, len(vs))
	for i := range v {
		v[i] = vs[i]
	}
	return predicate.BlockInstance(func(s *sql.Selector) {
		// if not arguments were provided, append the FALSE constants,
		// since we can't apply "IN ()". This will make this predicate falsy.
		if len(v) == 0 {
			s.Where(sql.False())
			return
		}
		s.Where(sql.NotIn(s.C(FieldUpdateTime), v...))
	})
}

// UpdateTimeGT applies the GT predicate on the "update_time" field.
func UpdateTimeGT(v time.Time) predicate.BlockInstance {
	return predicate.BlockInstance(func(s *sql.Selector) {
		s.Where(sql.GT(s.C(FieldUpdateTime), v))
	})
}

// UpdateTimeGTE applies the GTE predicate on the "update_time" field.
func UpdateTimeGTE(v time.Time) predicate.BlockInstance {
	return predicate.BlockInstance(func(s *sql.Selector) {
		s.Where(sql.GTE(s.C(FieldUpdateTime), v))
	})
}

// UpdateTimeLT applies the LT predicate on the "update_time" field.
func UpdateTimeLT(v time.Time) predicate.BlockInstance {
	return predicate.BlockInstance(func(s *sql.Selector) {
		s.Where(sql.LT(s.C(FieldUpdateTime), v))
	})
}

// UpdateTimeLTE applies the LTE predicate on the "update_time" field.
func UpdateTimeLTE(v time.Time) predicate.BlockInstance {
	return predicate.BlockInstance(func(s *sql.Selector) {
		s.Where(sql.LTE(s.C(FieldUpdateTime), v))
	})
}

// StatusEQ applies the EQ predicate on the "status" field.
func StatusEQ(v Status) predicate.BlockInstance {
	return predicate.BlockInstance(func(s *sql.Selector) {
		s.Where(sql.EQ(s.C(FieldStatus), v))
	})
}

// StatusNEQ applies the NEQ predicate on the "status" field.
func StatusNEQ(v Status) predicate.BlockInstance {
	return predicate.BlockInstance(func(s *sql.Selector) {
		s.Where(sql.NEQ(s.C(FieldStatus), v))
	})
}

// StatusIn applies the In predicate on the "status" field.
func StatusIn(vs ...Status) predicate.BlockInstance {
	v := make([]interface{}, len(vs))
	for i := range v {
		v[i] = vs[i]
	}
	return predicate.BlockInstance(func(s *sql.Selector) {
		// if not arguments were provided, append the FALSE constants,
		// since we can't apply "IN ()". This will make this predicate falsy.
		if len(v) == 0 {
			s.Where(sql.False())
			return
		}
		s.Where(sql.In(s.C(FieldStatus), v...))
	})
}

// StatusNotIn applies the NotIn predicate on the "status" field.
func StatusNotIn(vs ...Status) predicate.BlockInstance {
	v := make([]interface{}, len(vs))
	for i := range v {
		v[i] = vs[i]
	}
	return predicate.BlockInstance(func(s *sql.Selector) {
		// if not arguments were provided, append the FALSE constants,
		// since we can't apply "IN ()". This will make this predicate falsy.
		if len(v) == 0 {
			s.Where(sql.False())
			return
		}
		s.Where(sql.NotIn(s.C(FieldStatus), v...))
	})
}

// InputsIsNil applies the IsNil predicate on the "inputs" field.
func InputsIsNil() predicate.BlockInstance {
	return predicate.BlockInstance(func(s *sql.Selector) {
		s.Where(sql.IsNull(s.C(FieldInputs)))
	})
}

// InputsNotNil applies the NotNil predicate on the "inputs" field.
func InputsNotNil() predicate.BlockInstance {
	return predicate.BlockInstance(func(s *sql.Selector) {
		s.Where(sql.NotNull(s.C(FieldInputs)))
	})
}

// OutputsIsNil applies the IsNil predicate on the "outputs" field.
func OutputsIsNil() predicate.BlockInstance {
	return predicate.BlockInstance(func(s *sql.Selector) {
		s.Where(sql.IsNull(s.C(FieldOutputs)))
	})
}

// OutputsNotNil applies the NotNil predicate on the "outputs" field.
func OutputsNotNil() predicate.BlockInstance {
	return predicate.BlockInstance(func(s *sql.Selector) {
		s.Where(sql.NotNull(s.C(FieldOutputs)))
	})
}

// FailureReasonEQ applies the EQ predicate on the "failure_reason" field.
func FailureReasonEQ(v string) predicate.BlockInstance {
	return predicate.BlockInstance(func(s *sql.Selector) {
		s.Where(sql.EQ(s.C(FieldFailureReason), v))
	})
}

// FailureReasonNEQ applies the NEQ predicate on the "failure_reason" field.
func FailureReasonNEQ(v string) predicate.BlockInstance {
	return predicate.BlockInstance(func(s *sql.Selector) {
		s.Where(sql.NEQ(s.C(FieldFailureReason), v))
	})
}

// FailureReasonIn applies the In predicate on the "failure_reason" field.
func FailureReasonIn(vs ...string) predicate.BlockInstance {
	v := make([]interface{}, len(vs))
	for i := range v {
		v[i] = vs[i]
	}
	return predicate.BlockInstance(func(s *sql.Selector) {
		// if not arguments were provided, append the FALSE constants,
		// since we can't apply "IN ()". This will make this predicate falsy.
		if len(v) == 0 {
			s.Where(sql.False())
			return
		}
		s.Where(sql.In(s.C(FieldFailureReason), v...))
	})
}

// FailureReasonNotIn applies the NotIn predicate on the "failure_reason" field.
func FailureReasonNotIn(vs ...string) predicate.BlockInstance {
	v := make([]interface{}, len(vs))
	for i := range v {
		v[i] = vs[i]
	}
	return predicate.BlockInstance(func(s *sql.Selector) {
		// if not arguments were provided, append the FALSE constants,
		// since we can't apply "IN ()". This will make this predicate falsy.
		if len(v) == 0 {
			s.Where(sql.False())
			return
		}
		s.Where(sql.NotIn(s.C(FieldFailureReason), v...))
	})
}

// FailureReasonGT applies the GT predicate on the "failure_reason" field.
func FailureReasonGT(v string) predicate.BlockInstance {
	return predicate.BlockInstance(func(s *sql.Selector) {
		s.Where(sql.GT(s.C(FieldFailureReason), v))
	})
}

// FailureReasonGTE applies the GTE predicate on the "failure_reason" field.
func FailureReasonGTE(v string) predicate.BlockInstance {
	return predicate.BlockInstance(func(s *sql.Selector) {
		s.Where(sql.GTE(s.C(FieldFailureReason), v))
	})
}

// FailureReasonLT applies the LT predicate on the "failure_reason" field.
func FailureReasonLT(v string) predicate.BlockInstance {
	return predicate.BlockInstance(func(s *sql.Selector) {
		s.Where(sql.LT(s.C(FieldFailureReason), v))
	})
}

// FailureReasonLTE applies the LTE predicate on the "failure_reason" field.
func FailureReasonLTE(v string) predicate.BlockInstance {
	return predicate.BlockInstance(func(s *sql.Selector) {
		s.Where(sql.LTE(s.C(FieldFailureReason), v))
	})
}

// FailureReasonContains applies the Contains predicate on the "failure_reason" field.
func FailureReasonContains(v string) predicate.BlockInstance {
	return predicate.BlockInstance(func(s *sql.Selector) {
		s.Where(sql.Contains(s.C(FieldFailureReason), v))
	})
}

// FailureReasonHasPrefix applies the HasPrefix predicate on the "failure_reason" field.
func FailureReasonHasPrefix(v string) predicate.BlockInstance {
	return predicate.BlockInstance(func(s *sql.Selector) {
		s.Where(sql.HasPrefix(s.C(FieldFailureReason), v))
	})
}

// FailureReasonHasSuffix applies the HasSuffix predicate on the "failure_reason" field.
func FailureReasonHasSuffix(v string) predicate.BlockInstance {
	return predicate.BlockInstance(func(s *sql.Selector) {
		s.Where(sql.HasSuffix(s.C(FieldFailureReason), v))
	})
}

// FailureReasonIsNil applies the IsNil predicate on the "failure_reason" field.
func FailureReasonIsNil() predicate.BlockInstance {
	return predicate.BlockInstance(func(s *sql.Selector) {
		s.Where(sql.IsNull(s.C(FieldFailureReason)))
	})
}

// FailureReasonNotNil applies the NotNil predicate on the "failure_reason" field.
func FailureReasonNotNil() predicate.BlockInstance {
	return predicate.BlockInstance(func(s *sql.Selector) {
		s.Where(sql.NotNull(s.C(FieldFailureReason)))
	})
}

// FailureReasonEqualFold applies the EqualFold predicate on the "failure_reason" field.
func FailureReasonEqualFold(v string) predicate.BlockInstance {
	return predicate.BlockInstance(func(s *sql.Selector) {
		s.Where(sql.EqualFold(s.C(FieldFailureReason), v))
	})
}

// FailureReasonContainsFold applies the ContainsFold predicate on the "failure_reason" field.
func FailureReasonContainsFold(v string) predicate.BlockInstance {
	return predicate.BlockInstance(func(s *sql.Selector) {
		s.Where(sql.ContainsFold(s.C(FieldFailureReason), v))
	})
}

// BlockInstanceCounterEQ applies the EQ predicate on the "block_instance_counter" field.
func BlockInstanceCounterEQ(v int) predicate.BlockInstance {
	return predicate.BlockInstance(func(s *sql.Selector) {
		s.Where(sql.EQ(s.C(FieldBlockInstanceCounter), v))
	})
}

// BlockInstanceCounterNEQ applies the NEQ predicate on the "block_instance_counter" field.
func BlockInstanceCounterNEQ(v int) predicate.BlockInstance {
	return predicate.BlockInstance(func(s *sql.Selector) {
		s.Where(sql.NEQ(s.C(FieldBlockInstanceCounter), v))
	})
}

// BlockInstanceCounterIn applies the In predicate on the "block_instance_counter" field.
func BlockInstanceCounterIn(vs ...int) predicate.BlockInstance {
	v := make([]interface{}, len(vs))
	for i := range v {
		v[i] = vs[i]
	}
	return predicate.BlockInstance(func(s *sql.Selector) {
		// if not arguments were provided, append the FALSE constants,
		// since we can't apply "IN ()". This will make this predicate falsy.
		if len(v) == 0 {
			s.Where(sql.False())
			return
		}
		s.Where(sql.In(s.C(FieldBlockInstanceCounter), v...))
	})
}

// BlockInstanceCounterNotIn applies the NotIn predicate on the "block_instance_counter" field.
func BlockInstanceCounterNotIn(vs ...int) predicate.BlockInstance {
	v := make([]interface{}, len(vs))
	for i := range v {
		v[i] = vs[i]
	}
	return predicate.BlockInstance(func(s *sql.Selector) {
		// if not arguments were provided, append the FALSE constants,
		// since we can't apply "IN ()". This will make this predicate falsy.
		if len(v) == 0 {
			s.Where(sql.False())
			return
		}
		s.Where(sql.NotIn(s.C(FieldBlockInstanceCounter), v...))
	})
}

// BlockInstanceCounterGT applies the GT predicate on the "block_instance_counter" field.
func BlockInstanceCounterGT(v int) predicate.BlockInstance {
	return predicate.BlockInstance(func(s *sql.Selector) {
		s.Where(sql.GT(s.C(FieldBlockInstanceCounter), v))
	})
}

// BlockInstanceCounterGTE applies the GTE predicate on the "block_instance_counter" field.
func BlockInstanceCounterGTE(v int) predicate.BlockInstance {
	return predicate.BlockInstance(func(s *sql.Selector) {
		s.Where(sql.GTE(s.C(FieldBlockInstanceCounter), v))
	})
}

// BlockInstanceCounterLT applies the LT predicate on the "block_instance_counter" field.
func BlockInstanceCounterLT(v int) predicate.BlockInstance {
	return predicate.BlockInstance(func(s *sql.Selector) {
		s.Where(sql.LT(s.C(FieldBlockInstanceCounter), v))
	})
}

// BlockInstanceCounterLTE applies the LTE predicate on the "block_instance_counter" field.
func BlockInstanceCounterLTE(v int) predicate.BlockInstance {
	return predicate.BlockInstance(func(s *sql.Selector) {
		s.Where(sql.LTE(s.C(FieldBlockInstanceCounter), v))
	})
}

// BlockInstanceCounterIsNil applies the IsNil predicate on the "block_instance_counter" field.
func BlockInstanceCounterIsNil() predicate.BlockInstance {
	return predicate.BlockInstance(func(s *sql.Selector) {
		s.Where(sql.IsNull(s.C(FieldBlockInstanceCounter)))
	})
}

// BlockInstanceCounterNotNil applies the NotNil predicate on the "block_instance_counter" field.
func BlockInstanceCounterNotNil() predicate.BlockInstance {
	return predicate.BlockInstance(func(s *sql.Selector) {
		s.Where(sql.NotNull(s.C(FieldBlockInstanceCounter)))
	})
}

// StartDateEQ applies the EQ predicate on the "start_date" field.
func StartDateEQ(v time.Time) predicate.BlockInstance {
	return predicate.BlockInstance(func(s *sql.Selector) {
		s.Where(sql.EQ(s.C(FieldStartDate), v))
	})
}

// StartDateNEQ applies the NEQ predicate on the "start_date" field.
func StartDateNEQ(v time.Time) predicate.BlockInstance {
	return predicate.BlockInstance(func(s *sql.Selector) {
		s.Where(sql.NEQ(s.C(FieldStartDate), v))
	})
}

// StartDateIn applies the In predicate on the "start_date" field.
func StartDateIn(vs ...time.Time) predicate.BlockInstance {
	v := make([]interface{}, len(vs))
	for i := range v {
		v[i] = vs[i]
	}
	return predicate.BlockInstance(func(s *sql.Selector) {
		// if not arguments were provided, append the FALSE constants,
		// since we can't apply "IN ()". This will make this predicate falsy.
		if len(v) == 0 {
			s.Where(sql.False())
			return
		}
		s.Where(sql.In(s.C(FieldStartDate), v...))
	})
}

// StartDateNotIn applies the NotIn predicate on the "start_date" field.
func StartDateNotIn(vs ...time.Time) predicate.BlockInstance {
	v := make([]interface{}, len(vs))
	for i := range v {
		v[i] = vs[i]
	}
	return predicate.BlockInstance(func(s *sql.Selector) {
		// if not arguments were provided, append the FALSE constants,
		// since we can't apply "IN ()". This will make this predicate falsy.
		if len(v) == 0 {
			s.Where(sql.False())
			return
		}
		s.Where(sql.NotIn(s.C(FieldStartDate), v...))
	})
}

// StartDateGT applies the GT predicate on the "start_date" field.
func StartDateGT(v time.Time) predicate.BlockInstance {
	return predicate.BlockInstance(func(s *sql.Selector) {
		s.Where(sql.GT(s.C(FieldStartDate), v))
	})
}

// StartDateGTE applies the GTE predicate on the "start_date" field.
func StartDateGTE(v time.Time) predicate.BlockInstance {
	return predicate.BlockInstance(func(s *sql.Selector) {
		s.Where(sql.GTE(s.C(FieldStartDate), v))
	})
}

// StartDateLT applies the LT predicate on the "start_date" field.
func StartDateLT(v time.Time) predicate.BlockInstance {
	return predicate.BlockInstance(func(s *sql.Selector) {
		s.Where(sql.LT(s.C(FieldStartDate), v))
	})
}

// StartDateLTE applies the LTE predicate on the "start_date" field.
func StartDateLTE(v time.Time) predicate.BlockInstance {
	return predicate.BlockInstance(func(s *sql.Selector) {
		s.Where(sql.LTE(s.C(FieldStartDate), v))
	})
}

// EndDateEQ applies the EQ predicate on the "end_date" field.
func EndDateEQ(v time.Time) predicate.BlockInstance {
	return predicate.BlockInstance(func(s *sql.Selector) {
		s.Where(sql.EQ(s.C(FieldEndDate), v))
	})
}

// EndDateNEQ applies the NEQ predicate on the "end_date" field.
func EndDateNEQ(v time.Time) predicate.BlockInstance {
	return predicate.BlockInstance(func(s *sql.Selector) {
		s.Where(sql.NEQ(s.C(FieldEndDate), v))
	})
}

// EndDateIn applies the In predicate on the "end_date" field.
func EndDateIn(vs ...time.Time) predicate.BlockInstance {
	v := make([]interface{}, len(vs))
	for i := range v {
		v[i] = vs[i]
	}
	return predicate.BlockInstance(func(s *sql.Selector) {
		// if not arguments were provided, append the FALSE constants,
		// since we can't apply "IN ()". This will make this predicate falsy.
		if len(v) == 0 {
			s.Where(sql.False())
			return
		}
		s.Where(sql.In(s.C(FieldEndDate), v...))
	})
}

// EndDateNotIn applies the NotIn predicate on the "end_date" field.
func EndDateNotIn(vs ...time.Time) predicate.BlockInstance {
	v := make([]interface{}, len(vs))
	for i := range v {
		v[i] = vs[i]
	}
	return predicate.BlockInstance(func(s *sql.Selector) {
		// if not arguments were provided, append the FALSE constants,
		// since we can't apply "IN ()". This will make this predicate falsy.
		if len(v) == 0 {
			s.Where(sql.False())
			return
		}
		s.Where(sql.NotIn(s.C(FieldEndDate), v...))
	})
}

// EndDateGT applies the GT predicate on the "end_date" field.
func EndDateGT(v time.Time) predicate.BlockInstance {
	return predicate.BlockInstance(func(s *sql.Selector) {
		s.Where(sql.GT(s.C(FieldEndDate), v))
	})
}

// EndDateGTE applies the GTE predicate on the "end_date" field.
func EndDateGTE(v time.Time) predicate.BlockInstance {
	return predicate.BlockInstance(func(s *sql.Selector) {
		s.Where(sql.GTE(s.C(FieldEndDate), v))
	})
}

// EndDateLT applies the LT predicate on the "end_date" field.
func EndDateLT(v time.Time) predicate.BlockInstance {
	return predicate.BlockInstance(func(s *sql.Selector) {
		s.Where(sql.LT(s.C(FieldEndDate), v))
	})
}

// EndDateLTE applies the LTE predicate on the "end_date" field.
func EndDateLTE(v time.Time) predicate.BlockInstance {
	return predicate.BlockInstance(func(s *sql.Selector) {
		s.Where(sql.LTE(s.C(FieldEndDate), v))
	})
}

// EndDateIsNil applies the IsNil predicate on the "end_date" field.
func EndDateIsNil() predicate.BlockInstance {
	return predicate.BlockInstance(func(s *sql.Selector) {
		s.Where(sql.IsNull(s.C(FieldEndDate)))
	})
}

// EndDateNotNil applies the NotNil predicate on the "end_date" field.
func EndDateNotNil() predicate.BlockInstance {
	return predicate.BlockInstance(func(s *sql.Selector) {
		s.Where(sql.NotNull(s.C(FieldEndDate)))
	})
}

// HasFlowInstance applies the HasEdge predicate on the "flow_instance" edge.
func HasFlowInstance() predicate.BlockInstance {
	return predicate.BlockInstance(func(s *sql.Selector) {
		step := sqlgraph.NewStep(
			sqlgraph.From(Table, FieldID),
			sqlgraph.To(FlowInstanceTable, FieldID),
			sqlgraph.Edge(sqlgraph.M2O, true, FlowInstanceTable, FlowInstanceColumn),
		)
		sqlgraph.HasNeighbors(s, step)
	})
}

// HasFlowInstanceWith applies the HasEdge predicate on the "flow_instance" edge with a given conditions (other predicates).
func HasFlowInstanceWith(preds ...predicate.FlowInstance) predicate.BlockInstance {
	return predicate.BlockInstance(func(s *sql.Selector) {
		step := sqlgraph.NewStep(
			sqlgraph.From(Table, FieldID),
			sqlgraph.To(FlowInstanceInverseTable, FieldID),
			sqlgraph.Edge(sqlgraph.M2O, true, FlowInstanceTable, FlowInstanceColumn),
		)
		sqlgraph.HasNeighborsWith(s, step, func(s *sql.Selector) {
			for _, p := range preds {
				p(s)
			}
		})
	})
}

// HasBlock applies the HasEdge predicate on the "block" edge.
func HasBlock() predicate.BlockInstance {
	return predicate.BlockInstance(func(s *sql.Selector) {
		step := sqlgraph.NewStep(
			sqlgraph.From(Table, FieldID),
			sqlgraph.To(BlockTable, FieldID),
			sqlgraph.Edge(sqlgraph.M2O, false, BlockTable, BlockColumn),
		)
		sqlgraph.HasNeighbors(s, step)
	})
}

// HasBlockWith applies the HasEdge predicate on the "block" edge with a given conditions (other predicates).
func HasBlockWith(preds ...predicate.Block) predicate.BlockInstance {
	return predicate.BlockInstance(func(s *sql.Selector) {
		step := sqlgraph.NewStep(
			sqlgraph.From(Table, FieldID),
			sqlgraph.To(BlockInverseTable, FieldID),
			sqlgraph.Edge(sqlgraph.M2O, false, BlockTable, BlockColumn),
		)
		sqlgraph.HasNeighborsWith(s, step, func(s *sql.Selector) {
			for _, p := range preds {
				p(s)
			}
		})
	})
}

// HasSubflowInstance applies the HasEdge predicate on the "subflow_instance" edge.
func HasSubflowInstance() predicate.BlockInstance {
	return predicate.BlockInstance(func(s *sql.Selector) {
		step := sqlgraph.NewStep(
			sqlgraph.From(Table, FieldID),
			sqlgraph.To(SubflowInstanceTable, FieldID),
			sqlgraph.Edge(sqlgraph.O2O, false, SubflowInstanceTable, SubflowInstanceColumn),
		)
		sqlgraph.HasNeighbors(s, step)
	})
}

// HasSubflowInstanceWith applies the HasEdge predicate on the "subflow_instance" edge with a given conditions (other predicates).
func HasSubflowInstanceWith(preds ...predicate.FlowInstance) predicate.BlockInstance {
	return predicate.BlockInstance(func(s *sql.Selector) {
		step := sqlgraph.NewStep(
			sqlgraph.From(Table, FieldID),
			sqlgraph.To(SubflowInstanceInverseTable, FieldID),
			sqlgraph.Edge(sqlgraph.O2O, false, SubflowInstanceTable, SubflowInstanceColumn),
		)
		sqlgraph.HasNeighborsWith(s, step, func(s *sql.Selector) {
			for _, p := range preds {
				p(s)
			}
		})
	})
}

// And groups list of predicates with the AND operator between them.
func And(predicates ...predicate.BlockInstance) predicate.BlockInstance {
	return predicate.BlockInstance(func(s *sql.Selector) {
		s1 := s.Clone().SetP(nil)
		for _, p := range predicates {
			p(s1)
		}
		s.Where(s1.P())
	})
}

// Or groups list of predicates with the OR operator between them.
func Or(predicates ...predicate.BlockInstance) predicate.BlockInstance {
	return predicate.BlockInstance(func(s *sql.Selector) {
		s1 := s.Clone().SetP(nil)
		for i, p := range predicates {
			if i > 0 {
				s1.Or()
			}
			p(s1)
		}
		s.Where(s1.P())
	})
}

// Not applies the not operator on the given predicate.
func Not(p predicate.BlockInstance) predicate.BlockInstance {
	return predicate.BlockInstance(func(s *sql.Selector) {
		p(s.Not())
	})
}