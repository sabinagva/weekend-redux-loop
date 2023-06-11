// import axios from "axios"
// import { useState } from "react";

import axios from "axios"
import { useSelector } from "react-redux"


function FeedbackResult () {
    const commentsReducer = useSelector(store => store.commentsReducer)
    const feelingsReducer = useSelector(store => store.feelingsReducer)
    const understandingReducer = useSelector(store => store.understandingReducer)
    const supportReducer = useSelector(store => store.supportReducer)

    const saveFeedback = () => {

        axios.post("/feebackResult",
        {
            feelings: feelingsReducer,
            comments: commentsReducer,
            understanding: understandingReducer,
            support: supportReducer
        })
        .then(response => {
            console.log('your feedback is submited')
            alert('yay your feedback is submited')

        })
        .catch((error) => {
            console.log('there is an error posting your feedback', error)
        })
    }




    return(
        <>
        <h1>Review Your Feedback</h1>
        {/* we are grabing all of the feedbacks from the server and rendering them 
        to feedback result page */}
        <div>
            <p>Feeling: {feelingsReducer}</p>
            <p>Understanding: {understandingReducer}</p>
            <p>Support: {supportReducer}</p>
            <p>Comments: {commentsReducer}</p>
        </div>
        <button onClick={saveFeedback}>Submit</button>
        </>

    )
}
export default FeedbackResult