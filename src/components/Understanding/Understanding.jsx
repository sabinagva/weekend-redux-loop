import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import './Understanding.css'
function Understanding () {
    const[understandingInput, setUnderstandingInput] = useState('');
    const dispatch = useDispatch()
    const history = useHistory()
    
    const handleNextBtn = (event) => {
        event.preventDefault()
        history.push('/support')
        dispatch({type: 'GET_UNDERSTANDING', payload: understandingInput})
        setUnderstandingInput('')
    }


    return(


        <div className='Understanding'>
      <header className='Understanding-header'>
        <h1 className='Understanding-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
        </header>
        <h1><b>How well are you understanding the context?</b></h1>
        <form>
            <label>Understanding?  </label>
            <input
            type="text"
            id='Understanding-input'
            value={understandingInput}
            onChange={(event) => setUnderstandingInput(event.target.value)}

            /> 
            <button onClick={handleNextBtn}>Next</button>

        </form>
        </div>
    )
}
export default Understanding