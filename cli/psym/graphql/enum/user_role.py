#!/usr/bin/env python3
# @generated AUTOGENERATED file. Do not Change!

from enum import Enum


class UserRole(Enum):
    USER = "USER"
    ADMIN = "ADMIN"
    OWNER = "OWNER"
    MISSING_ENUM = ""

    @classmethod
    def _missing_(cls, value: object) -> "UserRole":
        return cls.MISSING_ENUM
