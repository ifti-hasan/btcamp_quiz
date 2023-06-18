
export default function AnswerCard({correctAnswer,pickedAnswer,answer,pickAnswer}){
    let isRightAnswer = pickedAnswer && answer === correctAnswer;
    let isWrongAnswer = pickedAnswer && answer === pickedAnswer && pickedAnswer !== correctAnswer
    let correctClass = isRightAnswer ?'correct-answer':'';
    let wrongClass = isWrongAnswer = isWrongAnswer?'incorrect-answer':'';
    let disableedClass = pickedAnswer && 'disabled-answer'
    return (
        <div className={`quiz-answer ${correctClass} ${wrongClass} ${disableedClass}`} onClick={()=>pickAnswer(answer)}>{answer}</div>
    )
}

// const correct = chosenAnswer && answer === correctAnswer === chosenAnswer;
// const incorrect = chosenAnswer && answer === correctAnswer !== chosenAnswer;
// const deactivated = chosenAnswer === true;

// console.log(correct);
// console.log(incorrect);
// console.log(deactivated);

// const correctClass = `${correct} ? 'correct':'' `;
// const incorrectClass = `${incorrect ? 'incorrect':''`;
// const deactivatedClass = {deactivated ? 'deactivated':''};
