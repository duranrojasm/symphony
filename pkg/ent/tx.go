// Copyright (c) 2004-present Facebook All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

// Code generated by entc, DO NOT EDIT.

package ent

import (
	"context"
	"sync"

	"github.com/facebook/ent/dialect"
)

// Tx is a transactional client that is created by calling Client.Tx().
type Tx struct {
	config
	// Activity is the client for interacting with the Activity builders.
	Activity *ActivityClient
	// AlarmFilter is the client for interacting with the AlarmFilter builders.
	AlarmFilter *AlarmFilterClient
	// AlarmStatus is the client for interacting with the AlarmStatus builders.
	AlarmStatus *AlarmStatusClient
	// Block is the client for interacting with the Block builders.
	Block *BlockClient
	// BlockInstance is the client for interacting with the BlockInstance builders.
	BlockInstance *BlockInstanceClient
	// CheckListCategory is the client for interacting with the CheckListCategory builders.
	CheckListCategory *CheckListCategoryClient
	// CheckListCategoryDefinition is the client for interacting with the CheckListCategoryDefinition builders.
	CheckListCategoryDefinition *CheckListCategoryDefinitionClient
	// CheckListItem is the client for interacting with the CheckListItem builders.
	CheckListItem *CheckListItemClient
	// CheckListItemDefinition is the client for interacting with the CheckListItemDefinition builders.
	CheckListItemDefinition *CheckListItemDefinitionClient
	// Comment is the client for interacting with the Comment builders.
	Comment *CommentClient
	// Comparator is the client for interacting with the Comparator builders.
	Comparator *ComparatorClient
	// Counter is the client for interacting with the Counter builders.
	Counter *CounterClient
	// CounterFamily is the client for interacting with the CounterFamily builders.
	CounterFamily *CounterFamilyClient
	// CounterFormula is the client for interacting with the CounterFormula builders.
	CounterFormula *CounterFormulaClient
	// Customer is the client for interacting with the Customer builders.
	Customer *CustomerClient
	// Domain is the client for interacting with the Domain builders.
	Domain *DomainClient
	// EntryPoint is the client for interacting with the EntryPoint builders.
	EntryPoint *EntryPointClient
	// Equipment is the client for interacting with the Equipment builders.
	Equipment *EquipmentClient
	// EquipmentCategory is the client for interacting with the EquipmentCategory builders.
	EquipmentCategory *EquipmentCategoryClient
	// EquipmentPort is the client for interacting with the EquipmentPort builders.
	EquipmentPort *EquipmentPortClient
	// EquipmentPortDefinition is the client for interacting with the EquipmentPortDefinition builders.
	EquipmentPortDefinition *EquipmentPortDefinitionClient
	// EquipmentPortType is the client for interacting with the EquipmentPortType builders.
	EquipmentPortType *EquipmentPortTypeClient
	// EquipmentPosition is the client for interacting with the EquipmentPosition builders.
	EquipmentPosition *EquipmentPositionClient
	// EquipmentPositionDefinition is the client for interacting with the EquipmentPositionDefinition builders.
	EquipmentPositionDefinition *EquipmentPositionDefinitionClient
	// EquipmentType is the client for interacting with the EquipmentType builders.
	EquipmentType *EquipmentTypeClient
	// EventSeverity is the client for interacting with the EventSeverity builders.
	EventSeverity *EventSeverityClient
	// ExitPoint is the client for interacting with the ExitPoint builders.
	ExitPoint *ExitPointClient
	// ExportTask is the client for interacting with the ExportTask builders.
	ExportTask *ExportTaskClient
	// Feature is the client for interacting with the Feature builders.
	Feature *FeatureClient
	// File is the client for interacting with the File builders.
	File *FileClient
	// FileCategoryType is the client for interacting with the FileCategoryType builders.
	FileCategoryType *FileCategoryTypeClient
	// FloorPlan is the client for interacting with the FloorPlan builders.
	FloorPlan *FloorPlanClient
	// FloorPlanReferencePoint is the client for interacting with the FloorPlanReferencePoint builders.
	FloorPlanReferencePoint *FloorPlanReferencePointClient
	// FloorPlanScale is the client for interacting with the FloorPlanScale builders.
	FloorPlanScale *FloorPlanScaleClient
	// Flow is the client for interacting with the Flow builders.
	Flow *FlowClient
	// FlowDraft is the client for interacting with the FlowDraft builders.
	FlowDraft *FlowDraftClient
	// FlowExecutionTemplate is the client for interacting with the FlowExecutionTemplate builders.
	FlowExecutionTemplate *FlowExecutionTemplateClient
	// FlowInstance is the client for interacting with the FlowInstance builders.
	FlowInstance *FlowInstanceClient
	// Formula is the client for interacting with the Formula builders.
	Formula *FormulaClient
	// Hyperlink is the client for interacting with the Hyperlink builders.
	Hyperlink *HyperlinkClient
	// Kpi is the client for interacting with the Kpi builders.
	Kpi *KpiClient
	// Kqi is the client for interacting with the Kqi builders.
	Kqi *KqiClient
	// KqiCategory is the client for interacting with the KqiCategory builders.
	KqiCategory *KqiCategoryClient
	// KqiComparator is the client for interacting with the KqiComparator builders.
	KqiComparator *KqiComparatorClient
	// KqiPerspective is the client for interacting with the KqiPerspective builders.
	KqiPerspective *KqiPerspectiveClient
	// KqiSource is the client for interacting with the KqiSource builders.
	KqiSource *KqiSourceClient
	// KqiTarget is the client for interacting with the KqiTarget builders.
	KqiTarget *KqiTargetClient
	// KqiTemporalFrequency is the client for interacting with the KqiTemporalFrequency builders.
	KqiTemporalFrequency *KqiTemporalFrequencyClient
	// Link is the client for interacting with the Link builders.
	Link *LinkClient
	// Location is the client for interacting with the Location builders.
	Location *LocationClient
	// LocationType is the client for interacting with the LocationType builders.
	LocationType *LocationTypeClient
	// Organization is the client for interacting with the Organization builders.
	Organization *OrganizationClient
	// PermissionsPolicy is the client for interacting with the PermissionsPolicy builders.
	PermissionsPolicy *PermissionsPolicyClient
	// Project is the client for interacting with the Project builders.
	Project *ProjectClient
	// ProjectTemplate is the client for interacting with the ProjectTemplate builders.
	ProjectTemplate *ProjectTemplateClient
	// ProjectType is the client for interacting with the ProjectType builders.
	ProjectType *ProjectTypeClient
	// Property is the client for interacting with the Property builders.
	Property *PropertyClient
	// PropertyType is the client for interacting with the PropertyType builders.
	PropertyType *PropertyTypeClient
	// Recommendations is the client for interacting with the Recommendations builders.
	Recommendations *RecommendationsClient
	// RecommendationsCategory is the client for interacting with the RecommendationsCategory builders.
	RecommendationsCategory *RecommendationsCategoryClient
	// RecommendationsSources is the client for interacting with the RecommendationsSources builders.
	RecommendationsSources *RecommendationsSourcesClient
	// ReportFilter is the client for interacting with the ReportFilter builders.
	ReportFilter *ReportFilterClient
	// Rule is the client for interacting with the Rule builders.
	Rule *RuleClient
	// RuleLimit is the client for interacting with the RuleLimit builders.
	RuleLimit *RuleLimitClient
	// RuleType is the client for interacting with the RuleType builders.
	RuleType *RuleTypeClient
	// Service is the client for interacting with the Service builders.
	Service *ServiceClient
	// ServiceEndpoint is the client for interacting with the ServiceEndpoint builders.
	ServiceEndpoint *ServiceEndpointClient
	// ServiceEndpointDefinition is the client for interacting with the ServiceEndpointDefinition builders.
	ServiceEndpointDefinition *ServiceEndpointDefinitionClient
	// ServiceType is the client for interacting with the ServiceType builders.
	ServiceType *ServiceTypeClient
	// Survey is the client for interacting with the Survey builders.
	Survey *SurveyClient
	// SurveyCellScan is the client for interacting with the SurveyCellScan builders.
	SurveyCellScan *SurveyCellScanClient
	// SurveyQuestion is the client for interacting with the SurveyQuestion builders.
	SurveyQuestion *SurveyQuestionClient
	// SurveyTemplateCategory is the client for interacting with the SurveyTemplateCategory builders.
	SurveyTemplateCategory *SurveyTemplateCategoryClient
	// SurveyTemplateQuestion is the client for interacting with the SurveyTemplateQuestion builders.
	SurveyTemplateQuestion *SurveyTemplateQuestionClient
	// SurveyWiFiScan is the client for interacting with the SurveyWiFiScan builders.
	SurveyWiFiScan *SurveyWiFiScanClient
	// Tech is the client for interacting with the Tech builders.
	Tech *TechClient
	// Threshold is the client for interacting with the Threshold builders.
	Threshold *ThresholdClient
	// User is the client for interacting with the User builders.
	User *UserClient
	// UsersGroup is the client for interacting with the UsersGroup builders.
	UsersGroup *UsersGroupClient
	// Vendor is the client for interacting with the Vendor builders.
	Vendor *VendorClient
	// WorkOrder is the client for interacting with the WorkOrder builders.
	WorkOrder *WorkOrderClient
	// WorkOrderDefinition is the client for interacting with the WorkOrderDefinition builders.
	WorkOrderDefinition *WorkOrderDefinitionClient
	// WorkOrderTemplate is the client for interacting with the WorkOrderTemplate builders.
	WorkOrderTemplate *WorkOrderTemplateClient
	// WorkOrderType is the client for interacting with the WorkOrderType builders.
	WorkOrderType *WorkOrderTypeClient
	// WorkerType is the client for interacting with the WorkerType builders.
	WorkerType *WorkerTypeClient

	// lazily loaded.
	client     *Client
	clientOnce sync.Once

	// completion callbacks.
	mu         sync.Mutex
	onCommit   []CommitHook
	onRollback []RollbackHook

	// ctx lives for the life of the transaction. It is
	// the same context used by the underlying connection.
	ctx context.Context
}

