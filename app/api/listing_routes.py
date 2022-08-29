from flask import Blueprint, redirect, request
from flask_login import login_required
from app.api.auth_routes import validation_errors_to_error_messages
from app.models import db, Listing
from app.forms.listing_form import ListingForm, UpdateListingForm

listing_routes = Blueprint('listings', __name__)

@listing_routes.route('/')
def get_listings():
    listings = Listing.query.all()
    return {'listings': [listing.to_dict() for listing in listings]}


@listing_routes.route('/<int:id>/')
def get_listing(id):
    listing = Listing.query.get(id)
    if not listing.to_dict():
        return {"errors": "Listing Not Found!"}, 404
    else:
        return {"listing": listing.to_dict()}


@listing_routes.route('/', methods=["POST"])
@login_required
def create_listing():
    form = ListingForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():

        listing = Listing(
            user_id=form.data['user_id'],
            title=form.data['title'],
            description=form.data['description'],
            category=form.data['category'],
            address=form.data['address'],
            city=form.data['city'],
            state=form.data['state'],
            country=form.data['country'],
            price=form.data['price'],
            cleaning_fee=form.data['cleaning_fee'],
            wishlist=form.data['wishlist'],
            updated_at=form.data['updated_at']
        )

        db.session.add(listing)
        db.session.commit()
        return listing.to_dict()

    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@listing_routes.route("/<int:id>", methods=["PUT"])
@login_required
def update_listing(id):
    form = UpdateListingForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        listing = Listing.query.get(id)
        if listing.user_id != form.data['user_id']:
            return {'errors': "This is not your listing and therefore you are unathorized to edit it."}, 401

        listing.user_id = form.data['user_id'],
        listing.title=form.data['title'],
        listing.description=form.data['description'],
        listing.category=form.data['category'],
        listing.address=form.data['address'],
        listing.city=form.data['city'],
        listing.state=form.data['state'],
        listing.country=form.data['country'],
        listing.price=form.data['price'],
        listing.cleaning_fee=form.data['cleaning_fee'],
        listing.wishlist=form.data['wishlist'],
        listing.updated_at=form.data['updated_at']

        db.session.commit()
        return listing.to_dict()

    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@listing_routes.route('/<int:id>', methods=["DELETE"])
@login_required
def delete_listing(id):
    listing = Listing.query.filter(Listing.id == id)
    listing.delete()
    db.session.commit()
    return {'message': 'Your listing has been deleted'}
