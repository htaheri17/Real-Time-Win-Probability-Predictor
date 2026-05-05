import psycopg2

def get_connection():
    try:
        # make the connection to the database
        connection = psycopg2.connect(
            user = "postgres",
            password = "",
            host = "localhost",
            port = "5432",
            database = "prediction_history"
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
