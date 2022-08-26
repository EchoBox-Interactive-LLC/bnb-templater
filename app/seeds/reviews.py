from app.models import db, Review


# Adds a few reviews
def seed_reviews():
  review1 = Review(
    user_id=3, listing_id=3, review="This place rules! We had so much fun staying here.",
    rating=4, updated_at='Fri Aug 05 2022'
  )
  review2 = Review(
    user_id=1, listing_id=4, review="Fantastic location and so close to the Lake. Also, just a quick drive to the slopes",
    rating=4, updated_at='Fri Aug 05 2022'
  )
  review3 = Review(
    user_id=2, listing_id=1, review="I was a bit dissapointed by this listing as it did not live up to what I was expecting.",
    rating=2, updated_at='Fri Aug 05 2022'
  )
  review4 = Review(
    user_id=3, listing_id=2, review="Best vacation I have ever had. I would come back and stay at this place anytime. So dreamy!",
    rating=5, updated_at='Fri Aug 05 2022'
  )
  review5 = Review(
    user_id=3, listing_id=1, review="The place is really nice. The location is great and we had a fabulous time here.",
    rating=3, updated_at='Fri Aug 05 2022'
  )
  review6 = Review(
    user_id=4, listing_id=5, review="Truely a one of a kind get away. Great with a family, friends or a romantic get away. Great price at the height of summer too!",
    rating=3, updated_at='Wed Aug 10 2022'
  )
  review7 = Review(
    user_id=5, listing_id=6, review="Best Urbnb I have ever stayed at. I highly reccomend a visit. I don't think I can even think of something bad to say about it. Book it!",
    rating=5, updated_at='Wed Aug 10 2022'
  )
  review8 = Review(
    user_id=5, listing_id=7, review="Not much to say about this one. You can tell that is in the best Urbnb of all time. We spent a week here visiting from the East Coast and we have decided, the West Coast is the best coast.",
    rating=5, updated_at='Wed Aug 10 2022'
  )
  review9 = Review(
    user_id=4, listing_id=8, review="This place is pretty darn cute and well worth a stay. Very peaceful and secluded. Stargaze and enjoy you life! Don't wait, reserve now!",
    rating=4, updated_at='Wed Aug 10 2022'
  )
  review10 = Review(
    user_id=3, listing_id=9, review="The pictures make it look better than it really is. The city is prety far and hard to get to from this location. The place is nice and pretty cute though.",
    rating=2, updated_at='Wed Aug 10 2022'
  )
  review11 = Review(
    user_id=2, listing_id=7, review="Yep, this place is even more incredible than the photos. Without a doubt worth every penny.... not cheap but well worth it. It was a one of a kind experience.",
    rating=5, updated_at='Wed Aug 10 2022'
  )


  db.session.add(review1)
  db.session.add(review2)
  db.session.add(review3)
  db.session.add(review4)
  db.session.add(review5)
  db.session.add(review6)
  db.session.add(review7)
  db.session.add(review8)
  db.session.add(review9)
  db.session.add(review10)
  db.session.add(review11)

  db.session.commit()


# Uses a raw SQL query to TRUNCATE the reviews table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_reviews():
    db.session.execute('TRUNCATE reviews RESTART IDENTITY CASCADE;')
    db.session.commit()
