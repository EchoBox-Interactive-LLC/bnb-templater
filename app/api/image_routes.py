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


# @image_routes.route('/<int:id>/')
# def get_image(id):
#     review = Review.query.get(id)
#     if not review.to_dict():
#         return {"errors": "Review Not Found!"}, 404
#     else:
#         return {"review": review.to_dict()}
