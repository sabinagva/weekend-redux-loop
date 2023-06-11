import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import './NewFeedback.css'


function NewFeedback () {

    const dispatch = useDispatch()
    const history = useHistory()
    
    const handleNewFeedback = () =>{
     dispatch({type: 'GET_NEW_FEEDBACK'})
     history.push('/feelings')


    }

    return(
        <div className="feedbackContainer">
            
            <header>Feedback!</header>
            
                <div className="button-container">
                    <h3 className="text">Thank you!</h3>
                    <button className="button" onClick={handleNewFeedback}>Leave New Feedback!</button>
                </div>
        </div>
    )
}
export default NewFeedback;