type (
	// Committer is the interface that wraps the Committer method.
	Committer interface {
		Commit(context.Context, *Tx) error
	}

	// The CommitFunc type is an adapter to allow the use of ordinary
	// function as a Committer. If f is a function with the appropriate
	// signature, CommitFunc(f) is a Committer that calls f.
	CommitFunc func(context.Context, *Tx) error

	// CommitHook defines the "commit middleware". A function that gets a Committer
	// and returns a Committer. For example:
	//
	//	hook := func(next ent.Committer) ent.Committer {
	//		return ent.CommitFunc(func(context.Context, tx *ent.Tx) error {
	//			// Do some stuff before.
	//			if err := next.Commit(ctx, tx); err != nil {
	//				return err
	//			}
	//			// Do some stuff after.
	//			return nil
	//		})
	//	}
	//
	CommitHook func(Committer) Committer
)

// Commit calls f(ctx, m).
func (f CommitFunc) Commit(ctx context.Context, tx *Tx) error {
	return f(ctx, tx)
}

// Commit commits the transaction.
func (tx *Tx) Commit() error {
	txDriver := tx.config.driver.(*txDriver)
	var fn Committer = CommitFunc(func(context.Context, *Tx) error {
		return txDriver.tx.Commit()
	})
	tx.mu.Lock()
	hooks := append([]CommitHook(nil), tx.onCommit...)
	tx.mu.Unlock()
	for i := len(hooks) - 1; i >= 0; i-- {
		fn = hooks[i](fn)
	}
	return fn.Commit(tx.ctx, tx)
}

