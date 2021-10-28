#!/usr/bin/env python3
# @generated AUTOGENERATED file. Do not Change!

from dataclasses import dataclass, field as _field
from ...config import custom_scalars, datetime
from gql_client.runtime.variables import encode_variables
from gql import gql, Client
from gql.transport.exceptions import TransportQueryError
from functools import partial
from numbers import Number
from typing import Any, AsyncGenerator, Dict, List, Generator, Optional
from time import perf_counter
from dataclasses_json import DataClassJsonMixin, config

from ..fragment.work_order_type import WorkOrderTypeFragment, QUERY as WorkOrderTypeFragmentQuery

from ..input.add_work_order_type_input import AddWorkOrderTypeInput


# fmt: off
QUERY: List[str] = WorkOrderTypeFragmentQuery + ["""
mutation AddWorkOrderTypeMutation($input: AddWorkOrderTypeInput!) {
  addWorkOrderType(input: $input) {
    ...WorkOrderTypeFragment
  }
}

"""
]


class AddWorkOrderTypeMutation:
    @dataclass(frozen=True)
    class AddWorkOrderTypeMutationData(DataClassJsonMixin):
        @dataclass(frozen=True)
        class WorkOrderType(WorkOrderTypeFragment):
            pass

        addWorkOrderType: WorkOrderType

    # fmt: off
    @classmethod
    def execute(cls, client: Client, input: AddWorkOrderTypeInput) -> AddWorkOrderTypeMutationData.WorkOrderType:
        variables: Dict[str, Any] = {"input": input}
        new_variables = encode_variables(variables, custom_scalars)
        response_text = client.execute(
            gql("".join(set(QUERY))), variable_values=new_variables
        )
        res = cls.AddWorkOrderTypeMutationData.from_dict(response_text)
        return res.addWorkOrderType

    # fmt: off
    @classmethod
    async def execute_async(cls, client: Client, input: AddWorkOrderTypeInput) -> AddWorkOrderTypeMutationData.WorkOrderType:
        variables: Dict[str, Any] = {"input": input}
        new_variables = encode_variables(variables, custom_scalars)
        response_text = await client.execute_async(
            gql("".join(set(QUERY))), variable_values=new_variables
        )
        res = cls.AddWorkOrderTypeMutationData.from_dict(response_text)
        return res.addWorkOrderType