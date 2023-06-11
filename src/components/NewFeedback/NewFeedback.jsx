import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

function NewFeedback () {

    const dispatch = useDispatch()
    const history = useHistory()
    
    const handleNewFeedback = () =>{
     dispatch({type: 'GET_NEW_FEEDBACK'})
     history.push('/feelings')


    }

    return(
        <div>
            <header>Feedback!</header>
            <h4>Thank you!</h4>
            <button onClick={handleNewFeedback}>Leave New Feedback!</button>
        </div>
    )
}
export default NewFeedback;