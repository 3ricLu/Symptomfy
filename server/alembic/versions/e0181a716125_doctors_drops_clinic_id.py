"""doctors_drops_clinic_id

Revision ID: e0181a716125
Revises: e55c0581a265
Create Date: 2025-07-10 03:42:33.525795

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = 'e0181a716125'
down_revision: Union[str, Sequence[str], None] = 'e55c0581a265'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None

def upgrade() -> None:
    op.drop_column("doctors", "clinic_id")


def downgrade() -> None:
    op.add_column("doctors", sa.Column(
        "clinic_id", sa.Integer(), sa.ForeignKey("clinics.id"), nullable=True
    ))