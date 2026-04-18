function GameCard(props) {
    return (
        <div className = "flex justify-between">
            <div className = "flex flex-col">
                <div className = "flex items-center">
                    <img src = {props.home_team_img} alt = "home team logo" height = "75" width = "75"></img>
                    <h1>{props.home_team_score}</h1>
                </div>
                <h2>{props.home_team_abv}</h2>
                <p>({props.home_team_wins} - {props.home_team_loses})</p>
            </div>
            
            <div className = "flex flex-col">
                <h1>VS</h1>
                <h3>Q{props.period} - {props.game_clock}</h3>
            </div>

            <div className = "flex flex-col">
                <div>
                    <img src = {props.away_team_img} alt = "away team logo"  height = "75" width = "75"></img>
                    <h1>{props.away_team_score}</h1>
                </div>
                <h2>{props.away_team_abv}</h2>
                <p>({props.away_team_wins} - {props.away_team_loses})</p>
            </div>
        </div>
    )
}

export default GameCard