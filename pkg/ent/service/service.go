// Copyright (c) 2004-present Facebook All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

// Code generated by entc, DO NOT EDIT.

package service

import (
	"fmt"
	"io"
	"strconv"
	"time"

	"github.com/facebook/ent"
)

const (
	// Label holds the string label denoting the service type in the database.
	Label = "service"
	// FieldID holds the string denoting the id field in the database.
	FieldID = "id"
	// FieldCreateTime holds the string denoting the create_time field in the database.
	FieldCreateTime = "create_time"
	// FieldUpdateTime holds the string denoting the update_time field in the database.
	FieldUpdateTime = "update_time"
	// FieldName holds the string denoting the name field in the database.
	FieldName = "name"
	// FieldExternalID holds the string denoting the external_id field in the database.
	FieldExternalID = "external_id"
	// FieldStatus holds the string denoting the status field in the database.
	FieldStatus = "status"

	// EdgeType holds the string denoting the type edge name in mutations.
	EdgeType = "type"
	// EdgeDownstream holds the string denoting the downstream edge name in mutations.
	EdgeDownstream = "downstream"
	// EdgeUpstream holds the string denoting the upstream edge name in mutations.
	EdgeUpstream = "upstream"
	// EdgeProperties holds the string denoting the properties edge name in mutations.
	EdgeProperties = "properties"
	// EdgeLinks holds the string denoting the links edge name in mutations.
	EdgeLinks = "links"
	// EdgePorts holds the string denoting the ports edge name in mutations.
	EdgePorts = "ports"
	// EdgeCustomer holds the string denoting the customer edge name in mutations.
	EdgeCustomer = "customer"
	// EdgeEndpoints holds the string denoting the endpoints edge name in mutations.
	EdgeEndpoints = "endpoints"

	// Table holds the table name of the service in the database.
	Table = "services"
	// TypeTable is the table the holds the type relation/edge.
	TypeTable = "services"
	// TypeInverseTable is the table name for the ServiceType entity.
	// It exists in this package in order to avoid circular dependency with the "servicetype" package.
	TypeInverseTable = "service_types"
	// TypeColumn is the table column denoting the type relation/edge.
	TypeColumn = "service_type"
	// DownstreamTable is the table the holds the downstream relation/edge. The primary key declared below.
	DownstreamTable = "service_upstream"
	// UpstreamTable is the table the holds the upstream relation/edge. The primary key declared below.
	UpstreamTable = "service_upstream"
	// PropertiesTable is the table the holds the properties relation/edge.
	PropertiesTable = "properties"
	// PropertiesInverseTable is the table name for the Property entity.
	// It exists in this package in order to avoid circular dependency with the "property" package.
	PropertiesInverseTable = "properties"
	// PropertiesColumn is the table column denoting the properties relation/edge.
	PropertiesColumn = "service_properties"
	// LinksTable is the table the holds the links relation/edge. The primary key declared below.
	LinksTable = "service_links"
	// LinksInverseTable is the table name for the Link entity.
	// It exists in this package in order to avoid circular dependency with the "link" package.
	LinksInverseTable = "links"
	// PortsTable is the table the holds the ports relation/edge. The primary key declared below.
	PortsTable = "service_ports"
	// PortsInverseTable is the table name for the EquipmentPort entity.
	// It exists in this package in order to avoid circular dependency with the "equipmentport" package.
	PortsInverseTable = "equipment_ports"
	// CustomerTable is the table the holds the customer relation/edge. The primary key declared below.
	CustomerTable = "service_customer"
	// CustomerInverseTable is the table name for the Customer entity.
	// It exists in this package in order to avoid circular dependency with the "customer" package.
	CustomerInverseTable = "customers"
	// EndpointsTable is the table the holds the endpoints relation/edge.
	EndpointsTable = "service_endpoints"
	// EndpointsInverseTable is the table name for the ServiceEndpoint entity.
	// It exists in this package in order to avoid circular dependency with the "serviceendpoint" package.
	EndpointsInverseTable = "service_endpoints"
	// EndpointsColumn is the table column denoting the endpoints relation/edge.
	EndpointsColumn = "service_endpoints"
)

// Columns holds all SQL columns for service fields.
var Columns = []string{
	FieldID,
	FieldCreateTime,
	FieldUpdateTime,
	FieldName,
	FieldExternalID,
	FieldStatus,
}

// ForeignKeys holds the SQL foreign-keys that are owned by the Service type.
var ForeignKeys = []string{
	"service_type",
}

var (
	// DownstreamPrimaryKey and DownstreamColumn2 are the table columns denoting the
	// primary key for the downstream relation (M2M).
	DownstreamPrimaryKey = []string{"service_id", "downstream_id"}
	// UpstreamPrimaryKey and UpstreamColumn2 are the table columns denoting the
	// primary key for the upstream relation (M2M).
	UpstreamPrimaryKey = []string{"service_id", "downstream_id"}
	// LinksPrimaryKey and LinksColumn2 are the table columns denoting the
	// primary key for the links relation (M2M).
	LinksPrimaryKey = []string{"service_id", "link_id"}
	// PortsPrimaryKey and PortsColumn2 are the table columns denoting the
	// primary key for the ports relation (M2M).
	PortsPrimaryKey = []string{"service_id", "equipment_port_id"}
	// CustomerPrimaryKey and CustomerColumn2 are the table columns denoting the
	// primary key for the customer relation (M2M).
	CustomerPrimaryKey = []string{"service_id", "customer_id"}
)

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
	// NameValidator is a validator for the "name" field. It is called by the builders before save.
	NameValidator func(string) error
	// ExternalIDValidator is a validator for the "external_id" field. It is called by the builders before save.
	ExternalIDValidator func(string) error
)

// Status defines the type for the status enum field.
type Status string

// Status values.
const (
	StatusPending      Status = "PENDING"
	StatusInService    Status = "IN_SERVICE"
	StatusMaintenance  Status = "MAINTENANCE"
	StatusDisconnected Status = "DISCONNECTED"
)

func (s Status) String() string {
	return string(s)
}

// StatusValidator is a validator for the "status" field enum values. It is called by the builders before save.
func StatusValidator(s Status) error {
	switch s {
	case StatusPending, StatusInService, StatusMaintenance, StatusDisconnected:
		return nil
	default:
		return fmt.Errorf("service: invalid enum value for status field: %q", s)
	}
}

// MarshalGQL implements graphql.Marshaler interface.
func (s Status) MarshalGQL(w io.Writer) {
	io.WriteString(w, strconv.Quote(s.String()))
}

// UnmarshalGQL implements graphql.Unmarshaler interface.
func (s *Status) UnmarshalGQL(val interface{}) error {
	str, ok := val.(string)
	if !ok {
		return fmt.Errorf("enum %T must be a string", val)
	}
	*s = Status(str)
	if err := StatusValidator(*s); err != nil {
		return fmt.Errorf("%s is not a valid Status", str)
	}
	return nil
}