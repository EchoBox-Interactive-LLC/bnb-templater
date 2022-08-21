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


@booking_routes.route('/', methods=["POST"])
@login_required
def create_booking():
    form = BookingForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():

        booking = Booking(
            listing_id=form.data['listing_id'],
            user_id=form.data['user_id'],
            start_date=form.data['start_date'],
            end_date=form.data['end_date'],
            updated_at=form.data['updated_at']
        )

        db.session.add(booking)
        db.session.commit()
        return booking.to_dict()

    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@booking_routes.route("/<int:id>", methods=["PUT"])
@login_required
def update_booking(id):
    form = UpdateBookingForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        booking = booking.query.get(id)
        if booking.user_id != form.data['user_id']:
            return {'errors': "This is not your booking and therefore you are unathorized to edit it."}, 401

        booking.listing_id = form.data['listing_id'],
        booking.user_id = form.data['user_id'],
        booking.start_date=form.data['start_date'],
        booking.end_date=form.data['end_date'],
        booking.updated_at=form.data['updated_at']

        db.session.commit()
        return booking.to_dict()

    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@booking_routes.route('/<int:id>', methods=["DELETE"])
@login_required
def delete_booking(id):
    booking = Booking.query.filter(Booking.id == id)
    booking.delete()
    db.session.commit()
    return {'message': 'Your booking has been deleted'}