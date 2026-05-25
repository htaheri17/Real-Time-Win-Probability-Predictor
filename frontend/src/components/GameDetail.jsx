import { Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import hashMap from "../constants/teamLogos";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";



function GameGraph() {
    const { gameId } = useParams();
    const [gameGraph, setGameGraph] = useState([]);

    useEffect(() => {
        fetch(`/graph/${gameId}`)
            .then(response => {
                if(!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then(data => setGameGraph(data))
    }, [gameId])

    const gameGraphData = gameGraph.map(row => ({"Time": row.gameTime, [row.homeTeam]: row.homePred, [row.awayTeam]: row.awayPred}));

    return(
        <div>
                <LineChart
                style = {{ width: '100%', aspectRatio: 1.618, maxWidth: 600, marginTop: '100px' }}
                responsive
                data = {gameGraphData}
                margin = {{top: 20, right: 20, bottom: 5, left: 0}}
            >
                <XAxis dataKey = "Time" stroke = "white" />
                <YAxis width = "auto" stroke = "white" />
                <Tooltip
                    cursor = {{ stroke: "var(--color-border-2)", }}
                    contentStyle = {{ backgroundColor: 'var(--color-surface-raised)', borderColor: 'var(--color-border-2)', }}
                />
                <Legend />
                <Line type = "monotone" dataKey = {gameGraph[0]?.homeTeam ?? "Home Team"} stroke = "#22CE83" dot = {{ fill: 'var(--color-surface-base)', }} activeDot = {{ r: 8, stroke: 'var(--color-surface-base)' }} />
                <Line type = "monotone" dataKey = {gameGraph[0]?.awayTeam ?? "Away Team"} stroke = "#CF236D" dot = {{ fill: 'var(--color-surface-base)', }} activeDot = {{ r: 8, stroke: 'var(--color-surface-base)' }} />

            </LineChart>
        </div>
        )
}


function GameDetail() {
    const { gameId } = useParams();

    const [gameDetail, setGameDetail] = useState({});

    useEffect(() => {
        fetch(`/games/${gameId}`)
            .then(response => {
                if(!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then(data => setGameDetail(data));
        }, [gameId])

    return(
        Object.keys(gameDetail).length > 1 ? 
        <div className = "flex flex-row">
            <div className = "flex flex-col border-2 border-transparent hover:border-[#CF236D] transition-colors duration-300 w-1/3 mt-10">
                <h1>Predictions:</h1>
                <div className = "flex">
                    <img src = {hashMap.get(gameDetail.homeTeam.teamName)} height = "50" width = "50" />
                    <h1 className = "w-1/2 text-center">{gameDetail.homeTeam.teamCity + " " + gameDetail.homeTeam.teamName}: 73%</h1>
                </div>
                <div className = "flex">
                    <img src = {hashMap.get(gameDetail.awayTeam.teamName)} height = "50" width = "50" />
                    <h1 className = "w-1/2 text-center">{gameDetail.awayTeam.teamCity + " " + gameDetail.awayTeam.teamName}: 27%</h1>
                </div>

            <GameGraph />
            </div>

            <div className = "grid grid-rows-12 grid-cols-3 gap-70 grid-flow-row">
                <div className = "flex flex-col">
                    <img src = {hashMap.get(gameDetail.homeTeam.teamName)}  height = "50" width = "50" />
                    <h1>{gameDetail.homeTeam.teamTricode}</h1>
                    <h2>{gameDetail.homeTeam.fieldGoals}</h2>
                    <h2>{gameDetail.homeTeam.fieldGoalsPercentage}</h2>
                    <h2>{gameDetail.homeTeam.threePointers}</h2>
                    <h2>{gameDetail.homeTeam.threePointersPercentage}</h2>
                    <h2>{gameDetail.homeTeam.freeThrows}</h2>
                    <h2>{gameDetail.homeTeam.freeThrowsPercentage}</h2>
                    <h2>{gameDetail.homeTeam.rebounds}</h2>
                    <h2>{gameDetail.homeTeam.steals}</h2>
                    <h2>{gameDetail.homeTeam.assists}</h2>
                    <h2>{gameDetail.homeTeam.blocks}</h2>
                    <h2>{gameDetail.homeTeam.turnovers}</h2>
                </div>

                <div className = "flex-col mt-13 p">
                    <h1>TEAM STATS</h1>
                    <h2>FieldGoals</h2>
                    <h2>Field Goal %</h2>
                    <h2>3 pointers</h2>
                    <h2>3 pointer %</h2>
                    <h2>Free Throws</h2>
                    <h2>Free Throw %</h2>
                    <h2>Rebounds</h2>
                    <h2>Steals</h2>
                    <h2>Assists</h2>
                    <h2>Blocks</h2>
                    <h2>Turnovers</h2>
                    <h2>Fouls</h2>

                </div>
                <div className = "flex-col">
                    <img src = {hashMap.get(gameDetail.awayTeam.teamName)} height = "50" width = "50" />
                     <h1>{gameDetail.awayTeam.teamTricode}</h1>
                    <h2>{gameDetail.awayTeam.fieldGoals}</h2>
                    <h2>{gameDetail.awayTeam.fieldGoalsPercentage}</h2>
                    <h2>{gameDetail.awayTeam.threePointers}</h2>
                    <h2>{gameDetail.awayTeam.threePointersPercentage}</h2>
                    <h2>{gameDetail.awayTeam.freeThrows}</h2>
                    <h2>{gameDetail.awayTeam.freeThrowsPercentage}</h2>
                    <h2>{gameDetail.awayTeam.rebounds}</h2>
                    <h2>{gameDetail.awayTeam.steals}</h2>
                    <h2>{gameDetail.awayTeam.assists}</h2>
                    <h2>{gameDetail.awayTeam.blocks}</h2>
                    <h2>{gameDetail.awayTeam.turnovers}</h2>
                </div>
            </div>
        </div>
        : <div>Loading...</div>
    )
}
export default GameDetail;