from email.mime import image
from flask import Blueprint, redirect, request
from flask_login import login_required
from app.api.auth_routes import validation_errors_to_error_messages
from app.models import db, Image

image_routes = Blueprint('images', __name__)


@image_routes.route('/')
def get_images():
    images = Image.query.all()
    return {'images': [image.to_dict() for image in images]}


@image_routes.route('/<int:id>/')
def get_image(id):
    image =Image.query.get(id)
    if not image.to_dict():
        return {"errors": "Image Not Found!"}, 404
    else:
        return {"image": image.to_dict()}


@image_routes.route('/', methods=["POST"])
@login_required
def create_image():
    form = ImageForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():

        review = Image(
            user_id=form.data['user_id'],
            listing_id=form.data['listing_id'],
            review=form.data['review'],
            rating=form.data['rating'],
            updated_at=form.data['updated_at']
        )

        db.session.add(review)
        db.session.commit()
        return review.to_dict()

    return {'errors': validation_errors_to_error_messages(form.errors)}, 401
