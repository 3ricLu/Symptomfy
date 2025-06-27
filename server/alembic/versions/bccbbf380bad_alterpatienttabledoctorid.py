"""alterPatientTableDoctorId

Revision ID: bccbbf380bad
Revises: 1677f85cb96b
Create Date: 2025-06-26 17:19:36.804183

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = 'bccbbf380bad'
down_revision: Union[str, Sequence[str], None] = '1677f85cb96b'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None



def upgrade() -> None:
    op.add_column('patients', sa.Column('familyDoctor_int', sa.Integer(), nullable=True))
    op.drop_column('patients', 'familyDoctor')
    op.alter_column('patients', 'familyDoctor_int', new_column_name='familyDoctor')
    op.create_foreign_key(
        'fk_patients_familyDoctor_doctors',
        'patients', 'doctors',
        ['familyDoctor'], ['id'],
        ondelete='SET NULL'
    )

def downgrade() -> None:
    op.drop_constraint('fk_patients_familyDoctor_doctors', 'patients', type_='foreignkey')
    op.alter_column('patients', 'familyDoctor', new_column_name='familyDoctor_int')
    op.add_column('patients', sa.Column('familyDoctor', sa.String(), nullable=True))
    op.drop_column('patients', 'familyDoctor_int')

