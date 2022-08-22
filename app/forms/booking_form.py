from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, FloatField
from wtforms.validators import DataRequired, ValidationError
from datetime import datetime


def start_date_in_future(form, field):
    start_date = field.data
    if start_date < datetime.today().strftime("%Y-%m-%d"):
        raise ValidationError('Start date cannot be in the past')


def end_date_in_future(form, field):
    end_date = field.data
    if end_date < datetime.today().strftime("%Y-%m-%d"):
        raise ValidationError('End date cannot be in the past')     


def min_guest_num(form, field):
    guest_num = field.data
    if (guest_num < 1):
        raise ValidationError('There must be a least one guest')   


def max_guest_num(form, field):
    guest_num = field.data
    if (guest_num > 15):
        raise ValidationError('More than 15 guests are not allowed')                


class BookingForm(FlaskForm):
    listing_id = IntegerField('Listing_Id', validators=[DataRequired()])
    user_id = IntegerField('User_Id', validators=[DataRequired()])
    start_date = StringField('Start_Date', validators=[DataRequired('Start date required'), start_date_in_future])
    end_date = StringField('End_Date', validators=[DataRequired('End date required'), end_date_in_future])
    guest_num = IntegerField('Guest_Num', validators=[DataRequired('Guest number is required'), min_guest_num, max_guest_num])
    updated_at = StringField('Update_At', validators=[DataRequired()])


class UpdateBookingForm(FlaskForm):
    listing_id = IntegerField('Listing_Id', validators=[DataRequired()])
    user_id = IntegerField('User_Id', validators=[DataRequired()])
    start_date = StringField('Start_Date', validators=[DataRequired('Start date required'), start_date_in_future])
    end_date = StringField('End_Date', validators=[DataRequired('End date required'), end_date_in_future])
    guest_num = IntegerField('Guest_Num', validators=[DataRequired('Guest number is required'), min_guest_num, max_guest_num])
    updated_at = StringField('Update_At', validators=[DataRequired()])


