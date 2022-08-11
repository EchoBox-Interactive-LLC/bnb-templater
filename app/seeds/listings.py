from app.models import db, Listing

# Adds a few listings
def seed_listings():
    listing1 = Listing(
        user_id=1, title='Tahoe Escape', description="This is a wonderful get away on the lake! Dreamy location at an unbeatable price.",
        address="48 Moana Cir", city="Tahoma", state="California", country="USA", price=300.00, updated_at='Fri Aug 05 2022')
    listing2 = Listing(
        user_id=1, title='Tahoe Dreamhouse', description="This is a wonderful near Lake Tahoe! Great for a visit during winter or summer.",
        address="5588 N Lake Blvd", city="Carnelian Bay", state="California", country="USA", price=450.00, updated_at='Fri Aug 05 2022')
    listing3 = Listing(
        user_id=2, title='Tahoe Cabin', description="Great Tahoe get away. This is a Tahoe Cabin that people dream about.",
        address="1585 Vivian Ln", city="Incline Village", state="Nevada", country="USA", price=400.00, updated_at='Fri Aug 05 2022')
    listing4 = Listing(
        user_id=2, title='Tahoe Lake House', description="Stay at this wonderful Tahoe dream house, you will not be dissapointed. One of kind home and one of a kind location.",
        address="140 Marla Ln", city="Glenbrook", state="Nevada", country="USA", price=500.00, updated_at='Fri Aug 05 2022')
    listing5 = Listing(
        user_id=2, title='South Lake Tahoe Home', description="Near Stateline and all the fun actitivies. Would be an incredible place to stay if you are looking for some fun night life! Also close to Heavenly.",
        address="4042 Sunrise Ln", city="South Lake Tahoe", state="California", country="USA", price=375.00, updated_at='Fri Aug 05 2022')
    listing6 = Listing(
        user_id=3, title='Tahoe Dreaming', description="Enjoy this stylish Tahoe Cabin during your next vacation. Blah blah blah blah blah blah blah blah blah. Blah blah blah blah blah blah blah blah blah.",
        address="4140 Cedar Ave", city="South Lake Tahoe", state="California", country="USA", price=300.00, updated_at='Fri Aug 05 2022')
    listing7 = Listing(
        user_id=3, title='Los Angeles Views', description="A masterpiece in the heart of The Beverly Hills",
        address="513 N Bedford Dr", city="Beverly Hills", state="California", country="USA", price=990.00, updated_at='Fri Aug 05 2022')
    listing8 = Listing(
        user_id=3, title="Modern Beach Home in Portland", description="Enjoy a perfect vacation in Maine",
        address="23 Maple Street", city="Portland", state="Maine", country="USA", price=290.00, updated_at='Fri Aug 05 2022')
    listing9 = Listing(
        user_id=3, title='Tiny home with a view', description="All you need for a stress free New York visit",
        address="304 Thornton Ct", city="Edgewater", state="New Jersey", country="USA", price=290.00, updated_at='Fri Aug 05 2022')    


    db.session.add(listing1)
    db.session.add(listing2)
    db.session.add(listing3)
    db.session.add(listing4)
    db.session.add(listing5)
    db.session.add(listing6)
    db.session.add(listing7)
    db.session.add(listing8)
    db.session.add(listing9)


    db.session.commit()


# Uses a raw SQL query to TRUNCATE the listings table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_listings():
    db.session.execute('TRUNCATE listings RESTART IDENTITY CASCADE;')
    db.session.commit()
