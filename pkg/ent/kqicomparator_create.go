// Copyright (c) 2004-present Facebook All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

// Code generated by entc, DO NOT EDIT.

package ent

import (
	"context"
	"errors"
	"fmt"
	"time"

	"github.com/facebook/ent/dialect/sql/sqlgraph"
	"github.com/facebook/ent/schema/field"
	"github.com/facebookincubator/symphony/pkg/ent/comparator"
	"github.com/facebookincubator/symphony/pkg/ent/kqicomparator"
	"github.com/facebookincubator/symphony/pkg/ent/kqitarget"
)

// KqiComparatorCreate is the builder for creating a KqiComparator entity.
type KqiComparatorCreate struct {
	config
	mutation *KqiComparatorMutation
	hooks    []Hook
}

// SetCreateTime sets the create_time field.
func (kcc *KqiComparatorCreate) SetCreateTime(t time.Time) *KqiComparatorCreate {
	kcc.mutation.SetCreateTime(t)
	return kcc
}

// SetNillableCreateTime sets the create_time field if the given value is not nil.
func (kcc *KqiComparatorCreate) SetNillableCreateTime(t *time.Time) *KqiComparatorCreate {
	if t != nil {
		kcc.SetCreateTime(*t)
	}
	return kcc
}

// SetUpdateTime sets the update_time field.
func (kcc *KqiComparatorCreate) SetUpdateTime(t time.Time) *KqiComparatorCreate {
	kcc.mutation.SetUpdateTime(t)
	return kcc
}

// SetNillableUpdateTime sets the update_time field if the given value is not nil.
func (kcc *KqiComparatorCreate) SetNillableUpdateTime(t *time.Time) *KqiComparatorCreate {
	if t != nil {
		kcc.SetUpdateTime(*t)
	}
	return kcc
}

// SetNumber sets the number field.
func (kcc *KqiComparatorCreate) SetNumber(f float64) *KqiComparatorCreate {
	kcc.mutation.SetNumber(f)
	return kcc
}

// SetComparatorType sets the comparatorType field.
func (kcc *KqiComparatorCreate) SetComparatorType(s string) *KqiComparatorCreate {
	kcc.mutation.SetComparatorType(s)
	return kcc
}

// SetComparatorkqitargetfkID sets the comparatorkqitargetfk edge to Comparator by id.
func (kcc *KqiComparatorCreate) SetComparatorkqitargetfkID(id int) *KqiComparatorCreate {
	kcc.mutation.SetComparatorkqitargetfkID(id)
	return kcc
}

// SetNillableComparatorkqitargetfkID sets the comparatorkqitargetfk edge to Comparator by id if the given value is not nil.
func (kcc *KqiComparatorCreate) SetNillableComparatorkqitargetfkID(id *int) *KqiComparatorCreate {
	if id != nil {
		kcc = kcc.SetComparatorkqitargetfkID(*id)
	}
	return kcc
}

// SetComparatorkqitargetfk sets the comparatorkqitargetfk edge to Comparator.
func (kcc *KqiComparatorCreate) SetComparatorkqitargetfk(c *Comparator) *KqiComparatorCreate {
	return kcc.SetComparatorkqitargetfkID(c.ID)
}

// SetKqitargetcomparatorfkID sets the kqitargetcomparatorfk edge to KqiTarget by id.
func (kcc *KqiComparatorCreate) SetKqitargetcomparatorfkID(id int) *KqiComparatorCreate {
	kcc.mutation.SetKqitargetcomparatorfkID(id)
	return kcc
}

// SetNillableKqitargetcomparatorfkID sets the kqitargetcomparatorfk edge to KqiTarget by id if the given value is not nil.
func (kcc *KqiComparatorCreate) SetNillableKqitargetcomparatorfkID(id *int) *KqiComparatorCreate {
	if id != nil {
		kcc = kcc.SetKqitargetcomparatorfkID(*id)
	}
	return kcc
}

// SetKqitargetcomparatorfk sets the kqitargetcomparatorfk edge to KqiTarget.
func (kcc *KqiComparatorCreate) SetKqitargetcomparatorfk(k *KqiTarget) *KqiComparatorCreate {
	return kcc.SetKqitargetcomparatorfkID(k.ID)
}

// Mutation returns the KqiComparatorMutation object of the builder.
func (kcc *KqiComparatorCreate) Mutation() *KqiComparatorMutation {
	return kcc.mutation
}

