"""create_user_table

Revision ID: d46e9b4f61ba
Revises:
Create Date: 2025-06-21 14:43:58.537970

"""

from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = "d46e9b4f61ba"
down_revision: Union[str, Sequence[str], None] = None
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    op.create_table(
        "users",
        sa.Column("id", sa.Integer, primary_key=True),
        sa.Column("name", sa.String, nullable=False),
        sa.Column("email", sa.String, nullable=False, unique=True),
        sa.Column("hashedPassword", sa.String, nullable=False),
    )
    pass


def downgrade() -> None:
    op.drop_table("users")
