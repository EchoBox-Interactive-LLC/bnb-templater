from app.models import db, Review
from datetime import datetime


# Adds a few reviews
def seed_reviews():
  review1 = Review(
    user_id=1, listing_id=3, review="This place rules! We had so much fun staying here.",
    rating=4, updated_at=datetime.now()
  )
  review2 = Review(
    user_id=1, listing_id=4, review="Fantastic location and so close to the Lake. Also, just a quick drive to the slopes",
    rating=4, updated_at=datetime.now()
  )
  review3 = Review(
    user_id=2, listing_id=1, review="I was a bit dissapointed by this listing as it did not live up to what I was expecting.",
    rating=2, updated_at=datetime.now()
  )
  review4 = Review(
    user_id=3, listing_id=1, review="Best vacation I have ever had. I would come back and stay at this place anytime. So dreamy!",
    rating=5, updated_at=datetime.now()
  )
  review5 = Review(
    user_id=3, listing_id=1, review="The place is really nice. The location is great and we had a fabulous time here.",
    rating=3, updated_at=datetime.now()
  )


  db.session.add(review1)
  db.session.add(review2)
  db.session.add(review3)
  db.session.add(review4)
  db.session.add(review5)

  db.session.commit()


# Uses a raw SQL query to TRUNCATE the reviews table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_reviews():
    db.session.execute('TRUNCATE reviews RESTART IDENTITY CASCADE;')
    db.session.commit()
