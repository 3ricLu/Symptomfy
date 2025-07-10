"""add_patient_table

Revision ID: 85009d92a558
Revises: fa963e51da7c
Create Date: 2025-06-21 18:31:25.808296

"""

from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = "85009d92a558"
down_revision: Union[str, Sequence[str], None] = "fa963e51da7c"
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    op.create_table(
        "patients",
        sa.Column("id", sa.Integer, primary_key=True),
        sa.Column("user_id", sa.Integer, sa.ForeignKey("users.id"), nullable=False),
        sa.Column("address", sa.String, nullable=True),
        sa.Column(
            "sex", sa.Enum("male", "female", "other", name="sex_enum"), nullable=True
        ),
        sa.Column("age", sa.Integer, nullable=True),
        sa.CheckConstraint("age >= 0 AND age <= 140", name="age_between_0_and_140"),
    )


def downgrade() -> None:
    op.drop_table("patients")
