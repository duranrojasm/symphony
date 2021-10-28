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
	"github.com/facebookincubator/symphony/pkg/ent/equipmentport"
	"github.com/facebookincubator/symphony/pkg/ent/equipmentportdefinition"
	"github.com/facebookincubator/symphony/pkg/ent/equipmentporttype"
	"github.com/facebookincubator/symphony/pkg/ent/equipmenttype"
)

// EquipmentPortDefinitionCreate is the builder for creating a EquipmentPortDefinition entity.
type EquipmentPortDefinitionCreate struct {
	config
	mutation *EquipmentPortDefinitionMutation
	hooks    []Hook
}

// SetCreateTime sets the create_time field.
func (epdc *EquipmentPortDefinitionCreate) SetCreateTime(t time.Time) *EquipmentPortDefinitionCreate {
	epdc.mutation.SetCreateTime(t)
	return epdc
}

// SetNillableCreateTime sets the create_time field if the given value is not nil.
func (epdc *EquipmentPortDefinitionCreate) SetNillableCreateTime(t *time.Time) *EquipmentPortDefinitionCreate {
	if t != nil {
		epdc.SetCreateTime(*t)
	}
	return epdc
}

// SetUpdateTime sets the update_time field.
func (epdc *EquipmentPortDefinitionCreate) SetUpdateTime(t time.Time) *EquipmentPortDefinitionCreate {
	epdc.mutation.SetUpdateTime(t)
	return epdc
}

// SetNillableUpdateTime sets the update_time field if the given value is not nil.
func (epdc *EquipmentPortDefinitionCreate) SetNillableUpdateTime(t *time.Time) *EquipmentPortDefinitionCreate {
	if t != nil {
		epdc.SetUpdateTime(*t)
	}
	return epdc
}

// SetName sets the name field.
func (epdc *EquipmentPortDefinitionCreate) SetName(s string) *EquipmentPortDefinitionCreate {
	epdc.mutation.SetName(s)
	return epdc
}

// SetIndex sets the index field.
func (epdc *EquipmentPortDefinitionCreate) SetIndex(i int) *EquipmentPortDefinitionCreate {
	epdc.mutation.SetIndex(i)
	return epdc
}

// SetNillableIndex sets the index field if the given value is not nil.
func (epdc *EquipmentPortDefinitionCreate) SetNillableIndex(i *int) *EquipmentPortDefinitionCreate {
	if i != nil {
		epdc.SetIndex(*i)
	}
	return epdc
}

// SetBandwidth sets the bandwidth field.
func (epdc *EquipmentPortDefinitionCreate) SetBandwidth(s string) *EquipmentPortDefinitionCreate {
	epdc.mutation.SetBandwidth(s)
	return epdc
}

// SetNillableBandwidth sets the bandwidth field if the given value is not nil.
func (epdc *EquipmentPortDefinitionCreate) SetNillableBandwidth(s *string) *EquipmentPortDefinitionCreate {
	if s != nil {
		epdc.SetBandwidth(*s)
	}
	return epdc
}

// SetVisibilityLabel sets the visibility_label field.
func (epdc *EquipmentPortDefinitionCreate) SetVisibilityLabel(s string) *EquipmentPortDefinitionCreate {
	epdc.mutation.SetVisibilityLabel(s)
	return epdc
}

// SetNillableVisibilityLabel sets the visibility_label field if the given value is not nil.
func (epdc *EquipmentPortDefinitionCreate) SetNillableVisibilityLabel(s *string) *EquipmentPortDefinitionCreate {
	if s != nil {
		epdc.SetVisibilityLabel(*s)
	}
	return epdc
}

// SetEquipmentPortTypeID sets the equipment_port_type edge to EquipmentPortType by id.
func (epdc *EquipmentPortDefinitionCreate) SetEquipmentPortTypeID(id int) *EquipmentPortDefinitionCreate {
	epdc.mutation.SetEquipmentPortTypeID(id)
	return epdc
}

// SetNillableEquipmentPortTypeID sets the equipment_port_type edge to EquipmentPortType by id if the given value is not nil.
func (epdc *EquipmentPortDefinitionCreate) SetNillableEquipmentPortTypeID(id *int) *EquipmentPortDefinitionCreate {
	if id != nil {
		epdc = epdc.SetEquipmentPortTypeID(*id)
	}
	return epdc
}

