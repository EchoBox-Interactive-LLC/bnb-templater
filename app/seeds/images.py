from app.models import db, Image


# Adds a few listings
def seed_images():
      image1 = Image(
            listing_id=1, url="https://cf-images.us-east-1.prod.boltdns.net/v1/static/5502557042001/ec3aa163-cd5c-489e-8fb3-4df2bac0ea72/8180a666-b83c-41f3-956b-f2d57c1839b3/1280x720/match/image.jpg")
      image27 = Image(
            listing_id=1, url="https://cdn.pixabay.com/photo/2016/06/24/10/47/house-1477041__340.jpg")
      image28 = Image(
            listing_id=1, url="https://cdn.pixabay.com/photo/2015/10/20/18/57/furniture-998265_1280.jpg")
      image29 = Image(
            listing_id=1, url="https://cdn.pixabay.com/photo/2017/03/28/12/10/chairs-2181947_1280.jpg")
      image30 = Image(
            listing_id=1, url="https://cdn.pixabay.com/photo/2016/09/19/17/20/home-1680800_1280.jpg")
      image2 = Image(
            listing_id=2, url="https://cdn.shopify.com/s/files/1/0043/8471/8938/products/164261622085018693_87180b38-8864-4843-bc05-fb80f617ef4e_812x.jpg?v=1648860022")
      image31 = Image(
            listing_id=2, url="https://cdn.pixabay.com/photo/2017/03/22/17/39/kitchen-2165756_1280.jpg")
      image32 = Image(
            listing_id=2, url="https://cdn.pixabay.com/photo/2016/12/30/07/59/kitchen-1940174_1280.jpg")
      image33 = Image(
            listing_id=2, url="https://cdn.pixabay.com/photo/2017/08/06/15/31/door-2593482_1280.jpg")
      image34 = Image(
            listing_id=2, url="https://cdn.pixabay.com/photo/2016/04/18/08/50/kitchen-1336160_1280.jpg")
      image3 = Image(
            listing_id=3, url="https://cdn.pixabay.com/photo/2017/08/01/12/43/kitchen-2565105_1280.jpg")
      image35 = Image(
            listing_id=3, url="https://cdn.pixabay.com/photo/2017/08/01/12/43/kitchen-2565105_1280.jpg")
      image36 = Image(
            listing_id=3, url="https://cdn.pixabay.com/photo/2015/05/31/11/24/tap-791172_1280.jpg")
      image37 = Image(
            listing_id=3, url="https://cdn.pixabay.com/photo/2020/11/24/11/36/bedroom-5772286_1280.jpg")
      image38 = Image(
            listing_id=3, url="https://cdn.pixabay.com/photo/2020/05/25/17/54/library-5219747_1280.jpg")
      image4 = Image(
            listing_id=4, url="https://static.dezeen.com/uploads/2021/05/lookout-house-faulkner-architects-truckee-california-roundup_dezeen_2364_hero-b-852x480.jpg")
      image39 = Image(
            listing_id=4, url="https://cdn.pixabay.com/photo/2016/11/18/13/02/bed-1834327_1280.jpg")
      image40 = Image(
            listing_id=4, url="https://cdn.pixabay.com/photo/2022/07/06/09/41/shutters-7304728_1280.jpg")
      image41 = Image(
            listing_id=4, url="https://cdn.pixabay.com/photo/2020/12/16/00/10/home-5835289_1280.jpg")
      image42 = Image(
            listing_id=4, url="https://cdn.pixabay.com/photo/2022/04/14/13/36/bedroom-7132435_1280.jpg")
      image5 = Image(
            listing_id=5, url="https://cdn.onekindesign.com/wp-content/uploads/2019/12/Rustic-Contemporary-A-Frame-Todd-Gordon-Mather-Architect-01-1-Kindesign.jpg")
      image43 = Image(
            listing_id=5, url="https://cdn.pixabay.com/photo/2018/06/14/21/15/bedroom-3475656_1280.jpg")
      image44 = Image(
            listing_id=5, url="https://cdn.pixabay.com/photo/2021/12/25/13/08/real-estate-6893060_1280.jpg")
      image45 = Image(
            listing_id=5, url="https://cdn.pixabay.com/photo/2022/01/04/05/29/kitchen-6914223_1280.jpg")
      image46 = Image(
            listing_id=5, url="https://cdn.pixabay.com/photo/2017/02/24/12/19/apartment-2094666_1280.jpg")
      image6 = Image(
            listing_id=6, url="https://images2.dwell.com/photos/6063391372700811264/6960606578859773952/original.jpg?auto=format&q=35&w=1760")
      image7 = Image(
            listing_id=6, url="https://images2.dwell.com/photos/6063391372700811264/6960606578636521472/original.jpg?auto=format&q=35&w=1920")
      image8 = Image(
            listing_id=6, url="https://images2.dwell.com/photos/6063391372700811264/6960606578885816320/original.jpg?auto=format&q=35&w=1920")
      image9 = Image(
            listing_id=6, url="https://images2.dwell.com/photos/6063391372700811264/6960606578555686912/original.jpg?auto=format&q=35&w=1920")
      image10 = Image(
            listing_id=6, url="https://www.yankodesign.com/images/design_news/2022/08/rocky-cabin/rock_cabin_yanko_design_01.jpg")      
      image11 = Image(
          listing_id=7, url="https://images2.dwell.com/photos/6388426360393183232/6710725544614907904/original.jpg?auto=format&q=35&w=1920")
      image12 = Image(
          listing_id=7, url="https://images2.dwell.com/photos/6388426360393183232/6710727028838793216/original.jpg?auto=format&q=35&w=1920")
      image13 = Image(
          listing_id=7, url="https://images2.dwell.com/photos/6388426360393183232/6710726119247089664/original.jpg?auto=format&q=35&w=1920")
      image14 = Image(
          listing_id=7, url="https://images2.dwell.com/photos/6388426360393183232/6710726793933574144/original.jpg?auto=format&q=35&w=1920")
      image15 = Image(
          listing_id=7, url="https://images2.dwell.com/photos/6388426360393183232/6710726325308084224/original.jpg?auto=format&q=35&w=1920")
      image16 = Image(
          listing_id=7, url="https://images.dwell.com/photos/6063391372700811264/6143768332550578176/large.jpg")      
      image17 = Image(
          listing_id=8, url="https://images2.dwell.com/photos/6942315682404519936/6948196258694057984/original.jpg?auto=format&q=35&w=1920")    
      image18 = Image(
          listing_id=8, url="https://images2.dwell.com/photos/6942315682404519936/6948194722747629568/original.jpg?auto=format&q=35&w=1920")
      image19 = Image(
          listing_id=8, url="https://images2.dwell.com/photos/6942315682404519936/6948185169737924608/original.jpg?auto=format&q=35&w=1920")
      image20 = Image(
          listing_id=8, url="https://images2.dwell.com/photos/6942315682404519936/6948184495836049408/original.jpg?auto=format&q=35&w=1920")
      image21 = Image(
          listing_id=8, url="https://a0.muscache.com/im/pictures/d03d9889-b6c3-42f5-ad84-2c6c4b7a57b2.jpg?im_w=2560")
      image22 = Image(
          listing_id=9, url="https://images2.dwell.com/photos/6488407258118639616/6572030182743273472/original.jpg?auto=format&q=35&w=1920")
      image23 = Image(
          listing_id=9, url="https://images2.dwell.com/photos/6488407258118639616/6572030140772483072/original.jpg?auto=format&q=35&w=1920")
      image24 = Image(
          listing_id=9, url="https://images2.dwell.com/photos/6488407258118639616/6572030153657384960/original.jpg?auto=format&q=35&w=1920")
      image25 = Image(
          listing_id=9, url="https://images2.dwell.com/photos/6488407258118639616/6572030162906484736/original.jpg?auto=format&q=35&w=1920")
      image26 = Image(
          listing_id=9, url="https://images.milledcdn.com/2019-12-08/O1siF4jxClB_hni7/ofHMnFT7eMjW.jpg")    
      

      db.session.add(image1)
      db.session.add(image2)
      db.session.add(image3)
      db.session.add(image4)
      db.session.add(image5)
      db.session.add(image6)
      db.session.add(image7)
      db.session.add(image8)
      db.session.add(image9)
      db.session.add(image10)
      db.session.add(image11)
      db.session.add(image12)
      db.session.add(image13)
      db.session.add(image14)
      db.session.add(image15)
      db.session.add(image16)
      db.session.add(image17)
      db.session.add(image18)
      db.session.add(image19)
      db.session.add(image20)
      db.session.add(image21)
      db.session.add(image22)
      db.session.add(image23)
      db.session.add(image24)
      db.session.add(image25)
      db.session.add(image26)
      db.session.add(image27)
      db.session.add(image28)
      db.session.add(image29)
      db.session.add(image30)
      db.session.add(image31)
      db.session.add(image32)
      db.session.add(image33)
      db.session.add(image34)
      db.session.add(image35)
      db.session.add(image36)
      db.session.add(image37)
      db.session.add(image38)
      db.session.add(image39)
      db.session.add(image40)
      db.session.add(image41)
      db.session.add(image42)
      db.session.add(image43)
      db.session.add(image44)
      db.session.add(image45)
      db.session.add(image46)


      db.session.commit()


# Uses a raw SQL query to TRUNCATE the images table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_images():
    db.session.execute('TRUNCATE images RESTART IDENTITY CASCADE;')
    db.session.commit()
