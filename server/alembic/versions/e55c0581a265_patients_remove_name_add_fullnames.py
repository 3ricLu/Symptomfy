"""patients_remove_name_add_fullnames

Revision ID: e55c0581a265
Revises: e54f32012e00
Create Date: 2025-07-10 01:57:35.075758

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = 'e55c0581a265'
down_revision: Union[str, Sequence[str], None] = 'e54f32012e00'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    op.drop_column("users", "name")
    
    op.add_column("users", sa.Column("first_name", sa.String(), nullable=True))
    op.add_column("users", sa.Column("middle_name", sa.String(), nullable=True))
    op.add_column("users", sa.Column("last_name", sa.String(), nullable=True))


def downgrade() -> None:
    op.drop_column("users", "first_name")
    op.drop_column("users", "middle_name")
    op.drop_column("users", "last_name")
    
    op.add_column("users", sa.Column("name", sa.String(), nullable=True))