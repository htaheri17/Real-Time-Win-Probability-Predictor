from fastapi import FastAPI
from routers.live_ml import router_ml
from routers.live_teams import router_teams

# create main application instance
app = FastAPI()

# include all our routers from my router into the main app
app.include_router(router_ml)
app.include_router(router_teams)

