from .db import db, environment, SCHEMA, add_prefix_for_prod


class Image(db.Model):
    __tablename__ = "images"
    if environment == "production":
        __table_args__ = {"schema": SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    listing_id = db.Column(
        db.Integer,
        db.ForeignKey(add_prefix_for_prod("listings.id"), ondelete="CASCADE"),
        nullable=False,
    )
    url = db.Column(db.String(255), nullable=False)

    listing = db.relationship("Listing", back_populates="images")

    def to_dict(self):
        return {
            "id": self.id,
            "listing_id": self.listing_id,
            "url": self.url,
        }