// OnCommit adds a hook to call on commit.
func (tx *Tx) OnCommit(f CommitHook) {
	tx.mu.Lock()
	defer tx.mu.Unlock()
	tx.onCommit = append(tx.onCommit, f)
}

type (
	// Rollbacker is the interface that wraps the Rollbacker method.
	Rollbacker interface {
		Rollback(context.Context, *Tx) error
	}

	// The RollbackFunc type is an adapter to allow the use of ordinary
	// function as a Rollbacker. If f is a function with the appropriate
	// signature, RollbackFunc(f) is a Rollbacker that calls f.
	RollbackFunc func(context.Context, *Tx) error

	// RollbackHook defines the "rollback middleware". A function that gets a Rollbacker
	// and returns a Rollbacker. For example:
	//
	//	hook := func(next ent.Rollbacker) ent.Rollbacker {
	//		return ent.RollbackFunc(func(context.Context, tx *ent.Tx) error {
	//			// Do some stuff before.
	//			if err := next.Rollback(ctx, tx); err != nil {
	//				return err
	//			}
	//			// Do some stuff after.
	//			return nil
	//		})
	//	}
	//
	RollbackHook func(Rollbacker) Rollbacker
)

// Rollback calls f(ctx, m).
func (f RollbackFunc) Rollback(ctx context.Context, tx *Tx) error {
	return f(ctx, tx)
}

// Rollback rollbacks the transaction.
func (tx *Tx) Rollback() error {
	txDriver := tx.config.driver.(*txDriver)
	var fn Rollbacker = RollbackFunc(func(context.Context, *Tx) error {
		return txDriver.tx.Rollback()
	})
	tx.mu.Lock()
	hooks := append([]RollbackHook(nil), tx.onRollback...)
	tx.mu.Unlock()
	for i := len(hooks) - 1; i >= 0; i-- {
		fn = hooks[i](fn)
	}
	return fn.Rollback(tx.ctx, tx)
}

