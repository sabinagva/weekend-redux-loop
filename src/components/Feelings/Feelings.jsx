import './Feelings.css'
function Feelings () {

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
            type="text"
            id='Feelings-input'
            /> 
            <button>Next</button>
        </form>
        </div>
    )
}
export default Feelings