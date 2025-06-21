"""create_booking_table

Revision ID: 2da4ba1c4c14
Revises: 9b7cd45e7cc9
Create Date: 2025-06-21 19:03:25.822084

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '2da4ba1c4c14'
down_revision: Union[str, Sequence[str], None] = '9b7cd45e7cc9'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    op.create_table(
        'booking',
        sa.Column('id', sa.Integer, primary_key=True),
        sa.Column('patient_id', sa.Integer, sa.ForeignKey('patients.id'), nullable=False),
        sa.Column('doctor_id', sa.Integer, sa.ForeignKey('doctors.id'), nullable=False),
        sa.Column('diagnosis_id', sa.Integer, sa.ForeignKey('diagnosis.id'), nullable=True),
        sa.Column('status', sa.Enum('cancelled', 'confirmed', 'tentative', name='booking_status_enum'), nullable=False, server_default='tentative'),
        sa.Column('time_start', sa.DateTime, nullable=False),
        sa.Column('time_end', sa.DateTime, nullable=False),
        sa.Column('created_at', sa.DateTime, server_default=sa.func.now(), nullable=False),
        sa.Column('updated_at', sa.DateTime, server_default=sa.func.now(), onupdate=sa.func.now(), nullable=False),
    )

def downgrade() -> None:
    op.drop_table('booking')
    op.execute('DROP TYPE IF EXISTS booking_status_enum')