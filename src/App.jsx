import { useState } from 'react'
import QuestionCard from './QuestionCard'
import './App.css'
import shuffle from './utilis'
import ScoreCard from './ScoreCard'

export default function App(){
  const [quizzes, setQuizzes] = useState(null)
  const [loaded,setLoaded] = useState(false)
  const [startQuiz,setStartQuiz] = useState(false)
  const [currentAnswers,setCurrentAnswers] = useState(null)
  let [currentQuestionIndex,setCurrentQuestionIndex] = useState(0);
  const [endGame,setEndGame] = useState(false)
  
  const [totalScore,setTotalScore] = useState(0)
  const [correctAnswer,setCorrectAnswer] = useState(null)
  const [pickedAnswer,setPickedAnswer] = useState(null)
  
  const pickAnswer = (answer)=>{
    setPickedAnswer(answer)
    if(answer === correctAnswer){
      setTotalScore(prevScore=>prevScore+1)
    }
    console.log(answer);
  }

  const navigateNext = ()=>{
    // other system : flushSync
    currentQuestionIndex = currentQuestionIndex+1;
    const validQuestionIndex = currentQuestionIndex<quizzes.length;
    if(validQuestionIndex){
      setCurrentQuestionIndex(currentQuestionIndex)
      const question = quizzes[currentQuestionIndex]
      setCurrentAnswers(shuffle(question))
      // reset picked answer
      setPickedAnswer(null)
      setCorrectAnswer(question.correct_answer)
    } else {
      setEndGame(true)
    }
  }

  const resetQuiz = ()=>{
    setQuizzes(null);
    setLoaded(false);
    setCorrectAnswer(null);
    setEndGame(false);
    setPickedAnswer(null);
    setTotalScore(0);
    setCurrentQuestionIndex(0);
    setStartQuiz(false);
  }

  const fetchQuiz = async () =>{
    const res = await fetch ('https://opentdb.com/api.php?amount=5&category=18&difficulty=easy&type=multiple')
    const {results} = await res.json();
    setQuizzes(results);
    const initialQuestion = results[currentQuestionIndex]
    //getting all answers
    const answers = [initialQuestion.correct_answer, ...initialQuestion.incorrect_answers]
    setCurrentAnswers( shuffle(initialQuestion))
    setCorrectAnswer(initialQuestion.correct_answer)
    setStartQuiz(true)
    setLoaded(true)
    // console.log(results);
  }

  return (
    <>
      {endGame && <ScoreCard totalScore={totalScore}resetQuiz={resetQuiz}/>}
      
      {endGame && <p>It's time to show the result</p>}      
      {!startQuiz && (
           <div>
              <button onClick={fetchQuiz}>Start Quiz</button>
            </div>) }
      <div className='container'>
        {loaded && !endGame && <QuestionCard quiz={quizzes[currentQuestionIndex]} 
                                 currentAnswers={currentAnswers}
                                 currentQuestionIndex={currentQuestionIndex}
                                 quizzes={quizzes}
                                 navigateNext={navigateNext}
                                 pickAnswer={pickAnswer}
                                 pickedAnswer={pickedAnswer}
                                 correctAnswer={correctAnswer} />}
      </div>
    </>
  )
}