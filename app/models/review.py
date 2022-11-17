from .db import db, environment, SCHEMA, add_prefix_for_prod


class Review(db.Model):
    __tablename__ = "reviews"
    if environment == "production":
        __table_args__ = {"schema": SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(
        db.Integer,
        db.ForeignKey(add_prefix_for_prod("users.id"), ondelete="CASCADE"),
        nullable=False,
    )
    listing_id = db.Column(
        db.Integer,
        db.ForeignKey(add_prefix_for_prod("listings.id"), ondelete="CASCADE"),
        nullable=False,
    )
    review = db.Column(db.String(200), nullable=False)
    rating = db.Column(db.Float, nullable=False)
    updated_at = db.Column(db.String(255), nullable=False)

    # TO CREATE A DEFAULT VALUE, THIS WAY updated_at CAN BE TAKEN CARE OF BY THE BACK END ENTIERLY
    # NO NEED TO CREATE DATES IN THE FRONT END SEND THEM BACK TO THE DB
    # server_default=func.now(), onupdate=func.now()
    # from sqlalchemy.sql import func

    user = db.relationship("User", back_populates="reviews")
    listing = db.relationship("Listing", back_populates="reviews")

    def to_dict(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "listing_id": self.listing_id,
            "review": self.review,
            "rating": self.rating,
            "updated_at": self.updated_at,
            "user": [self.user.to_dict()],
        }
