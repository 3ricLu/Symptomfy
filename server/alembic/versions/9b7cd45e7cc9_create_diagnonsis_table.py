"""create_diagnonsis_table

Revision ID: 9b7cd45e7cc9
Revises: 6cb0786707b6
Create Date: 2025-06-21 19:00:54.728640

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '9b7cd45e7cc9'
down_revision: Union[str, Sequence[str], None] = '6cb0786707b6'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    op.create_table(
        'diagnosis',
        sa.Column('id', sa.Integer, primary_key=True),
        sa.Column('patient_id', sa.Integer, sa.ForeignKey('patients.id'), nullable=False),
        sa.Column('symptoms', sa.ARRAY(sa.String), nullable=False),
        sa.Column('predicted_diagnosis', sa.String(255), nullable=False),
        sa.Column('created_at', sa.DateTime, server_default=sa.func.now(), nullable=False),
    )

def downgrade() -> None:
    op.drop_table('diagnosis')
