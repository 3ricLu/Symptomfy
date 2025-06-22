from sqlalchemy.orm import Session
from sqlalchemy.exc import IntegrityError

from app.database.models import Booking

class BookingCrud():
    def __init__(self, db: Session):
        self.db = db
    
    def get_booking(self, **kwargs):
        return self.db.query(Booking).filter_by(**kwargs).first()
    
    def get_booking_all(self, **kwargs):
        return self.db.query(Booking).filter_by(**kwargs).all()
    
    def create(self, *, patient_id, doctor_id, diagnonsis_id, status="tentative", time_start, time_end):
        db_booking = Booking(
            patient_id=patient_id, 
            doctor_id=doctor_id, 
            status=status, 
            time_start=time_start, 
            time_end=time_end)

        try:
            self.db.add(db_booking)
            self.db.commit()
            self.db.refresh(db_booking)
        except IntegrityError as e:
            self.db.rollback()
            raise Exception(e.orig)

        return db_booking
    
    def update(self, booking_id, **kwargs):
        kwargs.pop('id', None)

        booking = self.get_Booking(booking_id=booking_id)
        
        if not booking:
            raise Exception("Booking not found")

        updated = False
        for key, value in kwargs.items():
            if hasattr(booking, key):
                setattr(booking, key, value)
                updated = True
            else:
                print(f"Booking has no attribute '{key}'")

        if not updated:
            print("No valid fields to update.")
            return booking

        try:
            self.db.commit()
            self.db.refresh(booking)
        except IntegrityError as e:
            self.db.rollback()
            raise Exception(e.orig)
        return booking