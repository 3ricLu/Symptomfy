from sqlalchemy.orm import Session
from sqlalchemy.exc import IntegrityError
from app.database.models import Doctor


class DoctorCrud:
    def __init__(self, db: Session):
        self.db = db

    def get_doctor(self, **kwargs):
        return self.db.query(Doctor).filter_by(**kwargs).first()

    def get_pending_doctors(self):
        return self.db.query(Doctor).filter(Doctor.is_approved == False).all()

    def isDoctor(self, *, user_id):
        return self.db.query(Doctor).filter(Doctor.user_id == user_id).first()

    def create(self, *, user_id, clinic_id=None, specialty=None):
        db_doctor = Doctor(user_id=user_id, clinic_id=clinic_id, specialty=specialty)
        try:
            self.db.add(db_doctor)
            self.db.commit()
            self.db.refresh(db_doctor)
        except IntegrityError as e:
            self.db.rollback()
            raise Exception(e.orig)
        return db_doctor

    def update(self, user_id, **kwargs):
        kwargs.pop("id", None)
        kwargs.pop("user_id", None)

        doctor = self.get_doctor(user_id=user_id)
        if not doctor:
            raise Exception(f"Doctor with user_id {user_id} does not exist.")

        for key, value in kwargs.items():
            setattr(doctor, key, value)

        try:
            self.db.commit()
            self.db.refresh(doctor)
        except IntegrityError as e:
            self.db.rollback()
            raise Exception(e.orig)
        return doctor
