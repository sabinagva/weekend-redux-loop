import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import './NewFeedback.css'


function NewFeedback () {

    const dispatch = useDispatch()
    const history = useHistory()
    
    //this doesn't have payload because we are not really carrying anything 
    //to the store
    //we are just defining our type so we can erase the array
    //when button is clicked
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