// SetEquipmentPortType sets the equipment_port_type edge to EquipmentPortType.
func (epdc *EquipmentPortDefinitionCreate) SetEquipmentPortType(e *EquipmentPortType) *EquipmentPortDefinitionCreate {
	return epdc.SetEquipmentPortTypeID(e.ID)
}

// AddPortIDs adds the ports edge to EquipmentPort by ids.
func (epdc *EquipmentPortDefinitionCreate) AddPortIDs(ids ...int) *EquipmentPortDefinitionCreate {
	epdc.mutation.AddPortIDs(ids...)
	return epdc
}

// AddPorts adds the ports edges to EquipmentPort.
func (epdc *EquipmentPortDefinitionCreate) AddPorts(e ...*EquipmentPort) *EquipmentPortDefinitionCreate {
	ids := make([]int, len(e))
	for i := range e {
		ids[i] = e[i].ID
	}
	return epdc.AddPortIDs(ids...)
}

// SetEquipmentTypeID sets the equipment_type edge to EquipmentType by id.
func (epdc *EquipmentPortDefinitionCreate) SetEquipmentTypeID(id int) *EquipmentPortDefinitionCreate {
	epdc.mutation.SetEquipmentTypeID(id)
	return epdc
}

// SetNillableEquipmentTypeID sets the equipment_type edge to EquipmentType by id if the given value is not nil.
func (epdc *EquipmentPortDefinitionCreate) SetNillableEquipmentTypeID(id *int) *EquipmentPortDefinitionCreate {
	if id != nil {
		epdc = epdc.SetEquipmentTypeID(*id)
	}
	return epdc
}

// SetEquipmentType sets the equipment_type edge to EquipmentType.
func (epdc *EquipmentPortDefinitionCreate) SetEquipmentType(e *EquipmentType) *EquipmentPortDefinitionCreate {
	return epdc.SetEquipmentTypeID(e.ID)
}

// AddConnectedPortIDs adds the connected_ports edge to EquipmentPortDefinition by ids.
func (epdc *EquipmentPortDefinitionCreate) AddConnectedPortIDs(ids ...int) *EquipmentPortDefinitionCreate {
	epdc.mutation.AddConnectedPortIDs(ids...)
	return epdc
}

// AddConnectedPorts adds the connected_ports edges to EquipmentPortDefinition.
func (epdc *EquipmentPortDefinitionCreate) AddConnectedPorts(e ...*EquipmentPortDefinition) *EquipmentPortDefinitionCreate {
	ids := make([]int, len(e))
	for i := range e {
		ids[i] = e[i].ID
	}
	return epdc.AddConnectedPortIDs(ids...)
}

// Mutation returns the EquipmentPortDefinitionMutation object of the builder.
func (epdc *EquipmentPortDefinitionCreate) Mutation() *EquipmentPortDefinitionMutation {
	return epdc.mutation
}

// Save creates the EquipmentPortDefinition in the database.
func (epdc *EquipmentPortDefinitionCreate) Save(ctx context.Context) (*EquipmentPortDefinition, error) {
	var (
		err  error
		node *EquipmentPortDefinition
	)
	epdc.defaults()
	if len(epdc.hooks) == 0 {
		if err = epdc.check(); err != nil {
			return nil, err
		}
		node, err = epdc.sqlSave(ctx)
	} else {
		var mut Mutator = MutateFunc(func(ctx context.Context, m Mutation) (Value, error) {
			mutation, ok := m.(*EquipmentPortDefinitionMutation)
			if !ok {
				return nil, fmt.Errorf("unexpected mutation type %T", m)
			}
			if err = epdc.check(); err != nil {
				return nil, err
			}
			epdc.mutation = mutation
			node, err = epdc.sqlSave(ctx)
			mutation.done = true
			return node, err
		})
		for i := len(epdc.hooks) - 1; i >= 0; i-- {
			mut = epdc.hooks[i](mut)
		}
		if _, err := mut.Mutate(ctx, epdc.mutation); err != nil {
			return nil, err
		}
	}
	return node, err
}

// SaveX calls Save and panics if Save returns an error.
func (epdc *EquipmentPortDefinitionCreate) SaveX(ctx context.Context) *EquipmentPortDefinition {
	v, err := epdc.Save(ctx)
	if err != nil {
		panic(err)
	}
	return v
}

