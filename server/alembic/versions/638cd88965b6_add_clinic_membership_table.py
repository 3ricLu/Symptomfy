"""add_clinic_membership_table

Revision ID: 638cd88965b6
Revises: bccbbf380bad
Create Date: 2025-07-06 14:03:13.802460
"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '638cd88965b6'
down_revision: Union[str, Sequence[str], None] = 'bccbbf380bad'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None

def upgrade() -> None:
    op.create_table(
        'clinic_memberships',
        sa.Column('id', sa.Integer(), primary_key=True),
        sa.Column('clinic_id', sa.Integer(), sa.ForeignKey('clinics.id', ondelete='CASCADE'), nullable=False),
        sa.Column('user_id', sa.Integer(), sa.ForeignKey('users.id', ondelete='CASCADE'), nullable=False),
        sa.Column('role', sa.Enum("doctor", "patient", "admin", "facilitator", name="role_enum"), nullable=False),
        sa.Column('created_at', sa.DateTime(timezone=True), server_default=sa.func.now(), nullable=False),
        sa.Column('updated_at', sa.DateTime(timezone=True), server_default=sa.func.now(), onupdate=sa.func.now(), nullable=False)
    )

    op.create_index('ix_clinic_memberships_clinic_id', 'clinic_memberships', ['clinic_id'])
    op.create_index('ix_clinic_memberships_user_id', 'clinic_memberships', ['user_id'])
    op.create_index('ix_clinic_memberships_role', 'clinic_memberships', ['role'])

def downgrade() -> None:
    op.drop_index('ix_clinic_memberships_role', table_name='clinic_memberships')
    op.drop_index('ix_clinic_memberships_user_id', table_name='clinic_memberships')
    op.drop_index('ix_clinic_memberships_clinic_id', table_name='clinic_memberships')
    op.drop_table('clinic_memberships')
    sa.Enum(name="role_enum").drop(op.get_bind(), checkfirst=True)

