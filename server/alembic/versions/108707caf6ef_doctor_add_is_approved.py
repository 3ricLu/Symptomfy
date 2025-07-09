"""doctor_add_is_approved

Revision ID: 108707caf6ef
Revises: 55ed3d26c151
Create Date: 2025-07-08 00:48:40.468864

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '108707caf6ef'
down_revision: Union[str, Sequence[str], None] = '55ed3d26c151'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade():
    op.add_column('doctors', sa.Column('is_approved', sa.Boolean(), nullable=False, server_default=sa.false()))

def downgrade():
    op.drop_column('doctors', 'is_approved')