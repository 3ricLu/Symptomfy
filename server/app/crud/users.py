from sqlalchemy.orm import Session
from sqlalchemy.exc import IntegrityError

from app.utils.hashing import hash_password
from app.database.models import User, Doctor, Patient
from app.crud.doctors import DoctorCrud
from app.crud.patients import PatientCrud


class UserCrud:
    def __init__(self, db: Session):
        self.db = db

    def get_user(self, **kwargs):
        user = self.db.query(User).filter_by(**kwargs).first()
        return user

    def create(self, *, email, password, name):
        hashed_password = hash_password(password)
        db_user = User(email=email, hashedPassword=hashed_password, name=name)

        try:
            self.db.add(db_user)
            self.db.commit()
            self.db.refresh(db_user)
        except IntegrityError as e:
            self.db.rollback()
            raise Exception(e.orig)

        return db_user

    def userRole(self, *, user: User) -> str:
        if not user:
            raise ValueError("Missing user")

        if user.global_role:
            return user.global_role

        if DoctorCrud(self.db).isDoctor(user_id=user.id):
            return "doctor"
        if PatientCrud(self.db).isPatient(user_id=user.id):
            return "patient"

        return "unknown"
