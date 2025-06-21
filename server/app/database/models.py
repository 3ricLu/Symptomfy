import sqlalchemy as sa
from datetime import datetime
from sqlalchemy.inspection import inspect

from app.database.database import Base

class BaseModel:
    def to_dict(self):
            return {c.key: getattr(self, c.key) for c in inspect(self).mapper.column_attrs}

class User(Base, BaseModel):
    __tablename__ = "users"
    
    id: int = sa.Column(sa.Integer(), primary_key=True, index=True)
    email: str = sa.Column(sa.String(), unique=True, index=True, nullable=False)
    name: str = sa.Column(sa.String(), index=True)
    hashedPassword: str = sa.Column(sa.String(), nullable=False)
    created_at: datetime = sa.Column(sa.DateTime(), nullable=False, server_default=sa.func.now())
    updated_at: datetime = sa.Column(sa.DateTime(), nullable=False, server_default=sa.func.now(), onupdate=sa.func.now())
    
    def to_private_dicts(self):
        return {
            "id": self.id,
            "email": self.email,
            "name": self.name
        }

class Patient(Base, BaseModel):
    __tablename__ = "patients"

    id: int = sa.Column(sa.Integer, primary_key=True)
    user_id: int = sa.Column(sa.Integer, sa.ForeignKey('users.id'), nullable=False)
    address: str = sa.Column(sa.String, nullable=True)
    sex: str = sa.Column(sa.Enum("male", "female", "other", name="sex_enum"), nullable=True)
    age: int = sa.Column(sa.Integer, nullable=True)
    __table_args__ = (
        sa.CheckConstraint('age >= 0 AND age <= 140', name='age_between_0_and_140'),
    )

class Clinic(Base, BaseModel):
    __tablename__ = "clinics"

    id: int = sa.Column(sa.Integer, primary_key=True)
    user_id: int = sa.Column(sa.Integer, sa.ForeignKey('users.id'), nullable=False)
    name: str = sa.Column(sa.String(255), nullable=False)
    address: str = sa.Column(sa.String(255), nullable=True)
    phone: str = sa.Column(sa.String(50), nullable=True)
    email: str = sa.Column(sa.String(255), nullable=True)
    website: str = sa.Column(sa.String(255), nullable=True)
    created_at: datetime = sa.Column(sa.DateTime, server_default=sa.func.now(), nullable=False)
    updated_at: datetime = sa.Column(sa.DateTime, server_default=sa.func.now(), onupdate=sa.func.now(), nullable=False)

class Doctor(Base, BaseModel):
    __tablename__ = "doctors"

    id: int = sa.Column(sa.Integer, primary_key=True)
    user_id: int = sa.Column(sa.Integer, sa.ForeignKey('users.id'), nullable=False)
    clinic_id: int = sa.Column(sa.Integer, sa.ForeignKey('clinics.id'), nullable=True)
    specialty: str = sa.Column(sa.String(255), nullable=True)

class Diagnosis(Base, BaseModel):
    __tablename__ = "diagnosis"

    id: int = sa.Column(sa.Integer, primary_key=True)
    patient_id: int = sa.Column(sa.Integer, sa.ForeignKey('patients.id'), nullable=False)
    symptoms = sa.Column(sa.ARRAY(sa.String), nullable=False)
    predicted_diagnosis: str = sa.Column(sa.String(255), nullable=False)
    created_at: datetime = sa.Column(sa.DateTime, server_default=sa.func.now(), nullable=False)

class Booking(Base, BaseModel):
    __tablename__ = "booking"

    id: int = sa.Column(sa.Integer, primary_key=True)
    patient_id: int = sa.Column(sa.Integer, sa.ForeignKey('patients.id'), nullable=False)
    doctor_id: int = sa.Column(sa.Integer, sa.ForeignKey('doctors.id'), nullable=False)
    diagnosis_id: int = sa.Column(sa.Integer, sa.ForeignKey('diagnosis.id'), nullable=True)
    status: str = sa.Column(sa.Enum('cancelled', 'confirmed', 'tentative', name='booking_status_enum'), nullable=False, server_default='tentative')
    time_start: datetime = sa.Column(sa.DateTime, nullable=False)
    time_end: datetime = sa.Column(sa.DateTime, nullable=False)
    created_at: datetime = sa.Column(sa.DateTime, server_default=sa.func.now(), nullable=False)
    updated_at: datetime = sa.Column(sa.DateTime, server_default=sa.func.now(), onupdate=sa.func.now(), nullable=False)