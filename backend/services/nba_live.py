from nba_api.live.nba.endpoints.scoreboard import ScoreBoard
from nba_api.live.nba.endpoints.playbyplay import PlayByPlay

scoreboard = ScoreBoard()

def get_today_game_ids(scoreboard):
    string_game_ids = scoreboard.get_dict()["scoreboard"]["games"]
    game_ids = []
    for i in range(len(string_game_ids)):
        game_ids.append(string_game_ids[i]["gameId"])
    return game_ids

def get_live_play_by_play(game_id):
    dataset= PlayByPlay(game_id).actions
    our_data = {}
    our_data["period"] = dataset[-1]["period"]
    our_data["scoreHome"] = dataset[-1]["scoreHome"]
    our_data["scoreAway"] = dataset[-1]["scoreAway"]
    our_data["location"] = dataset[-1]["location"]
    our_data["clock"] = dataset[-1]["clock"]
    our_data["actionType"] = dataset[-1]["actionType"]
    return our_data




