from .db import db, environment, SCHEMA, add_prefix_for_prod

class Booking(db.Model):
    __tablename__ = 'bookings'

    id = db.Column(db.Integer, primary_key=True)
    listing_id = db.Column(db.Integer, db.ForeignKey(
        'listings.id', ondelete="CASCADE"), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey(
        'users.id',  ondelete="CASCADE"), nullable=False)
    start_date = db.Column(db.String(255), nullable=False)
    end_date = db.Column(db.String(255), nullable=False)
    guest_num = db.Column(db.Integer, nullable=False)
    updated_at = db.Column(db.String(200), nullable=False)

    user = db.relationship('User', back_populates='bookings')
    listing = db.relationship('Listing', back_populates='bookings')

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'listing_id': self.listing_id,
            'start_date': self.start_date,
            'end_date':self.end_date,
            'guest_num':self.guest_num,
            'updated_at': self.updated_at
        }
