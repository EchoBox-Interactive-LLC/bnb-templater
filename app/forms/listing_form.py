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

def address_length(form, field):
  address = field.data
  if len(address) > 125:
    raise ValidationError('Address must be less than 125 characters.')

def city_length(form, field):
  city = field.data
  if len(city) > 115:
    raise ValidationError('City must be less than 115 characters.')

def state_length(form, field):
  state = field.data
  if len(state) > 2:
    raise ValidationError('State must be less than 3 characters.')

def state_length(form, field):
  state = field.data
  if len(state) > 115:
    raise ValidationError('State must be less than 115 characters.')



class ListingForm(FlaskForm):
  user_id = IntegerField('User_Id', validators=[DataRequired()])
  title = StringField('Title', validators=[DataRequired(), title_length])
  description = StringField('Description', validators=[DataRequired(), description_length])
  address = StringField('Address', validators=[DataRequired(), address_length])
  city = StringField('City', validators=[DataRequired(), city_length])
  state = StringField('State', validators=[DataRequired(), state_length])
  country = StringField('Country', validators=[DataRequired()])
