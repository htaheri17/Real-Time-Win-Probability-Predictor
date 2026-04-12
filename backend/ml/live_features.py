import pandas as pd

def parse_clock(clock, period):
    clock = clock.split("M")
    clock[0] = clock[0][2:]
    clock[1] = clock[1][:-4]

    clock_seconds_left = int(clock[0]) * 60 + int(clock[1])

    if period < 5:
        seconds_before_period = (period - 1) * 720
        seconds = seconds_before_period + (720 - clock_seconds_left)
    else:
        seconds_before_period = 2880 + (period - 5) * 300
        seconds = seconds_before_period + (300 - clock_seconds_left)

    return seconds


action_types = [
"actionType_Ejection", 
"actionType_Foul",
"actionType_Free Throw",
"actionType_Instant Replay",
"actionType_Jump Ball",      
"actionType_Made Shot",
"actionType_Missed Shot",
"actionType_Rebound",
"actionType_Substitution",
"actionType_Timeout",
"actionType_Turnover",
"actionType_Violation"]

def live_data_fe(data):
    df = pd.DataFrame(data)

    df["seconds"] = df.apply(lambda row: parse_clock(row["clock"], row["period"]), axis = 1)
    
    df = df.drop(["clock"], axis = 1)

    df = pd.get_dummies(df, columns = ["actionType"], dtype = int)

    for action in action_types:
        if action not in df:
            df[action] = 0

    df["location"] = df["location"].map({"h": 2, "v": 1})
    df["location"] = df["location"].fillna(0)

    return df
