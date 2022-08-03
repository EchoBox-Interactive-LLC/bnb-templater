from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, FloatField
from wtforms.validators import DataRequired, ValidationError

def title_length(form, field):
  title = field.data
  if len(title) > 80:
    raise ValidationError('Title must be 80 characters or less.')

def description_length(form, field):
  description = field.data
  if len(description) > 200:
    raise ValidationError('Description must be 200 characters or less.')

def address_length(form, field):
  address = field.data
  if len(address) > 125:
    raise ValidationError('Address must be 125 characters or less.')

def city_length(form, field):
  city = field.data
  if len(city) > 115:
    raise ValidationError('City must be 115 characters or less.')

def state_length(form, field):
  state = field.data
  if len(state) > 2:
    raise ValidationError('State must be 2 characters or less.')

def country_length(form, field):
  state = field.data
  if len(state) > 115:
    raise ValidationError('Country must be 115 characters or less.')

def price_non_zero(form, field):
  price = field.data
  if price <=  0:
    raise ValidationError('Price must be greater than 0.')


class ListingForm(FlaskForm):
  user_id = IntegerField('User_Id', validators=[DataRequired()])
  title = StringField('Title', validators=[DataRequired(), title_length])
  description = StringField('Description', validators=[DataRequired(), description_length])
  address = StringField('Address', validators=[DataRequired(), address_length])
  city = StringField('City', validators=[DataRequired(), city_length])
  state = StringField('State', validators=[DataRequired(), state_length])
  country = StringField('Country', validators=[DataRequired(), country_length])
  price = FloatField('Price', validators=[DataRequired(), price_non_zero])
  updated_at = StringField('Update_At', validators=[DataRequired()])


class UpdateListingForm(FlaskForm):
  user_id = IntegerField('User_Id', validators=[DataRequired()])
  title = StringField('Title', validators=[DataRequired(), title_length])
  description = StringField('Description', validators=[DataRequired(), description_length])
  address = StringField('Address', validators=[DataRequired(), address_length])
  city = StringField('City', validators=[DataRequired(), city_length])
  state = StringField('State', validators=[DataRequired(), state_length])
  country = StringField('Country', validators=[DataRequired(), country_length])
  price = FloatField('Price', validators=[DataRequired(), price_non_zero])
  updated_at = StringField('Update_At', validators=[DataRequired()])
