from .db import db

class Review(db.Model):
    __tablename__ = 'reviews'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(
        'users.id',  ondelete="CASCADE"), nullable=False)
    listing_id = db.Column(db.Integer, db.ForeignKey(
        'listings.id', ondelete="CASCADE"), nullable=False)
    review = db.Column(db.String(200), nullable=False)
    rating = db.Column(db.Float, nullable=False)
    updated_at = db.Column(db.String(255), nullable=False)

    # server_default=func.now(), onupdate=func.now()
    # from sqlalchemy.sql import func

    user = db.relationship('User', back_populates='reviews')
    listing = db.relationship('Listing', back_populates='reviews')


    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'listing_id': self.listing_id,
            'review': self.review,
            'rating':self.rating,
            'updated_at': self.updated_at
        }
