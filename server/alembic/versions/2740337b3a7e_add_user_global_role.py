"""add_user_global_role

Revision ID: 2740337b3a7e
Revises: 638cd88965b6
Create Date: 2025-07-06 14:23:32.180766

"""

from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = "2740337b3a7e"
down_revision: Union[str, Sequence[str], None] = "638cd88965b6"
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade():
    op.add_column(
        "users", sa.Column("global_role", sa.String(length=20), nullable=True)
    )
    op.create_check_constraint(
        "chk_global_role", "users", "global_role IN ('admin', 'support', 'auditor')"
    )


def downgrade():
    op.drop_constraint("chk_global_role", "users", type_="check")
    op.drop_column("users", "global_role")
