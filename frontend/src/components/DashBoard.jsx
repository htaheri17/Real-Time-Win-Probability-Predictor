import GameCard from "./GameCard";

function DashBoard() {
    return (
        <GameCard 
        home_team_img = "https://upload.wikimedia.org/wikipedia/sco/0/01/Golden_State_Warriors_logo.svg"
        home_team_abv = "GSW"
        home_team_score = "50"
        home_team_wins = "73"
        home_team_loses = "9"

        period = "2"
        game_clock = "4:37"

        away_team_img = "https://upload.wikimedia.org/wikipedia/commons/3/3c/Los_Angeles_Lakers_logo.svg"
        away_team_abv = "LAL"
        away_team_score = "42"
        away_team_wins = "40"
        away_team_loses = "42"
      />
    )
}
export default DashBoard