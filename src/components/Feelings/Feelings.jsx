import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import './Feelings.css'
function Feelings () {
    const [feelingsInput, setFeelingsInput] =useState('');
    const dispatch = useDispatch()
    const history = useHistory()

    const handleNextBtn = (event) => {
        event.preventDefault()
        history.push('/understanding')
        dispatch({type: 'GET_FEELINGS', payload: feelingsInput})
        setFeelingsInput('')

    }

    return(

        <div className='Feelings'>
      <header className='Feelings-header'>
        <h1 className='Feelings-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
        </header>
        <h1><b>How are you feeling today?</b></h1>
        <form>
            <label>Feelings?  </label>
            <input
            type="number"
            id='Feelings-input'
            value={feelingsInput}
            onChange={(event) => setFeelingsInput(event.target.value)}

            /> 
            <button onClick={handleNextBtn}>Next</button>
        </form>
        </div>
    )
}
export default Feelings