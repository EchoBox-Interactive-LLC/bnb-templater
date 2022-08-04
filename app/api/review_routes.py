from flask import Blueprint, redirect, request
from flask_login import login_required
from app.api.auth_routes import validation_errors_to_error_messages
from app.models import db, Review

review_routes = Blueprint('reviews', __name__)

@review_routes.route('/')
def get_reviews():
    reviews = Review.query.all()
    return {'reviews': [review.to_dict() for review in reviews]}


@review_routes.route('/<int:id>/')
def get_review(id):
    review = Review.query.get(id)
    if not review.to_dict():
        return {"errors": "Review Not Found!"}, 404
    else:
        return {"review": review.to_dict()}

@review_routes.route('/', methods=["POST"])
@login_required
def create_review():
    form = ReviewForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():

        listing = Listing(
            user_id=form.data['user_id'],
            title=form.data['title'],
            description=form.data['description'],
            address=form.data['address'],
            city=form.data['city'],
            state=form.data['state'],
            country=form.data['country'],
            price=form.data['price'],
            updated_at=form.data['updated_at']
        )

        db.session.add(listing)
        db.session.commit()
        return listing.to_dict()

    return {'errors': validation_errors_to_error_messages(form.errors)}, 401
