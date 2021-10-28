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

from ..fragment.equipment_type import EquipmentTypeFragment, QUERY as EquipmentTypeFragmentQuery

from ..input.add_equipment_type_input import AddEquipmentTypeInput


# fmt: off
QUERY: List[str] = EquipmentTypeFragmentQuery + ["""
mutation AddEquipmentTypeMutation($input: AddEquipmentTypeInput!) {
  addEquipmentType(input: $input) {
    ...EquipmentTypeFragment
  }
}

"""
]


class AddEquipmentTypeMutation:
    @dataclass(frozen=True)
    class AddEquipmentTypeMutationData(DataClassJsonMixin):
        @dataclass(frozen=True)
        class EquipmentType(EquipmentTypeFragment):
            pass

        addEquipmentType: EquipmentType

    # fmt: off
    @classmethod
    def execute(cls, client: Client, input: AddEquipmentTypeInput) -> AddEquipmentTypeMutationData.EquipmentType:
        variables: Dict[str, Any] = {"input": input}
        new_variables = encode_variables(variables, custom_scalars)
        response_text = client.execute(
            gql("".join(set(QUERY))), variable_values=new_variables
        )
        res = cls.AddEquipmentTypeMutationData.from_dict(response_text)
        return res.addEquipmentType

    # fmt: off
    @classmethod
    async def execute_async(cls, client: Client, input: AddEquipmentTypeInput) -> AddEquipmentTypeMutationData.EquipmentType:
        variables: Dict[str, Any] = {"input": input}
        new_variables = encode_variables(variables, custom_scalars)
        response_text = await client.execute_async(
            gql("".join(set(QUERY))), variable_values=new_variables
        )
        res = cls.AddEquipmentTypeMutationData.from_dict(response_text)
        return res.addEquipmentType