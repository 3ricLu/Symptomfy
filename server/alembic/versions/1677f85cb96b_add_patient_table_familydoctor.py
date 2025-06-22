"""add_patient_table_familydoctor

Revision ID: 1677f85cb96b
Revises: 2da4ba1c4c14
Create Date: 2025-06-21 21:22:14.509368

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '1677f85cb96b'
down_revision: Union[str, Sequence[str], None] = '2da4ba1c4c14'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    op.add_column('patients', sa.Column('familyDoctor', sa.String(), nullable=True))

def downgrade() -> None:
    op.drop_column('patients', 'familyDoctor')
