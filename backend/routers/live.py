# import our websocket and apirouter classes
from fastapi import WebSocket
from fastapi import APIRouter

# create router instance like a cointainer that holds all instances and like a mini app that groups related endpoints together
router = APIRouter()

# this tells fastapi that a client connected via ws and run the function below
@router.websocket("/ws")
# defining the function that handles the connection
async def websocket_endpoint(websocket: WebSocket):
    # establish the handshake connection with the client
    await websocket.accept():
    # after accepting the connection we now need a loop that runs the entire game
    while True:
        # recieve the play data from the client
        

        # run the data through our make predictions function

        # send back the probability win