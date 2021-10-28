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
	"github.com/facebookincubator/symphony/pkg/ent/filecategorytype"
	"github.com/facebookincubator/symphony/pkg/ent/predicate"
)

// FileCategoryTypeDelete is the builder for deleting a FileCategoryType entity.
type FileCategoryTypeDelete struct {
	config
	hooks    []Hook
	mutation *FileCategoryTypeMutation
}

// Where adds a new predicate to the delete builder.
func (fctd *FileCategoryTypeDelete) Where(ps ...predicate.FileCategoryType) *FileCategoryTypeDelete {
	fctd.mutation.predicates = append(fctd.mutation.predicates, ps...)
	return fctd
}

// Exec executes the deletion query and returns how many vertices were deleted.
func (fctd *FileCategoryTypeDelete) Exec(ctx context.Context) (int, error) {
	var (
		err      error
		affected int
	)
	if len(fctd.hooks) == 0 {
		affected, err = fctd.sqlExec(ctx)
	} else {
		var mut Mutator = MutateFunc(func(ctx context.Context, m Mutation) (Value, error) {
			mutation, ok := m.(*FileCategoryTypeMutation)
			if !ok {
				return nil, fmt.Errorf("unexpected mutation type %T", m)
			}
			fctd.mutation = mutation
			affected, err = fctd.sqlExec(ctx)
			mutation.done = true
			return affected, err
		})
		for i := len(fctd.hooks) - 1; i >= 0; i-- {
			mut = fctd.hooks[i](mut)
		}
		if _, err := mut.Mutate(ctx, fctd.mutation); err != nil {
			return 0, err
		}
	}
	return affected, err
}

// ExecX is like Exec, but panics if an error occurs.
func (fctd *FileCategoryTypeDelete) ExecX(ctx context.Context) int {
	n, err := fctd.Exec(ctx)
	if err != nil {
		panic(err)
	}
	return n
}

func (fctd *FileCategoryTypeDelete) sqlExec(ctx context.Context) (int, error) {
	_spec := &sqlgraph.DeleteSpec{
		Node: &sqlgraph.NodeSpec{
			Table: filecategorytype.Table,
			ID: &sqlgraph.FieldSpec{
				Type:   field.TypeInt,
				Column: filecategorytype.FieldID,
			},
		},
	}
	if ps := fctd.mutation.predicates; len(ps) > 0 {
		_spec.Predicate = func(selector *sql.Selector) {
			for i := range ps {
				ps[i](selector)
			}
		}
	}
	return sqlgraph.DeleteNodes(ctx, fctd.driver, _spec)
}

// FileCategoryTypeDeleteOne is the builder for deleting a single FileCategoryType entity.
type FileCategoryTypeDeleteOne struct {
	fctd *FileCategoryTypeDelete
}

// Exec executes the deletion query.
func (fctdo *FileCategoryTypeDeleteOne) Exec(ctx context.Context) error {
	n, err := fctdo.fctd.Exec(ctx)
	switch {
	case err != nil:
		return err
	case n == 0:
		return &NotFoundError{filecategorytype.Label}
	default:
		return nil
	}
}

// ExecX is like Exec, but panics if an error occurs.
func (fctdo *FileCategoryTypeDeleteOne) ExecX(ctx context.Context) {
	fctdo.fctd.ExecX(ctx)
}