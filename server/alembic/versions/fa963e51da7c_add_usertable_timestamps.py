"""add_usertable_timestamps

Revision ID: fa963e51da7c
Revises: d46e9b4f61ba
Create Date: 2025-06-21 15:05:13.237499

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = 'fa963e51da7c'
down_revision: Union[str, Sequence[str], None] = 'd46e9b4f61ba'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    op.add_column('users', sa.Column('created_at', sa.DateTime(), server_default=sa.func.now(), nullable=False)),
    op.add_column('users', sa.Column('updated_at', sa.DateTime(), server_default=sa.func.now(), nullable=False))


def downgrade() -> None:
    op.drop_column('users', 'created_at'),
    op.drop_column('users', 'updated_at')
