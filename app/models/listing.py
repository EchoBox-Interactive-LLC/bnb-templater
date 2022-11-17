from .db import db, environment, SCHEMA, add_prefix_for_prod


class Listing(db.Model):
    __tablename__ = "listings"
    if environment == "production":
        __table_args__ = {"schema": SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(
        db.Integer,
        db.ForeignKey(add_prefix_for_prod("users.id"), ondelete="CASCADE"),
        nullable=False,
    )
    title = db.Column(db.String(40), nullable=False)
    description = db.Column(db.String(200), nullable=False)
    category = db.Column(db.String(20), nullable=False)
    address = db.Column(db.String(60), nullable=False)
    city = db.Column(db.String(40), nullable=False)
    state = db.Column(db.String(40), nullable=False)
    country = db.Column(db.String(40), nullable=False)
    cleaning_fee = db.Column(db.Float, nullable=False)
    price = db.Column(db.Float, nullable=False)
    updated_at = db.Column(db.String(255), nullable=False)

    user = db.relationship("User", back_populates="listings")
    images = db.relationship(
        "Image",
        back_populates="listing",
        cascade="all, delete-orphan",
        passive_deletes=True,
    )
    bookings = db.relationship(
        "Booking",
        back_populates="listing",
        cascade="all, delete-orphan",
        passive_deletes=True,
    )
    reviews = db.relationship(
        "Review",
        back_populates="listing",
        cascade="all, delete-orphan",
        passive_deletes=True,
    )
    wishlists = db.relationship(
        "Wishlist",
        back_populates="listing",
        cascade="all, delete-orphan",
        passive_deletes=True,
    )

    def to_dict(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "title": self.title,
            "description": self.description,
            "category": self.category,
            "address": self.address,
            "city": self.city,
            "state": self.state,
            "country": self.country,
            "cleaning_fee": self.cleaning_fee,
            "price": self.price,
            "updated_at": self.updated_at,
            "images": [image.to_dict() for image in self.images],
            "reviews": [review.to_dict() for review in self.reviews],
            "user": [self.user.to_dict()],
        }
