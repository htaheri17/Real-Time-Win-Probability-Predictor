import { Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const data =[
    { "Time": "Q2 - 4:37", "Warriors": 73, "Lakers": 27 },
    { "Time": "Q2: 5:37", "Warriors": 75, "Lakers": 25}
] 

function GameDetail() {
    return(
        <div className = "flex flex-row">
            <div className = "flex flex-col border-2 border-transparent hover:border-[#CF236D] transition-colors duration-300 w-1/3 mt-10">
                <h1>Predictions:</h1>
                <div className = "flex">
                    <img src = "https://upload.wikimedia.org/wikipedia/sco/0/01/Golden_State_Warriors_logo.svg" height = "50" width = "50" />
                    <h1 className = "w-1/2 text-center">Warriors: 73%</h1>
                </div>
                <div className = "flex">
                    <img src = "https://upload.wikimedia.org/wikipedia/commons/3/3c/Los_Angeles_Lakers_logo.svg" height = "50" width = "50" />
                    <h1 className = "w-1/2 text-center">Lakers: 27%</h1>
                </div>
                <LineChart
                style = {{ width: '100%', aspectRatio: 1.618, maxWidth: 600, marginTop: '100px' }}
                responsive
                data = {data}
                margin = {{top: 20, right: 20, bottom: 5, left: 0}}
            >
                <XAxis dataKey = "Time" stroke = "white" />
                <YAxis width = "auto" stroke = "white" />
                <Tooltip
                    cursor = {{ stroke: "var(--color-border-2)", }}
                    contentStyle = {{ backgroundColor: 'var(--color-surface-raised)', borderColor: 'var(--color-border-2)', }}
                />
                <Legend />
                <Line type = "monotone" dataKey = "Warriors" stroke = "#22CE83" dot = {{ fill: 'var(--color-surface-base)', }} activeDot = {{ r: 8, stroke: 'var(--color-surface-base)' }} />
                <Line type = "monotone" dataKey = "Lakers" stroke = "#CF236D" dot = {{ fill: 'var(--color-surface-base)', }} activeDot = {{ r: 8, stroke: 'var(--color-surface-base)' }} />

            </LineChart>
            </div>

            <div className = "grid grid-rows-12 grid-cols-3 gap-70 grid-flow-row">
                <div className = "flex flex-col">
                    <img src = "https://upload.wikimedia.org/wikipedia/sco/0/01/Golden_State_Warriors_logo.svg"  height = "50" width = "50" />
                    <h1>GSW</h1>
                    <h2>23/45</h2>
                    <h2>43.0</h2>
                    <h2>4/12</h2>
                    <h2>33.3</h2>
                    <h2>2/5</h2>
                    <h2>40.0</h2>
                    <h2>7</h2>
                    <h2>4</h2>
                    <h2>2</h2>
                    <h2>1</h2>
                    <h2>0</h2>
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
                    <h2>Blocks</h2>
                    <h2>Turnovers</h2>
                    <h2>Fouls</h2>

                </div>
                <div className = "flex-col">
                    <img src = "https://upload.wikimedia.org/wikipedia/commons/3/3c/Los_Angeles_Lakers_logo.svg" height = "50" width = "50" />
                    <h1>LAK</h1>
                    <h2>18/50</h2>
                    <h2>43.0</h2>
                    <h2>1/5</h2>
                    <h2>20.0</h2>
                    <h2>1/10</h2>
                    <h2>10.0</h2>
                    <h2>3</h2>
                    <h2>2</h2>
                    <h2>5</h2>
                    <h2>1</h2>
                    <h2>1</h2>
                </div>
            </div>
        </div>
    )
}
export default GameDetail