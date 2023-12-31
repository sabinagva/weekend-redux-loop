// import axios from "axios"
// import { useState } from "react";

import axios from "axios"
import { useSelector } from "react-redux"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import './FeedbackResult.css'


function FeedbackResult () {
    const commentsReducer = useSelector(store => store.commentsReducer)
    const feelingsReducer = useSelector(store => store.feelingsReducer)
    const understandingReducer = useSelector(store => store.understandingReducer)
    const supportReducer = useSelector(store => store.supportReducer)
    const history = useHistory()

    //each reducer has our input due to action.payload
    //thats why we are posting values of the reducers to the server
    const saveFeedback = () => {

        axios.post("/feedbackResult",
        {
            feelings: feelingsReducer,
            comments: commentsReducer,
            understanding: understandingReducer,
            support: supportReducer
        })
        .then(response => {
            console.log('your feedback is submitted')
            alert('yay your feedback is submitted')

        })
        .catch((error) => {
            console.log('there is an error posting your feedback', error)
        })
        history.push('/Newfeedback')
    }




    return(
        <>
        <div className="result-container">
            <h1>Review Your Feedback</h1>
            {/* we are grabing all of the feedbacks from the server and rendering them 
            to feedback result page */}
            <div className="results">
                <p>Feeling: {feelingsReducer}</p>
                <p>Understanding: {understandingReducer}</p>
                <p>Support: {supportReducer}</p>
                <p>Comments: {commentsReducer}</p>
            <button onClick={saveFeedback}>Submit</button>

            </div>
        </div>
        </>

    )
}
export default FeedbackResult