from sqlalchemy.orm import Session
from sqlalchemy.exc import IntegrityError

from app.database.models import Patient, User
from app.crud.doctors import Doctor

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
    