// defaults sets the default values of the builder before save.
func (epdc *EquipmentPortDefinitionCreate) defaults() {
	if _, ok := epdc.mutation.CreateTime(); !ok {
		v := equipmentportdefinition.DefaultCreateTime()
		epdc.mutation.SetCreateTime(v)
	}
	if _, ok := epdc.mutation.UpdateTime(); !ok {
		v := equipmentportdefinition.DefaultUpdateTime()
		epdc.mutation.SetUpdateTime(v)
	}
}

// check runs all checks and user-defined validators on the builder.
func (epdc *EquipmentPortDefinitionCreate) check() error {
	if _, ok := epdc.mutation.CreateTime(); !ok {
		return &ValidationError{Name: "create_time", err: errors.New("ent: missing required field \"create_time\"")}
	}
	if _, ok := epdc.mutation.UpdateTime(); !ok {
		return &ValidationError{Name: "update_time", err: errors.New("ent: missing required field \"update_time\"")}
	}
	if _, ok := epdc.mutation.Name(); !ok {
		return &ValidationError{Name: "name", err: errors.New("ent: missing required field \"name\"")}
	}
	return nil
}

func (epdc *EquipmentPortDefinitionCreate) sqlSave(ctx context.Context) (*EquipmentPortDefinition, error) {
	_node, _spec := epdc.createSpec()
	if err := sqlgraph.CreateNode(ctx, epdc.driver, _spec); err != nil {
		if cerr, ok := isSQLConstraintError(err); ok {
			err = cerr
		}
		return nil, err
	}
	id := _spec.ID.Value.(int64)
	_node.ID = int(id)
	return _node, nil
}

