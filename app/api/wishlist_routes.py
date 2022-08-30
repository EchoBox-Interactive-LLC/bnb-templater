from flask import Blueprint, request
from flask_login import login_required
from app.api.auth_routes import validation_errors_to_error_messages
from app.models import db, Wishlist
from app.forms.wishlist_form import WishlistForm


wishlist_routes = Blueprint('wishlists', __name__)


@wishlist_routes.route('/user/<int:id>')
@login_required
def get_wishlist(id):
    wishlists = Wishlist.query.filter(Wishlist.user_id == id)
    return {'wishlists': [wishlist.to_dict() for wishlist in wishlists]}


@wishlist_routes.route('/', methods=["POST"])
@login_required
def create_wishlist():
    form = WishlistForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    print("\n\n", form.data, "\n\n")

    if form.validate_on_submit():

        wishlist = Wishlist(
            user_id=form.data['user_id'],
            listing_id=form.data['listing_id']
        )

        db.session.add(wishlist)
        db.session.commit()
        return wishlist.to_dict()

    return {'errors': validation_errors_to_error_messages(form.errors)}, 401   


@wishlist_routes.route('/<int:id>', methods=["DELETE"])
@login_required
def delete_wishlist(id):
    wishlist = Wishlist.query.filter(Wishlist.id == id)
    wishlist.delete()
    db.session.commit()
    return {'message': 'This listing has been removed from your wishlist'}