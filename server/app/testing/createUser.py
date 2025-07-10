from ..crud.users import UserCrud
from ..database.database import SessionLocal

if __name__ == "__main__":
    db = SessionLocal()

    userCrud = UserCrud(db)

    userCrud.create("nicholaspu3@gmail.com", "password", "nick")

    db.close()
