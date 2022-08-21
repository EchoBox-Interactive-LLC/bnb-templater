from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired, ValidationError


def review_length(form, field):
  review = field.data
  if len(review) > 200:
    raise ValidationError('Review must be 200 characters or less')


class ReviewForm(FlaskForm):
  user_id = IntegerField('User_Id', validators=[DataRequired()])
  listing_id = IntegerField('Listing_Id', validators=[DataRequired()])
  review = StringField('Review', validators=[DataRequired("A review is required"), review_length])
  rating = StringField('Rating', validators=[DataRequired("A rating is required")])
  updated_at = StringField('Update_At', validators=[DataRequired()])


class UpdateReviewForm(FlaskForm):
  user_id = IntegerField('User_Id', validators=[DataRequired()])
  listing_id = IntegerField('Listing_Id', validators=[DataRequired()])
  review = StringField('Review', validators=[DataRequired("A review is required"), review_length])
  rating = StringField('Rating', validators=[DataRequired("A rating is required")])
  updated_at = StringField('Update_At', validators=[DataRequired()])
