import GameCard from "./components/GameCard.jsx";
import Navbar from "./components/Navbar.jsx";
import { Routes, Route } from "react-router-dom";
import GameDetail from "./components/GameDetail.jsx";
import DashBoard from "./components/DashBoard.jsx";

function App() {
  return (
    <div className = "bg-[#1A1A1A] min-h-screen">
      <Navbar />
      <Routes>
        <Route path = "/testgameid" element = { <GameDetail /> } />
        <Route path = "/" element = { <DashBoard /> } />
      </Routes>
    </div>
  )
}
export default App