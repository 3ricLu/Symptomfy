from pydantic import BaseModel, EmailStr, constr
from typing import Optional
from datetime import datetime

class PatientProfileSchema(BaseModel):
    sex: Optional[str]
    address: Optional[str]
    age: Optional[int]

class DoctorProfileSchema(BaseModel):
    doctor_id: int
    specialty: str
    is_approved: bool

class ProfileSchema(BaseModel):
    id: int
    email: str
    first_name: Optional[str]
    middle_name: Optional[str]
    last_name: Optional[str]
    global_role: Optional[str]
    created_at: datetime
    updated_at: datetime

    patient_profile: Optional[PatientProfileSchema]
    doctor_profile: Optional[DoctorProfileSchema]



class ProfileUpdateSchema(BaseModel):
    # Only updatable fields
    first_name: Optional[str]
    middle_name: Optional[str]
    last_name: Optional[str]
    sex: Optional[str]
    address: Optional[str]
    age: Optional[int]


class EmailUpdateSchema(BaseModel):
    new_email: EmailStr


class PasswordUpdateSchema(BaseModel):
    current_password: constr(min_length=8)
    new_password: constr(min_length=8)
