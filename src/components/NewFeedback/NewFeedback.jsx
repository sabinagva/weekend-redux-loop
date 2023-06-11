import { useDispatch } from "react-redux";

function NewFeedback () {

    const dispatch = useDispatch()
    
    const handleNewFeedback = () =>{
     dispatch({type: GET_NEW_FEEDBACK})


    }

    return(
        <div>
            <header>Feedback!</header>
            <h4>Thank you!</h4>
            <button onClick={handleNewFeedback}>Leave New Feedback!</button>
        </div>
    )
}
export default Newfeedback;