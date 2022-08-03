from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, FloatField
from wtforms.validators import DataRequired, ValidationError

def title_length(form, field):
  title = field.data
  if len(title) > 80:
    raise ValidationError('Title must be less than 80 characters.')

def description_length(form, field):
  description = field.data
  if len(description) > 200:
    raise ValidationError('Description must be less than 200 characters.')

class ListingForm(FlaskForm):
  user_id = IntegerField('User_Id', validators=[DataRequired()])
  title = StringField('Title', validators=[DataRequired(), title_length])
  description = StringField('Description', validators=[DataRequired()] )
