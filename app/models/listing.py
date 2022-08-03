from .db import db

class Listing(db.Model):
    __tablename__ = 'listings'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(
        'users.id',  ondelete="CASCADE"), nullable=False)
    title = db.Column(db.String(80), nullable=False)
    description = db.Column(db.String(200), nullable=False)
    address = db.Column(db.String(125), nullable=False)
    city = db.Column(db.String(115), nullable=False)
    state = db.Column(db.String(115), nullable=False)
    country = db.Column(db.String(115), nullable=False)
    price = db.Column(db.Float, nullable=False)
    updated_at = db.Column(db.String(255), nullable=False)

    user = db.relationship('User', back_populates='listings')
    images = db.relationship('Image', back_populates='listing', cascade='all, delete-orphan', passive_deletes=True)
    bookings = db.relationship('Booking', back_populates='listing', cascade='all, delete-orphan', passive_deletes=True)
    reviews = db.relationship('Review', back_populates='listing', cascade='all, delete-orphan', passive_deletes=True)

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'title': self.title,
            'description': self.description,
            'address': self.address,
            'city': self.city,
            'state': self.state,
            'country': self.country,
            'price': self.price,
            'updated_at': self.updated_at,

            'images': [image.to_dict() for image in self.images]
        }
