import { useEffect, useState } from 'react'
import styles from '../App.module.css'

export default function Questionnaire ({ hours, minutes, seconds, activeButton, setActiveButton, setCorrect, correct, setQuestionIndex, questionIndex, time, setTime, questions }) {
  const [alert, setAlert] = useState(false)

  const handleNext = (e) => {
    if (activeButton) {
      setQuestionIndex(questionIndex + 1)
      setActiveButton(false)
      const text = activeButton.textContent
      const answer = questions[questionIndex].answer
      if (text === answer) {
        setCorrect(correct + 1)
      }
    } else {
      setAlert(true)
      setTimeout(function () {
        setAlert(false)
      }, 1000)
    }
  }
  const handleSelect = (e) => {
    const botonClickeado = e.target

    if (activeButton) {
      activeButton.classList.remove(styles.selected)
    }
    botonClickeado.classList.add(styles.selected)
    setActiveButton(botonClickeado)
  }
  const chronometer = () => {
    questionIndex === questions.length ? console.log('end') : setTime(time + 1)
  }

  useEffect(() => {
    const intervalId = setInterval(chronometer, 1000)
    return () => clearInterval(intervalId)
  })

  return (
    <div className='container'>
      <div className='d-flex justify-content-center align-items-center'>
        <h1 className='text-center me-3 mt-4'>Javascript quiz</h1>
        <span className='h5 mt-4'>{`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`}</span>
      </div>
      <h2 className='text-center display-6 my-3'>
        {questions[questionIndex]
          ? questions[questionIndex].question
          : 'Charging.....'}
      </h2>
      {alert
        ? <h2 className='text-danger'>Please select an option</h2>
        : ''}
      <div className='d-flex flex-column align-items-center mt-4'>
        {questions[questionIndex]?.choises.map(q => (
          <div key={q}>
            <div>
              <div className='mb-4'>
                <button className={styles.option} onClick={handleSelect}>
                  {q || 'Charging.....'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='d-flex flex-column align-items-center'>
        <button className='btn btn-success mt-2' onClick={handleNext}>Next</button>
        <p className='h4 mt-4'>{questionIndex + 1}/{questions.length}</p>
      </div>
    </div>
  )
}
