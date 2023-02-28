import { useState } from 'react'
import { saveData } from '../components/firestore'

export default function App () {
  const [question, setQuestion] = useState('')
  const [option1, setOption1] = useState('')
  const [option2, setOption2] = useState('')
  const [option3, setOption3] = useState('')
  const [answer, setAnswer] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    saveData(question, option1, option2, option3, answer)
    setQuestion('')
    setOption1('')
    setOption2('')
    setOption3('')
    setAnswer('')
  }

  const handleChange = (e) => {
    switch (e.target.name) {
      case 'question':
        setQuestion(e.target.value)
        break
      case 'option1':
        setOption1(e.target.value)
        break
      case 'option2':
        setOption2(e.target.value)
        break
      case 'option3':
        setOption3(e.target.value)
        break
      case 'answer':
        setAnswer(e.target.value)
        break
      default:
        // código a ejecutar si ninguno de los casos anteriores coincide con la expresion
        break
    }
  }

  return (
    <div className='bg-dark vh-100'>
      <form onSubmit={handleSubmit} className='container w-50'>
        <div className='mb-3'>
          <label htmlFor='input1' className='form-label text-white mt-4'>Question</label>
          <input type='text' className='form-control bg-dark text-white' autoComplete='off' name='question' onChange={handleChange} value={question} placeholder='Question' />
        </div>
        <div className='mb-3'>
          <label htmlFor='input1' className='form-label text-white'>Option1</label>
          <input type='text' className='form-control bg-dark text-white' autoComplete='off' name='option1' onChange={handleChange} value={option1} placeholder='Option 1' />
        </div>
        <div className='mb-3'>
          <label htmlFor='input1' className='form-label text-white'>Option2</label>
          <input type='text' className='form-control bg-dark text-white' autoComplete='off' name='option2' onChange={handleChange} value={option2} placeholder='Option 2' />
        </div>
        <div className='mb-3'>
          <label htmlFor='input1' className='form-label text-white'>Option3</label>
          <input type='text' className='form-control bg-dark text-white' autoComplete='off' name='option3' onChange={handleChange} value={option3} placeholder='Option 3' />
        </div>
        <div className='mb-3'>
          <label htmlFor='input1' className='form-label text-white'>Answer</label>
          <input type='text' className='form-control bg-dark text-white' autoComplete='off' name='answer' onChange={handleChange} value={answer} placeholder='Answer' />
        </div>
        <button type='submit' className='btn btn-success'>Send</button>
      </form>
    </div>
  )
}
