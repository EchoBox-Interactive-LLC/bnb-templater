from email.mime import image
from flask import Blueprint, redirect, request
from flask_login import login_required
from app.api.auth_routes import validation_errors_to_error_messages
from app.models import db, Image
from app.forms.image_form import ImageForm

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

        image = Image(
            listing_id=form.data['listing_id'],
            url=form.data['url'],
        )

        db.session.add(image)
        db.session.commit()
        return image.to_dict()

    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@image_routes.route('/<int:id>', methods=["DELETE"])
@login_required
def delete_image(id):
    image = Image.query.filter(Image.id == id)
    image.delete()
    db.session.commit()
    return {'message': 'Your image has been deleted'}
