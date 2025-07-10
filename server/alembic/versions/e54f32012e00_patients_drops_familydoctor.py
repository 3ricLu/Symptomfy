"""patients_drops_familyDoctor

Revision ID: e54f32012e00
Revises: 108707caf6ef
Create Date: 2025-07-10 01:14:38.588349

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = 'e54f32012e00'
down_revision: Union[str, Sequence[str], None] = '108707caf6ef'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    op.drop_column("patients", "familyDoctor")

def downgrade() -> None:
    op.add_column("patients", sa.Column("familyDoctor", sa.String(), nullable=True))