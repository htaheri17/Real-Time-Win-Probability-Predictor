from nba_api.live.nba.endpoints.scoreboard import ScoreBoard
from nba_api.live.nba.endpoints.playbyplay import PlayByPlay
from nba_api.live.nba.endpoints.boxscore import BoxScore

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

def get_box_score(game_id):
    data = BoxScore(game_id).get_dict()
    home_data = {}
    away_data = {}

    home_data["fieldGoals"] = str(data["game"]["homeTeam"]["statistics"]["fieldGoalsMade"]) + "/" + str(data["game"]["homeTeam"]["statistics"]["fieldGoalsAttempted"])
    home_data["fieldGoalsPercentage"] = data["game"]["homeTeam"]["statistics"]["fieldGoalsPercentage"]
    home_data["threePointers"] = str(data["game"]["homeTeam"]["statistics"]["threePointersMade"]) + "/" + str(data["game"]["homeTeam"]["statistics"]["threePointersAttempted"])
    home_data["threePointersPercentage"] = data["game"]["homeTeam"]["statistics"]["threePointersPercentage"]
    home_data["freeThrows"] = str(data["game"]["homeTeam"]["statistics"]["freeThrowsMade"]) + "/" + str(data["game"]["homeTeam"]["statistics"]["freeThrowsAttempted"])
    home_data["freeThrowsPercentage"] = data["game"]["homeTeam"]["statistics"]["freeThrowsPercentage"]
    home_data["rebounds"] =  data["game"]["homeTeam"]["statistics"]["reboundsTotal"]
    home_data["steals"] =  data["game"]["homeTeam"]["statistics"]["steals"]
    home_data["assists"] =  data["game"]["homeTeam"]["statistics"]["assists"]
    home_data["blocks"] =  data["game"]["homeTeam"]["statistics"]["blocks"]
    home_data["turnovers"] =  data["game"]["homeTeam"]["statistics"]["turnoversTotal"]
    home_data["fouls"] =  data["game"]["homeTeam"]["statistics"]["foulsTeam"]

    away_data["fieldGoals"] = str(data["game"]["awayTeam"]["statistics"]["fieldGoalsMade"]) + "/" + str(data["game"]["awayTeam"]["statistics"]["fieldGoalsAttempted"])
    away_data["fieldGoalsPercentage"] = data["game"]["awayTeam"]["statistics"]["fieldGoalsPercentage"]
    away_data["threePointers"] = str(data["game"]["awayTeam"]["statistics"]["threePointersMade"]) + "/" + str(data["game"]["awayTeam"]["statistics"]["threePointersAttempted"])
    away_data["threePointersPercentage"] = data["game"]["awayTeam"]["statistics"]["threePointersPercentage"]
    away_data["freeThrows"] = str(data["game"]["awayTeam"]["statistics"]["freeThrowsMade"]) + "/" + str(data["game"]["awayTeam"]["statistics"]["freeThrowsAttempted"])
    away_data["freeThrowsPercentage"] = data["game"]["awayTeam"]["statistics"]["freeThrowsPercentage"]
    away_data["rebounds"] =  data["game"]["awayTeam"]["statistics"]["reboundsTotal"]
    away_data["steals"] =  data["game"]["awayTeam"]["statistics"]["steals"]
    away_data["assists"] =  data["game"]["awayTeam"]["statistics"]["assists"]
    away_data["blocks"] =  data["game"]["awayTeam"]["statistics"]["blocks"]
    away_data["turnovers"] =  data["game"]["awayTeam"]["statistics"]["turnoversTotal"]
    away_data["fouls"] =  data["game"]["awayTeam"]["statistics"]["foulsTeam"]

    return home_data, away_data




