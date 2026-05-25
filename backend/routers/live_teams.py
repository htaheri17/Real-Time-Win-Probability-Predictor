from ..services.nba_live import get_box_score
from ..services.nba_live import ScoreBoard
from fastapi import APIRouter, HTTPException
from json import JSONDecodeError
from ..database.operations import get_predictions

router_teams = APIRouter()

@router_teams.get("/games")
async def games():
    try:
        data = ScoreBoard()
        gamesData = data.get_dict()["scoreboard"]["games"]
        return gamesData
    
    except JSONDecodeError:
        raise HTTPException(
            status_code = 404,
            detail = "Sorry there are currenly no games being played right now. Check back later :)"
        )

@router_teams.get("/games/{gameId}")
async def gameDetails(gameId):
    try:
        homeData, awayData = get_box_score(gameId)
        return {"homeTeam": homeData, "awayTeam": awayData}

    except Exception:
        raise HTTPException(
            status_code = 404,
            detail = "Sorry there is a no data for the game being played right now. Check back later :)"
        )
    
@router_teams.get("/graph/{gameId}")
async def graphDetails(gameId):
    try:
        data = get_predictions(gameId)
        res = []
        for row in data:
            res.append({"Id": row[0], "gameId": row[1], "homeTeam": row[2], "awayTeam": row[3], "homePred": row[4], "awayPred": row[5], "gameTime": row[6], "date": row[7]})
        return res
    except Exception:
        raise HTTPException(
            status_code = 404,
            detail = "Sorry there is currently no data for the prediction graph. Check back later :)"
        )