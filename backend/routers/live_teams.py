from ..services.nba_live import get_today_game_ids
from ..services.nba_live import get_box_score
from ..services.nba_live import ScoreBoard
from fastapi import APIRouter, HTTPException
from json import JSONDecodeError

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

