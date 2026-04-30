import { Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const data =[
    { "Time": "Q2 - 4:37", "Warriors": 73, "Lakers": 27 },
    { "Time": "Q2: 5:37", "Warriors": 75, "Lakers": 25}
] 

function GameDetail() {
    return(
        <div>
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
    )
}
export default GameDetail