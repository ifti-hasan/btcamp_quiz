import React,{useState} from 'react'
import AnswerCard from './AnswerCard'

export default function questionCard({pickedAnswer,correctAnswer,pickAnswer,navigateNext,quiz,currentAnswers,currentQuestionIndex,quizzes}){

    return (
        <div className='question-card'>
            <p>Question : {currentQuestionIndex+1}/{quizzes.length}</p>
            <h3>{quiz.question}</h3>
            {currentAnswers.map( (answer,i)=> <AnswerCard key={i} answer={answer} pickAnswer={pickAnswer}correctAnswer={correctAnswer}pickedAnswer={pickedAnswer} />)}

            <button onClick={navigateNext}>Next</button>
        </div>
    )
}

























// export default function questionCard({quizzes}){
//     const [value,setvalue] = useState('');
//     function handleChange(e){
//         const {name,value} = e.target;
//         console.log(`${name}:${value}`);

//         setvalue(prevValue=>{
//             return ([name] = value)
//         })
//     }

//     const shuffleArray = array => {
//         for (let i = array.length - 1; i > 0; i--) {
//           const j = Math.floor(Math.random() * (i + 1));
//           const temp = array[i];
//           array[i] = array[j];
//           array[j] = temp;
//         }
//         return array;
//       }

//     return (
//         <>
//         {quizzes.map( (quiz,index)=>{


//             const {correct_answer,incorrect_answers,question} = quiz;
//             const answers = [correct_answer, ...incorrect_answers]
//             const shuffledAnswers = shuffleArray(answers);
//             return (
//                 <form key={index}>
//                     <legend>{question}</legend>
//                     <input type="radio"id='answer1'name='answer1'value={value}onChange={handleChange()} />
//                     <label htmlFor="answer1">{shuffledAnswers[0]}</label>
//                     <br />

//                     <input type="radio"id='answer2'name='answer2'value={value}onChange={handleChange} />
//                     <label htmlFor="answer2">{shuffledAnswers[1]}</label>
//                     <br />

//                     <input type="radio"id='answer3'name='answer3'value={value}onChange={handleChange} />
//                     <label htmlFor="answer3">{shuffledAnswers[2]}</label>
//                     <br />

//                     <input type="radio"id='answer4'name='answer4'value={value}onChange={handleChange} />
//                     <label htmlFor="answer4">{shuffledAnswers[3]}</label>
//                     <br />
//                     <br />
//                 </form>

//             )
//         })}
//         </>
//     )
// }