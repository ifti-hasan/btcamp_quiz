export default function ScoreCard({totalScore,resetQuiz}){
    return (
        <div>
            <h3>Result page</h3>
            <p>Score {totalScore}</p>
            <button onClick={resetQuiz}>Reset Quiz</button>

        </div>
    )
}