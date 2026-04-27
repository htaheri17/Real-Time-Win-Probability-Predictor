import GameCard from "./components/GameCard.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <div className = "bg-[#1A1A1A] min-h-screen">
      <Navbar />
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
    </div>
  )
}
export default App