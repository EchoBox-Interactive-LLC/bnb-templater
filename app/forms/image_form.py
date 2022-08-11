from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired, ValidationError
import re

def url_regex(form, field):
  url = field.data
  regex = "^(https).*(jpe?g|png)$"

  if (url == None):
      raise ValidationError('Image url cannot be empty.')

  if not (re.search(regex, url)):
      raise ValidationError('Image url has to start with https:// and must end with .jpeg .jpg or .png')

def url_length(form, field):
  url = field.data
  if len(url) > 255:
    raise ValidationError('Image url must be 255 characters or less.')

class ImageForm(FlaskForm):
  listing_id = IntegerField('Listing_Id', validators=[DataRequired()])
  url = StringField('Url', validators=[DataRequired("An image url is required"), url_regex, url_length])
