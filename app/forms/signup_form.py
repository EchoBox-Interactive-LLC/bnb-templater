from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import User
import re


def user_exists(form, field):
    # Checking if user exists
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError('Email address is already in use')


def username_exists(form, field):
    # Checking if username is already in use
    username = field.data
    user = User.query.filter(User.username == username).first()
    if user:
        raise ValidationError('Username is already in use')


def email_regex(form, field):
  email = field.data
  regex = ".*@.*..*"

  if (email == None):
      raise ValidationError('Email field cannot be empty')

  if not (re.search(regex, email)):
      raise ValidationError('Email must be a valid email address with an "@" and a "."') 


def username_length(form, field):
  username = field.data
  if len(username) > 20:
    raise ValidationError('Username must be 20 characters or less')


def email_length(form, field):
  email = field.data
  if len(email) > 50:
    raise ValidationError('Email must be 50 characters or less')    


class SignUpForm(FlaskForm):
    username = StringField(
        'username', validators=[DataRequired("Username is required"), username_exists, username_length])
    email = StringField('email', validators=[DataRequired("Email is required"), user_exists, email_regex, email_length])
    password = StringField('password', validators=[DataRequired("Password is required")])
