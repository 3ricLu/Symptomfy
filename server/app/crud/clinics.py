from sqlalchemy.orm import Session
from sqlalchemy.exc import IntegrityError

from app.database.models import ClinicMembership
from app.database.models import Clinic

class ClinicCrud():
    def __init__(self, db: Session):
        self.db = db
    
    def get_clinic(self, **kwargs):
        return self.db.query(Clinic).filter_by(**kwargs).first()
    
    def get_pending_clinics(self):
        return self.db.query(Clinic).filter(Clinic.is_approved == False).all()
    
    def create(self, **kwargs):
        
        db_clinic = Clinic(is_approved=False, **kwargs)

        try:
            self.db.add(db_clinic)
            self.db.commit()
            self.db.refresh(db_clinic)
        except IntegrityError as e:
            self.db.rollback()
            raise Exception(e.orig)

        return db_clinic
    
    #TODO: Add some kind of authentication for clinic as administrator.
    def update(self, clinic_id: int, **kwargs):
        clinic = self.get_clinic(id=clinic_id)
        
        if not clinic:
            raise Exception(f"Clinic with id {clinic_id} does not exist.")

        # update the fields
        for key, value in kwargs.items():
            setattr(clinic, key, value)
        
        try:
            self.db.commit()
            self.db.refresh(clinic)
        except IntegrityError as e:
            self.db.rollback()
            raise Exception(e.orig)

        return clinic
    
    def add_user_to_clinic(self, *, clinic_id, user_id, role):
        db_clinic_member = ClinicMembership(clinic_id=clinic_id, user_id=user_id, role=role)
        
        try:
            self.db.add(db_clinic_member)
            self.db.commit()
            self.db.refresh(db_clinic_member)
        except IntegrityError as e:
            self.db.rollback()
            raise Exception(e.orig)

        return db_clinic_member
    