// Save creates the KqiComparator in the database.
func (kcc *KqiComparatorCreate) Save(ctx context.Context) (*KqiComparator, error) {
	var (
		err  error
		node *KqiComparator
	)
	kcc.defaults()
	if len(kcc.hooks) == 0 {
		if err = kcc.check(); err != nil {
			return nil, err
		}
		node, err = kcc.sqlSave(ctx)
	} else {
		var mut Mutator = MutateFunc(func(ctx context.Context, m Mutation) (Value, error) {
			mutation, ok := m.(*KqiComparatorMutation)
			if !ok {
				return nil, fmt.Errorf("unexpected mutation type %T", m)
			}
			if err = kcc.check(); err != nil {
				return nil, err
			}
			kcc.mutation = mutation
			node, err = kcc.sqlSave(ctx)
			mutation.done = true
			return node, err
		})
		for i := len(kcc.hooks) - 1; i >= 0; i-- {
			mut = kcc.hooks[i](mut)
		}
		if _, err := mut.Mutate(ctx, kcc.mutation); err != nil {
			return nil, err
		}
	}
	return node, err
}

// SaveX calls Save and panics if Save returns an error.
func (kcc *KqiComparatorCreate) SaveX(ctx context.Context) *KqiComparator {
	v, err := kcc.Save(ctx)
	if err != nil {
		panic(err)
	}
	return v
}

// defaults sets the default values of the builder before save.
func (kcc *KqiComparatorCreate) defaults() {
	if _, ok := kcc.mutation.CreateTime(); !ok {
		v := kqicomparator.DefaultCreateTime()
		kcc.mutation.SetCreateTime(v)
	}
	if _, ok := kcc.mutation.UpdateTime(); !ok {
		v := kqicomparator.DefaultUpdateTime()
		kcc.mutation.SetUpdateTime(v)
	}
}

// check runs all checks and user-defined validators on the builder.
func (kcc *KqiComparatorCreate) check() error {
	if _, ok := kcc.mutation.CreateTime(); !ok {
		return &ValidationError{Name: "create_time", err: errors.New("ent: missing required field \"create_time\"")}
	}
	if _, ok := kcc.mutation.UpdateTime(); !ok {
		return &ValidationError{Name: "update_time", err: errors.New("ent: missing required field \"update_time\"")}
	}
	if _, ok := kcc.mutation.Number(); !ok {
		return &ValidationError{Name: "number", err: errors.New("ent: missing required field \"number\"")}
	}
	if _, ok := kcc.mutation.ComparatorType(); !ok {
		return &ValidationError{Name: "comparatorType", err: errors.New("ent: missing required field \"comparatorType\"")}
	}
	if v, ok := kcc.mutation.ComparatorType(); ok {
		if err := kqicomparator.ComparatorTypeValidator(v); err != nil {
			return &ValidationError{Name: "comparatorType", err: fmt.Errorf("ent: validator failed for field \"comparatorType\": %w", err)}
		}
	}
	return nil
}

func (kcc *KqiComparatorCreate) sqlSave(ctx context.Context) (*KqiComparator, error) {
	_node, _spec := kcc.createSpec()
	if err := sqlgraph.CreateNode(ctx, kcc.driver, _spec); err != nil {
		if cerr, ok := isSQLConstraintError(err); ok {
			err = cerr
		}
		return nil, err
	}
	id := _spec.ID.Value.(int64)
	_node.ID = int(id)
	return _node, nil
}

