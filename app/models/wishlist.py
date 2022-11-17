from .db import db, environment, SCHEMA, add_prefix_for_prod


class Wishlist(db.Model):
    __tablename__ = "wishlists"
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

    user = db.relationship("User", back_populates="wishlists")
    listing = db.relationship("Listing", back_populates="wishlists")

    def to_dict(self):
        return {"id": self.id, "user_id": self.user_id, "listing_id": self.listing_id}
