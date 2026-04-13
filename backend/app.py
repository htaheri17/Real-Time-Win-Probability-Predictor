from fastapi import FastAPI
from routers.live import router

# create main application instance
app = FastAPI()

# include all our routers from my router into the main app
app.include_router(router)

