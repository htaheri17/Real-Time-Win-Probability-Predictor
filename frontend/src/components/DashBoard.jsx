import GameCard from "./GameCard";
import hashMap from "../constants/teamLogos";
import { useEffect, useState } from "react";


function DashBoard() {

  const [gameDatas, setGameDatas] = useState([]);

  useEffect(() => {
    fetch("/games")
      .then(response => {
        if(!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(data => setGameDatas(data));
    }, []);

  return (
    gameDatas.map(data =>
      <div key = {data.gameId}>
        <GameCard 
        gameId = {data.gameId}
        
        home_team_img = {hashMap.get(data.homeTeam.teamName)}
        home_team_abv = {data.homeTeam.teamTricode}
        home_team_score = {data.homeTeam.score}
        home_team_wins = {data.homeTeam.wins}
        home_team_losses = {data.awayTeam.losses}

        period = {data.period}
        game_clock = {data.gameClock}

        away_team_img = {hashMap.get(data.awayTeam.teamName)}
        away_team_abv = {data.awayTeam.teamTricode}
        away_team_score = {data.awayTeam.score}
        away_team_wins = {data.awayTeam.wins}
        away_team_losses = {data.awayTeam.losses}
        />
      </div>
    )
  )
}
export default DashBoard