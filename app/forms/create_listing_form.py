from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, FloatField, TextAreaField
from wtforms.validators import DataRequired, Email, ValidationError

def title_length(form, field):
  title = field.data
  if len(title) > 80:
    raise ValidationError('Title must be less than 80 character.')

class CreateEventForm(FlaskForm):
  user_id = IntegerField('User_Id', validators=[DataRequired()])
  title = StringField('Title', validators=[DataRequired(), title_length])
