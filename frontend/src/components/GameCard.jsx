import { Link } from 'react-router';
function GameCard(props) {
    return (
        <Link to = "/game/testgameid">
            <div className = "flex justify-between items-center p-6 bg-[#232323] shadow-xl/30 rounded-xl py-8 px-8 m-8 w-5/6 mx-auto hover:border border-[#22CE83]">
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
                    <div className = "flex items-center">
                        <h1>{props.away_team_score}</h1>
                        <img src = {props.away_team_img} alt = "away team logo"  height = "75" width = "75"></img>
                    </div>
                    <h2>{props.away_team_abv}</h2>
                    <p>({props.away_team_wins} - {props.away_team_loses})</p>
                </div>
            </div>
        </Link>
    )
}
export default GameCard