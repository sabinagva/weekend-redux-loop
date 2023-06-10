import './Support.css'
function Support () {

    return(

        <div className='Support'>
      <header className='Support-header'>
        <h1 className='Support-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
        </header>
        <h1><b>How are you being supported today?</b></h1>
        <form>
            <label>Support?  </label>
            <input
            type="text"
            id='Support-input'
            /> 
            <button>Next</button>
        </form>
        </div>
    )
}
export default Support