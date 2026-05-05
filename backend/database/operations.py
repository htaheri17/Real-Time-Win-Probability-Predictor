from connection import get_connection, close_connection

# insert the data into the table we need it for the graph to see the past data 
def insert_predictions(game_id, home_team, away_team, home_prediction, away_prediction, game_time):
    conn = get_connection()
    cursor = conn.cursor()
    query = "INSERT INTO game_predictions (game_id, home_team, away_team, home_prediction, away_prediction, game_time) VALUES(%s, %s, %s, %s, %s, %s);"
    cursor.execute(query, (game_id, home_team, away_team, home_prediction, away_prediction, game_time)
    )
    conn.commit()
    close_connection()

# get the predictions from the table so were able to display the data 
def get_predictions(game_id):
    conn = get_connection()
    cursor = conn.cursor()
    query = "SELECT * FROM game_predictions WHERE gameid = (%s) ORDER BY date ASC;"
    cursor.execute(query, (game_id,))
    close_connection()
    return cursor.fetchall()




    
