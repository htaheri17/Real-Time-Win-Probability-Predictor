# import our websocket and apirouter classes
from fastapi import WebSocket
from fastapi import APIRouter
# import our functions 
from services.nba_live import get_today_game_ids, get_live_play_by_play, ScoreBoard
from ml.live_features import parse_clock, live_data_fe
from ml.predict import make_predictions

# create router instance like a cointainer that holds all instances and like a mini app that groups related endpoints together
router = APIRouter()

# this tells fastapi that a client connected via ws and run the function below
@router.websocket("/ws")
# defining the function that handles the connection
async def websocket_endpoint(websocket: WebSocket):
    # establish the handshake connection with the client
    await websocket.accept()
    # after accepting the connection we now need a loop that runs the entire game
    while True:
        scoreboard = ScoreBoard()
        # recieve the game id from the api
        game_id = get_today_game_ids(scoreboard)
        if len(game_id) > 0:
            # recieve the play by play data using the game id
            data = get_live_play_by_play(game_id)

            # feature engineer the data so its the same as we trained our model
            fe_data = live_data_fe(data)

            # make predictions on the data and return the probability
            pred = make_predictions(fe_data)

            # gets the probability from our model and pushes to the client while waiting until the send is complete
            # turn it into a string since send_text only accepts str
            await websocket.send_text(str(pred))

        else:
            await websocket.send_text("Sorry there are currenly no games being played right now. Chech back later!")
