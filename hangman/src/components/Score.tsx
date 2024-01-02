import './Score.css'

type ScoreProps = {
	wins: number,
	losses: number
}

export function Score({wins, losses}: ScoreProps){

	return (
		<div className='container'>
    <div>
        <h3>Wins</h3>
        <div className='box'>{wins}</div>
    </div>
    <div>
        <h3>Losses</h3>
        <div className='box'>{losses}</div>
    </div>
</div>
	)
}