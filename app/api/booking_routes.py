from flask import Blueprint, redirect, request
from flask_login import login_required
from app.api.auth_routes import validation_errors_to_error_messages
from app.models import db, Booking
from app.forms.booking_form import BookingForm, UpdateBookingForm


booking_routes = Blueprint('bookings', __name__)


@booking_routes.route('/')
@login_required
def get_bookings():
    bookings = Booking.query.all()
    return {'bookings': [booking.to_dict() for booking in bookings]}


@booking_routes.route('/<int:id>/')
@login_required
def get_booking(id):
    booking = Booking.query.get(id)
    if not booking.to_dict():
        return {"errors": "Booking Not Found!"}, 404
    else:
        return {"booking": booking.to_dict()}