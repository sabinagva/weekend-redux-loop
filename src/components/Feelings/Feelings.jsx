import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import './Feelings.css'

//use history is used so we can got to a different page right away

//dispatch will make it so when we can connect store and dispatch of feeling to 
//render and be functional on feedback result page where we 
//render feelings (and other components)

//use state is for user inputs
function Feelings () {
    const dispatch = useDispatch()
    const history = useHistory()
    const [feelingsInput, setFeelingsInput] =useState('');
    
    

    const handleNextBtn = (event) => {
        event.preventDefault()
        history.push('/understanding')
        
        if (!feelingsInput) {
            alert('please put something in')
        }
        else {
        dispatch({type: 'GET_FEELINGS', payload: feelingsInput})

        }
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
            min = '1'
            max= '5'
            onChange={(event) => setFeelingsInput(event.target.value)}

            /> 
            <button onClick={handleNextBtn}>Next</button>
        </form>
        </div>
    )
}
export default Feelings