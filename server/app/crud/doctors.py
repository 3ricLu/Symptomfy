from sqlalchemy.orm import Session
from sqlalchemy.exc import IntegrityError

from app.database.models import Doctor

class DoctorCrud():
    def __init__(self, db: Session):
        self.db = db
    
    def get_Doctor(self, **kwargs):
        return self.db.query(Doctor).filter_by(**kwargs).first()
    
    def create(self, *, user_id, clinic_id=None, specialty=None):
        db_patient = Doctor(user_id=user_id, clinic_id=clinic_id, specialty=specialty)

        try:
            self.db.add(db_patient)
            self.db.commit()
            self.db.refresh(db_patient)
        except IntegrityError as e:
            self.db.rollback()
            raise Exception(e.orig)

        return db_patient
    
    def update(self, user_id, **kwargs):
        kwargs.pop('id', None)
        kwargs.pop('user_id', None)

        print("Update kwargs:", kwargs)
        doctor = self.get_Doctor(user_id=user_id)
        
        if not doctor:
            raise Exception("Doctor not found")

        updated = False
        for key, value in kwargs.items():
            if hasattr(doctor, key):
                setattr(doctor, key, value)
                updated = True
            else:
                print(f"Patient has no attribute '{key}'")

        if not updated:
            print("No valid fields to update.")
            return doctor

        try:
            self.db.commit()
            self.db.refresh(doctor)
        except IntegrityError as e:
            self.db.rollback()
            raise Exception(e.orig)
        return doctor