// OnRollback adds a hook to call on rollback.
func (tx *Tx) OnRollback(f RollbackHook) {
	tx.mu.Lock()
	defer tx.mu.Unlock()
	tx.onRollback = append(tx.onRollback, f)
}

// Client returns a Client that binds to current transaction.
func (tx *Tx) Client() *Client {
	tx.clientOnce.Do(func() {
		tx.client = &Client{config: tx.config}
		tx.client.init()
	})
	return tx.client
}

func (tx *Tx) init() {
	tx.Activity = NewActivityClient(tx.config)
	tx.AlarmFilter = NewAlarmFilterClient(tx.config)
	tx.AlarmStatus = NewAlarmStatusClient(tx.config)
	tx.Block = NewBlockClient(tx.config)
	tx.BlockInstance = NewBlockInstanceClient(tx.config)
	tx.CheckListCategory = NewCheckListCategoryClient(tx.config)
	tx.CheckListCategoryDefinition = NewCheckListCategoryDefinitionClient(tx.config)
	tx.CheckListItem = NewCheckListItemClient(tx.config)
	tx.CheckListItemDefinition = NewCheckListItemDefinitionClient(tx.config)
	tx.Comment = NewCommentClient(tx.config)
	tx.Comparator = NewComparatorClient(tx.config)
	tx.Counter = NewCounterClient(tx.config)
	tx.CounterFamily = NewCounterFamilyClient(tx.config)
	tx.CounterFormula = NewCounterFormulaClient(tx.config)
	tx.Customer = NewCustomerClient(tx.config)
	tx.Domain = NewDomainClient(tx.config)
	tx.EntryPoint = NewEntryPointClient(tx.config)
	tx.Equipment = NewEquipmentClient(tx.config)
	tx.EquipmentCategory = NewEquipmentCategoryClient(tx.config)
	tx.EquipmentPort = NewEquipmentPortClient(tx.config)
	tx.EquipmentPortDefinition = NewEquipmentPortDefinitionClient(tx.config)
	tx.EquipmentPortType = NewEquipmentPortTypeClient(tx.config)
	tx.EquipmentPosition = NewEquipmentPositionClient(tx.config)
	tx.EquipmentPositionDefinition = NewEquipmentPositionDefinitionClient(tx.config)
	tx.EquipmentType = NewEquipmentTypeClient(tx.config)
	tx.EventSeverity = NewEventSeverityClient(tx.config)
	tx.ExitPoint = NewExitPointClient(tx.config)
	tx.ExportTask = NewExportTaskClient(tx.config)
	tx.Feature = NewFeatureClient(tx.config)
	tx.File = NewFileClient(tx.config)
	tx.FileCategoryType = NewFileCategoryTypeClient(tx.config)
	tx.FloorPlan = NewFloorPlanClient(tx.config)
	tx.FloorPlanReferencePoint = NewFloorPlanReferencePointClient(tx.config)
	tx.FloorPlanScale = NewFloorPlanScaleClient(tx.config)
	tx.Flow = NewFlowClient(tx.config)
	tx.FlowDraft = NewFlowDraftClient(tx.config)
	tx.FlowExecutionTemplate = NewFlowExecutionTemplateClient(tx.config)
	tx.FlowInstance = NewFlowInstanceClient(tx.config)
	tx.Formula = NewFormulaClient(tx.config)
	tx.Hyperlink = NewHyperlinkClient(tx.config)
	tx.Kpi = NewKpiClient(tx.config)
	tx.Kqi = NewKqiClient(tx.config)
	tx.KqiCategory = NewKqiCategoryClient(tx.config)
	tx.KqiComparator = NewKqiComparatorClient(tx.config)
	tx.KqiPerspective = NewKqiPerspectiveClient(tx.config)
	tx.KqiSource = NewKqiSourceClient(tx.config)
	tx.KqiTarget = NewKqiTargetClient(tx.config)
	tx.KqiTemporalFrequency = NewKqiTemporalFrequencyClient(tx.config)
	tx.Link = NewLinkClient(tx.config)
	tx.Location = NewLocationClient(tx.config)
	tx.LocationType = NewLocationTypeClient(tx.config)
	tx.Organization = NewOrganizationClient(tx.config)
	tx.PermissionsPolicy = NewPermissionsPolicyClient(tx.config)
	tx.Project = NewProjectClient(tx.config)
	tx.ProjectTemplate = NewProjectTemplateClient(tx.config)
	tx.ProjectType = NewProjectTypeClient(tx.config)
	tx.Property = NewPropertyClient(tx.config)
	tx.PropertyType = NewPropertyTypeClient(tx.config)
	tx.Recommendations = NewRecommendationsClient(tx.config)
	tx.RecommendationsCategory = NewRecommendationsCategoryClient(tx.config)
	tx.RecommendationsSources = NewRecommendationsSourcesClient(tx.config)
	tx.ReportFilter = NewReportFilterClient(tx.config)
	tx.Rule = NewRuleClient(tx.config)
	tx.RuleLimit = NewRuleLimitClient(tx.config)
	tx.RuleType = NewRuleTypeClient(tx.config)
	tx.Service = NewServiceClient(tx.config)
	tx.ServiceEndpoint = NewServiceEndpointClient(tx.config)
	tx.ServiceEndpointDefinition = NewServiceEndpointDefinitionClient(tx.config)
	tx.ServiceType = NewServiceTypeClient(tx.config)
	tx.Survey = NewSurveyClient(tx.config)
	tx.SurveyCellScan = NewSurveyCellScanClient(tx.config)
	tx.SurveyQuestion = NewSurveyQuestionClient(tx.config)
	tx.SurveyTemplateCategory = NewSurveyTemplateCategoryClient(tx.config)
	tx.SurveyTemplateQuestion = NewSurveyTemplateQuestionClient(tx.config)
	tx.SurveyWiFiScan = NewSurveyWiFiScanClient(tx.config)
	tx.Tech = NewTechClient(tx.config)
	tx.Threshold = NewThresholdClient(tx.config)
	tx.User = NewUserClient(tx.config)
	tx.UsersGroup = NewUsersGroupClient(tx.config)
	tx.Vendor = NewVendorClient(tx.config)
	tx.WorkOrder = NewWorkOrderClient(tx.config)
	tx.WorkOrderDefinition = NewWorkOrderDefinitionClient(tx.config)
	tx.WorkOrderTemplate = NewWorkOrderTemplateClient(tx.config)
	tx.WorkOrderType = NewWorkOrderTypeClient(tx.config)
	tx.WorkerType = NewWorkerTypeClient(tx.config)
}

