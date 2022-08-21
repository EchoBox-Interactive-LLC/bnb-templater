from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, FloatField
from wtforms.validators import DataRequired, ValidationError
from datetime import datetime


def start_date_in_future(form, field):
    start_date = field.data
    if datetime(start_date) < datetime.now():
        raise ValidationError('Start date cannot be in the past')


def end_date_in_future(form, field):
    end_date = field.data
    if datetime(end_date) < datetime.now():
        raise ValidationError('End date cannot be in the past')        


class BookingForm(FlaskForm):
    listing_id = IntegerField('Listing_Id', validators=[DataRequired()])
    user_id = IntegerField('User_Id', validators=[DataRequired()])
    start_date = StringField('Start_Date', validators=[DataRequired('Start date required'), start_date_in_future])
    end_date = StringField('End_Date', validators=[DataRequired('End date required'), end_date_in_future])
    updated_at = StringField('Update_At', validators=[DataRequired()])


class UpdateBookingForm(FlaskForm):
    listing_id = IntegerField('Listing_Id', validators=[DataRequired()])
    user_id = IntegerField('User_Id', validators=[DataRequired()])
    start_date = StringField('Start_Date', validators=[DataRequired('Start date required'), start_date_in_future])
    end_date = StringField('End_Date', validators=[DataRequired('End date required'), end_date_in_future])
    updated_at = StringField('Update_At', validators=[DataRequired()])


