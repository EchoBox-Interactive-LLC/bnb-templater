from flask import Blueprint, redirect, request
from flask_login import login_required
from app.api.auth_routes import validation_errors_to_error_messages
from app.models import db, Listing

listing_routes = Blueprint('listings', __name__)

@listing_routes.route('/')
def get_listings():
    listings = Listing.query.all()
    return {'listings': [listing.to_dict() for listing in listings]}


@listing_routes.route('/<int:id>/')
def get_listing(id):
    listing = Listing.query.get(id)
    if not listing.to_dict:
        return {"errors": "Listing Not Found!"}, 404
    else:
        return {"listing": listing.to_dict()}


# @listing_routes.route('/', methods=["POST"])
# @login_required
# def create_listing():
    # form = ListingForm()
    # form['csrf_token'].data = request.cookies['csrf_token']

    # if form.validate_on_submit():

    #     listing = Listing(
    #         user_id=form.data['user_id'],
    #         category=form.data['category'],
    #         name=form.data['name'],
    #         event_image_url=form.data['image'],
    #         date=form.data['date'],
    #         description=form.data['description'],
    #         price=form.data['price'],
    #         max_occupancy=form.data['occupancy'],
    #         tickets_available=form.data['occupancy'],
    #         street_address=form.data['street_address'],
    #         city=form.data['city'],
    #         state=form.data['state'],
    #         zip_code=form.data['zipCode'],
    #     )

    #     db.session.add(listing)
    #     db.session.commit()
    #     return listing.to_dict()

    # return {'errors': validation_errors_to_error_messages(form.errors)}, 401
