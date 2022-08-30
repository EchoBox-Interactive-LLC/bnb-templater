from flask_wtf import FlaskForm
from wtforms import IntegerField
from wtforms.validators import DataRequired


class WishlistForm(FlaskForm):
  user_id = IntegerField('User_Id', validators=[DataRequired()])
  listing_id = IntegerField('Listing_Id', validators=[DataRequired()])