func (kcc *KqiComparatorCreate) createSpec() (*KqiComparator, *sqlgraph.CreateSpec) {
	var (
		_node = &KqiComparator{config: kcc.config}
		_spec = &sqlgraph.CreateSpec{
			Table: kqicomparator.Table,
			ID: &sqlgraph.FieldSpec{
				Type:   field.TypeInt,
				Column: kqicomparator.FieldID,
			},
		}
	)
	if value, ok := kcc.mutation.CreateTime(); ok {
		_spec.Fields = append(_spec.Fields, &sqlgraph.FieldSpec{
			Type:   field.TypeTime,
			Value:  value,
			Column: kqicomparator.FieldCreateTime,
		})
		_node.CreateTime = value
	}
	if value, ok := kcc.mutation.UpdateTime(); ok {
		_spec.Fields = append(_spec.Fields, &sqlgraph.FieldSpec{
			Type:   field.TypeTime,
			Value:  value,
			Column: kqicomparator.FieldUpdateTime,
		})
		_node.UpdateTime = value
	}
	if value, ok := kcc.mutation.Number(); ok {
		_spec.Fields = append(_spec.Fields, &sqlgraph.FieldSpec{
			Type:   field.TypeFloat64,
			Value:  value,
			Column: kqicomparator.FieldNumber,
		})
		_node.Number = value
	}
	if value, ok := kcc.mutation.ComparatorType(); ok {
		_spec.Fields = append(_spec.Fields, &sqlgraph.FieldSpec{
			Type:   field.TypeString,
			Value:  value,
			Column: kqicomparator.FieldComparatorType,
		})
		_node.ComparatorType = value
	}
	if nodes := kcc.mutation.ComparatorkqitargetfkIDs(); len(nodes) > 0 {
		edge := &sqlgraph.EdgeSpec{
			Rel:     sqlgraph.M2O,
			Inverse: true,
			Table:   kqicomparator.ComparatorkqitargetfkTable,
			Columns: []string{kqicomparator.ComparatorkqitargetfkColumn},
			Bidi:    false,
			Target: &sqlgraph.EdgeTarget{
				IDSpec: &sqlgraph.FieldSpec{
					Type:   field.TypeInt,
					Column: comparator.FieldID,
				},
			},
		}
		for _, k := range nodes {
			edge.Target.Nodes = append(edge.Target.Nodes, k)
		}
		_spec.Edges = append(_spec.Edges, edge)
	}
	if nodes := kcc.mutation.KqitargetcomparatorfkIDs(); len(nodes) > 0 {
		edge := &sqlgraph.EdgeSpec{
			Rel:     sqlgraph.M2O,
			Inverse: true,
			Table:   kqicomparator.KqitargetcomparatorfkTable,
			Columns: []string{kqicomparator.KqitargetcomparatorfkColumn},
			Bidi:    false,
			Target: &sqlgraph.EdgeTarget{
				IDSpec: &sqlgraph.FieldSpec{
					Type:   field.TypeInt,
					Column: kqitarget.FieldID,
				},
			},
		}
		for _, k := range nodes {
			edge.Target.Nodes = append(edge.Target.Nodes, k)
		}
		_spec.Edges = append(_spec.Edges, edge)
	}
	return _node, _spec
}

// KqiComparatorCreateBulk is the builder for creating a bulk of KqiComparator entities.
type KqiComparatorCreateBulk struct {
	config
	builders []*KqiComparatorCreate
}

// Save creates the KqiComparator entities in the database.
func (kccb *KqiComparatorCreateBulk) Save(ctx context.Context) ([]*KqiComparator, error) {
	specs := make([]*sqlgraph.CreateSpec, len(kccb.builders))
	nodes := make([]*KqiComparator, len(kccb.builders))
	mutators := make([]Mutator, len(kccb.builders))
	for i := range kccb.builders {
		func(i int, root context.Context) {
			builder := kccb.builders[i]
			builder.defaults()
			var mut Mutator = MutateFunc(func(ctx context.Context, m Mutation) (Value, error) {
				mutation, ok := m.(*KqiComparatorMutation)
				if !ok {
					return nil, fmt.Errorf("unexpected mutation type %T", m)
				}
				if err := builder.check(); err != nil {
					return nil, err
				}
				builder.mutation = mutation
				nodes[i], specs[i] = builder.createSpec()
				var err error
				if i < len(mutators)-1 {
					_, err = mutators[i+1].Mutate(root, kccb.builders[i+1].mutation)
				} else {
					// Invoke the actual operation on the latest mutation in the chain.
					if err = sqlgraph.BatchCreate(ctx, kccb.driver, &sqlgraph.BatchCreateSpec{Nodes: specs}); err != nil {
						if cerr, ok := isSQLConstraintError(err); ok {
							err = cerr
						}
					}
				}
				mutation.done = true
				if err != nil {
					return nil, err
				}
				id := specs[i].ID.Value.(int64)
				nodes[i].ID = int(id)
				return nodes[i], nil
			})
			for i := len(builder.hooks) - 1; i >= 0; i-- {
				mut = builder.hooks[i](mut)
			}
			mutators[i] = mut
		}(i, ctx)
	}
	if len(mutators) > 0 {
		if _, err := mutators[0].Mutate(ctx, kccb.builders[0].mutation); err != nil {
			return nil, err
		}
	}
	return nodes, nil
}

// SaveX calls Save and panics if Save returns an error.
func (kccb *KqiComparatorCreateBulk) SaveX(ctx context.Context) []*KqiComparator {
	v, err := kccb.Save(ctx)
	if err != nil {
		panic(err)
	}
	return v
}