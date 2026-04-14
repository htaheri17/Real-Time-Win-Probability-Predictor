import websockets
import asyncio

# async function since websockets use await
async def test():
    # opens a websocket connection to the server, async means connection is closed when done
    async with websockets.connect("ws://127.0.0.1:8000/ws") as websocket:
        # wait for the server to send a message and await pauses until we recieve it
        response = await websocket.recv()
        # prints what the server sent back that was saved in response
        print(f"Recieved: {response}")

# since test is async we cant call it directly thats why we use asyncio to start the event loop
asyncio.run(test())