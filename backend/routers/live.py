# import our websocket and apirouter classes
from fastapi import WebSocket
from fastapi import APIRouter
# import our functions 
from services.nba_live import get_today_game_ids, get_live_play_by_play, ScoreBoard, get_box_score
from ml.live_features import parse_clock, live_data_fe
from ml.predict import make_predictions

# create router instance like a cointainer that holds all instances and like a mini app that groups related endpoints together
router = APIRouter()

scoreboard = ScoreBoard()
# recieve the game ids from the api
game_ids = get_today_game_ids(scoreboard)
    
# this tells fastapi that a client connected via ws and run the function below
@router.websocket("/ws/{game_id}")
# defining the function that handles the connection
async def websocket_endpoint(websocket: WebSocket, game_id):
    
    # establish the handshake connection with the client
    await websocket.accept()
    if len(game_ids) > 0:
        # after accepting the connection we now need a loop that runs the entire game
        while True:
            # recieve the play by play data using the game id
            pbp_data = get_live_play_by_play(game_id)

            # feature engineer the data so its the same as we trained our model
            fe_data = live_data_fe(pbp_data)

            # make predictions on the data and return the probability
            pred = make_predictions(fe_data)

            # since our we want box scores to be constantly updated we have to add it here
            home, away = get_box_score(game_id)
            data = {"prediction": pred, "home": home, "away": away}

            # gets the probability from our model and pushes to the client while waiting until the send is complete
            await websocket.send_json(data)
    else:   
        await websocket.send_text("Sorry there are currenly no games being played right now. Chech back later :)")