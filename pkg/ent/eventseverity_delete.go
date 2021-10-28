// Copyright (c) 2004-present Facebook All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

// Code generated by entc, DO NOT EDIT.

package ent

import (
	"context"
	"fmt"

	"github.com/facebook/ent/dialect/sql"
	"github.com/facebook/ent/dialect/sql/sqlgraph"
	"github.com/facebook/ent/schema/field"
	"github.com/facebookincubator/symphony/pkg/ent/eventseverity"
	"github.com/facebookincubator/symphony/pkg/ent/predicate"
)

// EventSeverityDelete is the builder for deleting a EventSeverity entity.
type EventSeverityDelete struct {
	config
	hooks    []Hook
	mutation *EventSeverityMutation
}

// Where adds a new predicate to the delete builder.
func (esd *EventSeverityDelete) Where(ps ...predicate.EventSeverity) *EventSeverityDelete {
	esd.mutation.predicates = append(esd.mutation.predicates, ps...)
	return esd
}

// Exec executes the deletion query and returns how many vertices were deleted.
func (esd *EventSeverityDelete) Exec(ctx context.Context) (int, error) {
	var (
		err      error
		affected int
	)
	if len(esd.hooks) == 0 {
		affected, err = esd.sqlExec(ctx)
	} else {
		var mut Mutator = MutateFunc(func(ctx context.Context, m Mutation) (Value, error) {
			mutation, ok := m.(*EventSeverityMutation)
			if !ok {
				return nil, fmt.Errorf("unexpected mutation type %T", m)
			}
			esd.mutation = mutation
			affected, err = esd.sqlExec(ctx)
			mutation.done = true
			return affected, err
		})
		for i := len(esd.hooks) - 1; i >= 0; i-- {
			mut = esd.hooks[i](mut)
		}
		if _, err := mut.Mutate(ctx, esd.mutation); err != nil {
			return 0, err
		}
	}
	return affected, err
}

// ExecX is like Exec, but panics if an error occurs.
func (esd *EventSeverityDelete) ExecX(ctx context.Context) int {
	n, err := esd.Exec(ctx)
	if err != nil {
		panic(err)
	}
	return n
}

func (esd *EventSeverityDelete) sqlExec(ctx context.Context) (int, error) {
	_spec := &sqlgraph.DeleteSpec{
		Node: &sqlgraph.NodeSpec{
			Table: eventseverity.Table,
			ID: &sqlgraph.FieldSpec{
				Type:   field.TypeInt,
				Column: eventseverity.FieldID,
			},
		},
	}
	if ps := esd.mutation.predicates; len(ps) > 0 {
		_spec.Predicate = func(selector *sql.Selector) {
			for i := range ps {
				ps[i](selector)
			}
		}
	}
	return sqlgraph.DeleteNodes(ctx, esd.driver, _spec)
}

// EventSeverityDeleteOne is the builder for deleting a single EventSeverity entity.
type EventSeverityDeleteOne struct {
	esd *EventSeverityDelete
}

// Exec executes the deletion query.
func (esdo *EventSeverityDeleteOne) Exec(ctx context.Context) error {
	n, err := esdo.esd.Exec(ctx)
	switch {
	case err != nil:
		return err
	case n == 0:
		return &NotFoundError{eventseverity.Label}
	default:
		return nil
	}
}

// ExecX is like Exec, but panics if an error occurs.
func (esdo *EventSeverityDeleteOne) ExecX(ctx context.Context) {
	esdo.esd.ExecX(ctx)
}