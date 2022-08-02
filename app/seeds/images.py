from app.models import db, Image


# Adds a few listings
def seed_images():
    image1 = Image(
          listing_id=1, url="https://cf-images.us-east-1.prod.boltdns.net/v1/static/5502557042001/ec3aa163-cd5c-489e-8fb3-4df2bac0ea72/8180a666-b83c-41f3-956b-f2d57c1839b3/1280x720/match/image.jpg")
    image2 = Image(
          listing_id=2, url="https://cdn.shopify.com/s/files/1/0043/8471/8938/products/164261622085018693_87180b38-8864-4843-bc05-fb80f617ef4e_812x.jpg?v=1648860022")
    image3 = Image(
          listing_id=3, url="https://s.wsj.net/public/resources/images/OB-YL787_hodNev_H_20130807151336.jpg")
    image4 = Image(
          listing_id=4, url="https://static.dezeen.com/uploads/2021/05/lookout-house-faulkner-architects-truckee-california-roundup_dezeen_2364_hero-b-852x480.jpg")
    image5 = Image(
          listing_id=5, url="http://cdn.cnn.com/cnnnext/dam/assets/191003174352-01-architectural-digest-instagram.jpg")

    db.session.add(image1)
    db.session.add(image2)
    db.session.add(image3)
    db.session.add(image4)
    db.session.add(image5)


    db.session.commit()


# Uses a raw SQL query to TRUNCATE the images table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_images():
    db.session.execute('TRUNCATE images RESTART IDENTITY CASCADE;')
    db.session.commit()
