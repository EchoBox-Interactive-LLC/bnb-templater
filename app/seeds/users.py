from app.models import db, User

def seed_users():
    demo = User(
        username='Demo', email='demo@aa.io', avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQNvWDvQb_rCtRL-p_w329CtzHmfzfWP0FIw&usqp=CAU", password='password')
    marnie = User(
        username='Marnie', email='marnie@aa.io', avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQNvWDvQb_rCtRL-p_w329CtzHmfzfWP0FIw&usqp=CAU", password='password')
    bobbie = User(
        username='Bobbie', email='bobbie@aa.io', avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQNvWDvQb_rCtRL-p_w329CtzHmfzfWP0FIw&usqp=CAU", password='password')
    charles = User(
        username='Charles', email='charchar@aa.io', avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQNvWDvQb_rCtRL-p_w329CtzHmfzfWP0FIw&usqp=CAU", password='password')
    lilly = User(
        username='Lilly', email='lilly1000@aa.io', avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQNvWDvQb_rCtRL-p_w329CtzHmfzfWP0FIw&usqp=CAU", password='password')

    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)
    db.session.add(charles)
    db.session.add(lilly)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
