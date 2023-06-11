import { useState } from 'react'
import { useDispatch } from 'react-redux'
import './Comments.css'
function Comments () {
    const [commentsInput, setCommentsInput] = useState()
    const commentsReducer = (store => store.commentsReducer)
    const dispatch = useDispatch()

    const handleNextBtn = (event) => {
        event.preventDefault()
        dispatch({type: 'GET_COMMENTS', payload: commentsInput})
        setCommentsInput('')


    }

    return(

        <div className='Comments'>
      <header className='Comments-header'>
        <h1 className='Comments-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
        </header>
        <h1><b>Any Comments you want to leave?</b></h1>
        <form>
            <label>Comments?  </label>
            <input
            type = "text"
            id = 'Comments-input'
            value = {commentsInput}
            onChange={(event) => setCommentsInput(event.target.value)}
            /> 
            <button onClick={handleNextBtn}>Next</button>
        </form>
        </div>
    )
}
export default Comments