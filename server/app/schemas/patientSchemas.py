from pydantic import BaseModel
from typing import Optional

class UserUpdateSchema(BaseModel):
    first_name: Optional[str]
    middle_name: Optional[str]
    last_name: Optional[str]