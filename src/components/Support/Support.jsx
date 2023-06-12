import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import './Support.css'
function Support () {
    

const [supportInput, setSupportInput] = useState('')
const dispatch = useDispatch()
const history = useHistory()

const handleNextBtn = (event) => {
    event.preventDefault()
    if (!supportInput) {
        alert('please put something in')
    }
    else {
    dispatch({type: 'GET_SUPPORT', payload: supportInput})
    history.push('/comments')
        
    }
    setSupportInput('')

}
    return(

        <div className='Support'>
      <header className='Support-header'>
        <h1 className='Support-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
        </header>
        <h1><b>How are you being supported today?</b></h1>
        <form>
            <label>Support?  </label>
            <input
            type="number"
            value={supportInput}
            id='Support-input'
            required
            min = '1' 
            max= '5'
            onChange={(event) => setSupportInput(event.target.value)}

            /> 
            <button onClick={handleNextBtn}>Next</button>
        </form>
        </div>
    )
}
export default Support