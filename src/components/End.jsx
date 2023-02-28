export default function End ({ hours, minutes, seconds, correct, questions, setActiveButton, setCorrect, setQuestionIndex, setTime }) {
  const handleRetry = () => {
    setActiveButton(null)
    setCorrect(0)
    setQuestionIndex(0)
    setTime(0)
  }

  return (
    <div className='container'>
      <div className='d-flex flex-column justify-content-center align-items-center'>
        <h1 className='text-center me-3 mt-4 text-danger'>Results</h1>
        <span className='h5 mt-4'>Time: {`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`}</span>
        <h2 className='d-flex'>Corrects:&nbsp;&nbsp;<p className={correct > questions.length / 2 ? 'text-success' : 'text-danger'}>{correct}</p></h2>
        {correct > questions.length / 2
          ? <h3 className='text-success'>Congratulations, do you want to try again?</h3>
          : <h3 className='text-info'>Sorry, remember practice makes perfect</h3>}
        <button onClick={handleRetry} className={correct > questions.length / 2 ? 'btn btn-success' : 'btn btn-danger'}>Retry</button>
      </div>
    </div>
  )
}
