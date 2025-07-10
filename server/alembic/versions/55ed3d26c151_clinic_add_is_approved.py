"""clinic_add_is_approved

Revision ID: 55ed3d26c151
Revises: 2740337b3a7e
Create Date: 2025-07-07 16:19:32.391265

"""

from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = "55ed3d26c151"
down_revision: Union[str, Sequence[str], None] = "2740337b3a7e"
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade():
    op.add_column(
        "clinics",
        sa.Column(
            "is_approved", sa.Boolean(), nullable=False, server_default=sa.false()
        ),
    )


def downgrade():
    op.drop_column("clinics", "is_approved")
