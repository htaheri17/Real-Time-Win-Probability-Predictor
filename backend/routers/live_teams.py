from ..services.nba_live import get_today_game_ids
from ..services.nba_live import get_live_play_by_play
from ..services.nba_live import get_box_score
from ..services.nba_live import ScoreBoard
from fastapi import APIRouter, HTTPException
from json import JSONDecodeError

router_teams = APIRouter()

@router_teams.get("/game-ids")
async def game_ids():
    try:
        data = ScoreBoard()
        game_ids = get_today_game_ids(data)
        return game_ids
    except JSONDecodeError:
        raise HTTPException(
            status_code = 404,
            detail = "Sorry there are currenly no games being played right now. Check back later :)"
        )

@router_teams.get("/game-pbp/{game_id}")
async def game_card(game_id):
    try:
        info = get_live_play_by_play(game_id)
        return info
    except Exception:
        raise HTTPException(
            status_code = 404,
            detail = "Sorry currently game card is getting wrong info will fix! :)"
        )