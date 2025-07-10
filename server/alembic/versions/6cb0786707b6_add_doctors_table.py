"""add_doctors_table

Revision ID: 6cb0786707b6
Revises: 413c2348b84c
Create Date: 2025-06-21 18:55:02.236235

"""

from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = "6cb0786707b6"
down_revision: Union[str, Sequence[str], None] = "413c2348b84c"
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    op.create_table(
        "doctors",
        sa.Column("id", sa.Integer, primary_key=True),
        sa.Column("user_id", sa.Integer, sa.ForeignKey("users.id"), nullable=False),
        sa.Column("clinic_id", sa.Integer, sa.ForeignKey("clinics.id"), nullable=True),
        sa.Column("specialty", sa.String(255), nullable=True),
    )


def downgrade() -> None:
    op.drop_table("doctors")
