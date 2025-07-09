from sqlalchemy.orm import Session
from sqlalchemy.exc import IntegrityError

from app.database.models import Patient

class PatientCrud():
    def __init__(self, db: Session):
        self.db = db
    
    def get_patient(self, **kwargs):
        return self.db.query(Patient).filter_by(**kwargs).first()
    
    def isPatient(self, *, user_id):
        return self.db.query(Patient).filter(Patient.user_id == user_id).first()
    
    def create(self, *, user_id, address=None, sex=None, age=None):
        db_patient = Patient(user_id=user_id, address=address, sex=sex, age=age)

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
        patient = self.get_patient(user_id=user_id)
        
        if not patient:
            raise Exception("Patient not found")

        updated = False
        for key, value in kwargs.items():
            if hasattr(patient, key):
                setattr(patient, key, value)
                updated = True
            else:
                print(f"Patient has no attribute '{key}'")

        if not updated:
            print("No valid fields to update.")
            return patient

        try:
            self.db.commit()
            self.db.refresh(patient)
        except IntegrityError as e:
            self.db.rollback()
            raise Exception(e.orig)
        return patient