func (epdc *EquipmentPortDefinitionCreate) createSpec() (*EquipmentPortDefinition, *sqlgraph.CreateSpec) {
	var (
		_node = &EquipmentPortDefinition{config: epdc.config}
		_spec = &sqlgraph.CreateSpec{
			Table: equipmentportdefinition.Table,
			ID: &sqlgraph.FieldSpec{
				Type:   field.TypeInt,
				Column: equipmentportdefinition.FieldID,
			},
		}
	)
	if value, ok := epdc.mutation.CreateTime(); ok {
		_spec.Fields = append(_spec.Fields, &sqlgraph.FieldSpec{
			Type:   field.TypeTime,
			Value:  value,
			Column: equipmentportdefinition.FieldCreateTime,
		})
		_node.CreateTime = value
	}
	if value, ok := epdc.mutation.UpdateTime(); ok {
		_spec.Fields = append(_spec.Fields, &sqlgraph.FieldSpec{
			Type:   field.TypeTime,
			Value:  value,
			Column: equipmentportdefinition.FieldUpdateTime,
		})
		_node.UpdateTime = value
	}
	if value, ok := epdc.mutation.Name(); ok {
		_spec.Fields = append(_spec.Fields, &sqlgraph.FieldSpec{
			Type:   field.TypeString,
			Value:  value,
			Column: equipmentportdefinition.FieldName,
		})
		_node.Name = value
	}
	if value, ok := epdc.mutation.Index(); ok {
		_spec.Fields = append(_spec.Fields, &sqlgraph.FieldSpec{
			Type:   field.TypeInt,
			Value:  value,
			Column: equipmentportdefinition.FieldIndex,
		})
		_node.Index = value
	}
	if value, ok := epdc.mutation.Bandwidth(); ok {
		_spec.Fields = append(_spec.Fields, &sqlgraph.FieldSpec{
			Type:   field.TypeString,
			Value:  value,
			Column: equipmentportdefinition.FieldBandwidth,
		})
		_node.Bandwidth = value
	}
	if value, ok := epdc.mutation.VisibilityLabel(); ok {
		_spec.Fields = append(_spec.Fields, &sqlgraph.FieldSpec{
			Type:   field.TypeString,
			Value:  value,
			Column: equipmentportdefinition.FieldVisibilityLabel,
		})
		_node.VisibilityLabel = value
	}
	if nodes := epdc.mutation.EquipmentPortTypeIDs(); len(nodes) > 0 {
		edge := &sqlgraph.EdgeSpec{
			Rel:     sqlgraph.M2O,
			Inverse: false,
			Table:   equipmentportdefinition.EquipmentPortTypeTable,
			Columns: []string{equipmentportdefinition.EquipmentPortTypeColumn},
			Bidi:    false,
			Target: &sqlgraph.EdgeTarget{
				IDSpec: &sqlgraph.FieldSpec{
					Type:   field.TypeInt,
					Column: equipmentporttype.FieldID,
				},
			},
		}
		for _, k := range nodes {
			edge.Target.Nodes = append(edge.Target.Nodes, k)
		}
		_spec.Edges = append(_spec.Edges, edge)
	}
	if nodes := epdc.mutation.PortsIDs(); len(nodes) > 0 {
		edge := &sqlgraph.EdgeSpec{
			Rel:     sqlgraph.O2M,
			Inverse: true,
			Table:   equipmentportdefinition.PortsTable,
			Columns: []string{equipmentportdefinition.PortsColumn},
			Bidi:    false,
			Target: &sqlgraph.EdgeTarget{
				IDSpec: &sqlgraph.FieldSpec{
					Type:   field.TypeInt,
					Column: equipmentport.FieldID,
				},
			},
		}
		for _, k := range nodes {
			edge.Target.Nodes = append(edge.Target.Nodes, k)
		}
		_spec.Edges = append(_spec.Edges, edge)
	}
	if nodes := epdc.mutation.EquipmentTypeIDs(); len(nodes) > 0 {
		edge := &sqlgraph.EdgeSpec{
			Rel:     sqlgraph.M2O,
			Inverse: true,
			Table:   equipmentportdefinition.EquipmentTypeTable,
			Columns: []string{equipmentportdefinition.EquipmentTypeColumn},
			Bidi:    false,
			Target: &sqlgraph.EdgeTarget{
				IDSpec: &sqlgraph.FieldSpec{
					Type:   field.TypeInt,
					Column: equipmenttype.FieldID,
				},
			},
		}
		for _, k := range nodes {
			edge.Target.Nodes = append(edge.Target.Nodes, k)
		}
		_spec.Edges = append(_spec.Edges, edge)
	}
	if nodes := epdc.mutation.ConnectedPortsIDs(); len(nodes) > 0 {
		edge := &sqlgraph.EdgeSpec{
			Rel:     sqlgraph.M2M,
			Inverse: false,
			Table:   equipmentportdefinition.ConnectedPortsTable,
			Columns: equipmentportdefinition.ConnectedPortsPrimaryKey,
			Bidi:    true,
			Target: &sqlgraph.EdgeTarget{
				IDSpec: &sqlgraph.FieldSpec{
					Type:   field.TypeInt,
					Column: equipmentportdefinition.FieldID,
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

// EquipmentPortDefinitionCreateBulk is the builder for creating a bulk of EquipmentPortDefinition entities.
type EquipmentPortDefinitionCreateBulk struct {
	config
	builders []*EquipmentPortDefinitionCreate
}

// Save creates the EquipmentPortDefinition entities in the database.
func (epdcb *EquipmentPortDefinitionCreateBulk) Save(ctx context.Context) ([]*EquipmentPortDefinition, error) {
	specs := make([]*sqlgraph.CreateSpec, len(epdcb.builders))
	nodes := make([]*EquipmentPortDefinition, len(epdcb.builders))
	mutators := make([]Mutator, len(epdcb.builders))
	for i := range epdcb.builders {
		func(i int, root context.Context) {
			builder := epdcb.builders[i]
			builder.defaults()
			var mut Mutator = MutateFunc(func(ctx context.Context, m Mutation) (Value, error) {
				mutation, ok := m.(*EquipmentPortDefinitionMutation)
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
					_, err = mutators[i+1].Mutate(root, epdcb.builders[i+1].mutation)
				} else {
					// Invoke the actual operation on the latest mutation in the chain.
					if err = sqlgraph.BatchCreate(ctx, epdcb.driver, &sqlgraph.BatchCreateSpec{Nodes: specs}); err != nil {
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
		if _, err := mutators[0].Mutate(ctx, epdcb.builders[0].mutation); err != nil {
			return nil, err
		}
	}
	return nodes, nil
}

// SaveX calls Save and panics if Save returns an error.
func (epdcb *EquipmentPortDefinitionCreateBulk) SaveX(ctx context.Context) []*EquipmentPortDefinition {
	v, err := epdcb.Save(ctx)
	if err != nil {
		panic(err)
	}
	return v
}