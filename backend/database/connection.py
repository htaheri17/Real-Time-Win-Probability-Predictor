import psycopg2
from dotenv import load_dotenv
import os
load_dotenv()

USER = os.environ.get(("USER"))
PASSWORD = os.environ.get(("PASSWORD"))
HOST = os.environ.get(("HOST"))
PORT = os.environ.get(("PORT"))
DATABASE = os.environ.get(("DATABASE"))

def get_connection():
    try:
        # make the connection to the database
        connection = psycopg2.connect(
            user = USER,
            password = PASSWORD,
            host = HOST,
            port = PORT,
            database = DATABASE
        )
        print("You are now connected to prediction_history database")
        return connection
        
    # if we werent able to connect to the db than well print the error
    except (Exception, psycopg2.Error) as error:
        print(f"Error while connecting to PostgreSQL: {error}")

def close_connection(cursor, connection):
    # always close application
    if connection:
        cursor.close()
        connection.close()
        print("PostgreSQL connection is closed")