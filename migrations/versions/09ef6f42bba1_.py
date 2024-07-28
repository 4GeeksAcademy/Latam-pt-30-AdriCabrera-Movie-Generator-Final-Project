"""empty message

Revision ID: 09ef6f42bba1
Revises: 40256a7bc920
Create Date: 2024-07-28 21:55:03.039974

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '09ef6f42bba1'
down_revision = '40256a7bc920'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('my_list', schema=None) as batch_op:
        batch_op.drop_column('seen')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('my_list', schema=None) as batch_op:
        batch_op.add_column(sa.Column('seen', sa.BOOLEAN(), autoincrement=False, nullable=True))

    # ### end Alembic commands ###