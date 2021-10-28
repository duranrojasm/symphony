#!/usr/bin/env python3
# @generated AUTOGENERATED file. Do not Change!

from dataclasses import dataclass, field as _field
from functools import partial
from ...config import custom_scalars, datetime
from numbers import Number
from typing import Any, AsyncGenerator, Dict, List, Generator, Optional

from dataclasses_json import DataClassJsonMixin, config

from gql_client.runtime.enum_utils import enum_field_metadata
from ..enum.image_entity import ImageEntity


@dataclass(frozen=True)
class AddImageInput(DataClassJsonMixin):
    entityType: ImageEntity = _field(metadata=enum_field_metadata(ImageEntity))
    entityId: str
    imgKey: str
    fileName: str
    fileSize: int
    modified: datetime = _field(metadata=config(encoder=custom_scalars["Time"].encoder, decoder=custom_scalars["Time"].decoder, mm_field=custom_scalars["Time"].mm_field))
    contentType: str
    category: Optional[str] = None
    annotation: Optional[str] = None