// txDriver wraps the given dialect.Tx with a nop dialect.Driver implementation.
// The idea is to support transactions without adding any extra code to the builders.
// When a builder calls to driver.Tx(), it gets the same dialect.Tx instance.
// Commit and Rollback are nop for the internal builders and the user must call one
// of them in order to commit or rollback the transaction.
//
// If a closed transaction is embedded in one of the generated entities, and the entity
// applies a query, for example: Activity.QueryXXX(), the query will be executed
// through the driver which created this transaction.
//
// Note that txDriver is not goroutine safe.
type txDriver struct {
	// the driver we started the transaction from.
	drv dialect.Driver
	// tx is the underlying transaction.
	tx dialect.Tx
}

// newTx creates a new transactional driver.
func newTx(ctx context.Context, drv dialect.Driver) (*txDriver, error) {
	tx, err := drv.Tx(ctx)
	if err != nil {
		return nil, err
	}
	return &txDriver{tx: tx, drv: drv}, nil
}

// Tx returns the transaction wrapper (txDriver) to avoid Commit or Rollback calls
// from the internal builders. Should be called only by the internal builders.
func (tx *txDriver) Tx(context.Context) (dialect.Tx, error) { return tx, nil }

// Dialect returns the dialect of the driver we started the transaction from.
func (tx *txDriver) Dialect() string { return tx.drv.Dialect() }

// Close is a nop close.
func (*txDriver) Close() error { return nil }

// Commit is a nop commit for the internal builders.
// User must call `Tx.Commit` in order to commit the transaction.
func (*txDriver) Commit() error { return nil }

// Rollback is a nop rollback for the internal builders.
// User must call `Tx.Rollback` in order to rollback the transaction.
func (*txDriver) Rollback() error { return nil }

// Exec calls tx.Exec.
func (tx *txDriver) Exec(ctx context.Context, query string, args, v interface{}) error {
	return tx.tx.Exec(ctx, query, args, v)
}

// Query calls tx.Query.
func (tx *txDriver) Query(ctx context.Context, query string, args, v interface{}) error {
	return tx.tx.Query(ctx, query, args, v)
}

var _ dialect.Driver = (*txDriver)(nil)
