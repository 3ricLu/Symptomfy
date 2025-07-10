import sqlalchemy as sa
from datetime import datetime
from typing import Optional
from sqlalchemy.orm import Mapped, mapped_column
from sqlalchemy.inspection import inspect

from app.database.database import Base


class BaseModel:
    def to_dict(self):
        return {c.key: getattr(self, c.key) for c in inspect(self).mapper.column_attrs}


class User(Base, BaseModel):
    __tablename__ = "users"

    id: Mapped[int] = mapped_column(primary_key=True, index=True)
    email: Mapped[str] = mapped_column(
        sa.String, unique=True, index=True, nullable=False
    )
    name: Mapped[Optional[str]] = mapped_column(sa.String, nullable=True)
    hashedPassword: Mapped[str] = mapped_column(sa.String, nullable=False)
    global_role: Mapped[Optional[str]] = mapped_column(
        sa.Enum("admin", "support", "auditor", name="global_role_enum"), nullable=True
    )
    created_at: Mapped[datetime] = mapped_column(
        sa.DateTime, nullable=False, server_default=sa.func.now()
    )
    updated_at: Mapped[datetime] = mapped_column(
        sa.DateTime,
        nullable=False,
        server_default=sa.func.now(),
        onupdate=sa.func.now(),
    )

    def to_private_dicts(self):
        return {"id": self.id, "email": self.email, "name": self.name}

    def doctor_to_patient_dict(self):
        return {"id": self.id, "name": self.name}


class Patient(Base, BaseModel):
    __tablename__ = "patients"

    id: Mapped[int] = mapped_column(primary_key=True)
    user_id: Mapped[int] = mapped_column(sa.ForeignKey("users.id"), nullable=False)
    address: Mapped[Optional[str]] = mapped_column(sa.String, nullable=True)
    sex: Mapped[Optional[str]] = mapped_column(
        sa.Enum("male", "female", "other", name="sex_enum"), nullable=True
    )
    age: Mapped[Optional[int]] = mapped_column(sa.Integer, nullable=True)
    familyDoctor: Mapped[Optional[int]] = mapped_column(sa.Integer, nullable=True)

    __table_args__ = (
        sa.CheckConstraint("age >= 0 AND age <= 140", name="age_between_0_and_140"),
    )


class Clinic(Base, BaseModel):
    __tablename__ = "clinics"

    id: Mapped[int] = mapped_column(primary_key=True)
    name: Mapped[str] = mapped_column(sa.String(255), nullable=False)
    address: Mapped[Optional[str]] = mapped_column(sa.String(255), nullable=True)
    phone: Mapped[Optional[str]] = mapped_column(sa.String(50), nullable=True)
    email: Mapped[Optional[str]] = mapped_column(sa.String(255), nullable=True)
    website: Mapped[Optional[str]] = mapped_column(sa.String(255), nullable=True)
    is_approved: Mapped[bool] = mapped_column(
        sa.Boolean, nullable=False, server_default=sa.false()
    )
    created_at: Mapped[datetime] = mapped_column(
        sa.DateTime, server_default=sa.func.now(), nullable=False
    )
    updated_at: Mapped[datetime] = mapped_column(
        sa.DateTime,
        server_default=sa.func.now(),
        onupdate=sa.func.now(),
        nullable=False,
    )

    def baseInformation(self):
        return {
            "id": self.id,
            "name": self.name,
            "address": self.address,
            "phone": self.phone,
            "email": self.email,
            "website": self.website,
            "created_at": self.created_at,
        }


class Doctor(Base, BaseModel):
    __tablename__ = "doctors"

    id: Mapped[int] = mapped_column(primary_key=True)
    user_id: Mapped[int] = mapped_column(sa.ForeignKey("users.id"), nullable=False)
    clinic_id: Mapped[Optional[int]] = mapped_column(
        sa.ForeignKey("clinics.id"), nullable=True
    )
    specialty: Mapped[Optional[str]] = mapped_column(sa.String(255), nullable=True)
    is_approved: Mapped[bool] = mapped_column(
        sa.Boolean, nullable=False, server_default=sa.false()
    )

    def to_patient_dict(self):
        return {"doctorId": self.id, "doctorSpecialty": self.specialty}


class ClinicMembership(Base, BaseModel):
    __tablename__ = "clinic_memberships"

    id: Mapped[int] = mapped_column(primary_key=True)
    clinic_id: Mapped[int] = mapped_column(
        sa.ForeignKey("clinics.id", ondelete="CASCADE"), nullable=False
    )
    user_id: Mapped[int] = mapped_column(
        sa.ForeignKey("users.id", ondelete="CASCADE"), nullable=False
    )
    role: Mapped[str] = mapped_column(
        sa.Enum("doctor", "patient", "admin", "facilitator", name="role_enum"),
        nullable=False,
    )
    created_at: Mapped[datetime] = mapped_column(
        sa.DateTime(timezone=True), server_default=sa.func.now(), nullable=False
    )
    updated_at: Mapped[datetime] = mapped_column(
        sa.DateTime(timezone=True),
        server_default=sa.func.now(),
        onupdate=sa.func.now(),
        nullable=False,
    )


class Diagnosis(Base, BaseModel):
    __tablename__ = "diagnosis"

    id: Mapped[int] = mapped_column(primary_key=True)
    patient_id: Mapped[int] = mapped_column(
        sa.ForeignKey("patients.id"), nullable=False
    )
    symptoms: Mapped[list[str]] = mapped_column(sa.ARRAY(sa.String), nullable=False)
    predicted_diagnosis: Mapped[str] = mapped_column(sa.String(255), nullable=False)
    created_at: Mapped[datetime] = mapped_column(
        sa.DateTime, server_default=sa.func.now(), nullable=False
    )


class Booking(Base, BaseModel):
    __tablename__ = "booking"

    id: Mapped[int] = mapped_column(primary_key=True)
    patient_id: Mapped[int] = mapped_column(
        sa.ForeignKey("patients.id"), nullable=False
    )
    doctor_id: Mapped[int] = mapped_column(sa.ForeignKey("doctors.id"), nullable=False)
    diagnosis_id: Mapped[Optional[int]] = mapped_column(
        sa.ForeignKey("diagnosis.id"), nullable=True
    )
    status: Mapped[str] = mapped_column(
        sa.Enum("cancelled", "confirmed", "tentative", name="booking_status_enum"),
        nullable=False,
        server_default="tentative",
    )
    time_start: Mapped[datetime] = mapped_column(sa.DateTime, nullable=False)
    time_end: Mapped[datetime] = mapped_column(sa.DateTime, nullable=False)
    created_at: Mapped[datetime] = mapped_column(
        sa.DateTime, server_default=sa.func.now(), nullable=False
    )
    updated_at: Mapped[datetime] = mapped_column(
        sa.DateTime,
        server_default=sa.func.now(),
        onupdate=sa.func.now(),
        nullable=False,
    )
