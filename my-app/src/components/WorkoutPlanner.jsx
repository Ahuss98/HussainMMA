import { useState } from "react";
import Monday from "./Monday";
import Tuesday from "./Tuesday";
import Thursday from "./Thursday";
import Wednesday from "./Wednesday";
import Friday from "./Friday";
import Saturday from "./Saturday";
import Sunday from "./Sunday";

function WorkoutPlanner() {
  const [isMondayOn,setIsMondayOn] = useState(false)
  const [isTuesdayOn,setIsTuesdayOn] = useState(false)
  const [isWednesdayOn,setIsWednesdayOn] = useState(false)
  const [isThursdayOn,setIsThursdayOn] = useState(false)
  const [isFridayOn,setIsFridayOn] = useState(false)
  const [isSaturdayOn,setIsSaturdayOn] = useState(false)
  const [isSundayOn,setIsSundayOn] = useState(false)

  function handleMondayToggle () {
    setIsMondayOn(prevState => !prevState)
  }
  function handleTuesdayToggle () {
    setIsTuesdayOn(prevState => !prevState)
  }
  function handleWednesdayToggle () {
    setIsWednesdayOn(prevState => !prevState)
  }
  function handleThursdayToggle () {
    setIsThursdayOn(prevState => !prevState)
  }
  function handleFridayToggle () {
    setIsFridayOn(prevState => !prevState)
  }
  function handleSaturdayToggle () {
    setIsSaturdayOn(prevState => !prevState)
  }
  function handleSundayToggle () {
    setIsSundayOn(prevState => !prevState)
  }

  return (
    <div className="worout-page-container">
    <p className="weekdays-description">1. First things first, select the days in the week you would like to workout: </p>
    <div className="week-button-container">
    <button onClick={handleMondayToggle} className={`button ${ isMondayOn ? 'on' : 'off'}`}>
        Monday
    </button>
     <button onClick={handleTuesdayToggle} className={`button ${ isTuesdayOn ? 'on' : 'off'}`}>
        Tuesday
    </button>
    <button onClick={handleWednesdayToggle} className={`button ${ isWednesdayOn ? 'on' : 'off'}`}>
        Wednesday
    </button>
    <button onClick={handleThursdayToggle} className={`button ${ isThursdayOn ? 'on' : 'off'}`}>
        Thursday
    </button>
    <button onClick={handleFridayToggle} className={`button ${isFridayOn ? 'on' : 'off'}`}>
        Friday
    </button>
    <button onClick={handleSaturdayToggle} className={`button ${ isSaturdayOn ? 'on' : 'off'}`}>
        Saturday
    </button>
    <button onClick={handleSundayToggle} className={`button ${ isSundayOn ? 'on' : 'off'}`}>
        Sunday
    </button>
    </div>
    <p className="weekdays-description">2. Now select 2 differnt muscle groups you would like to workout for each day:</p>
    <p className="weekdays-description">Feel free to mix it up, if your just starting out,</p>
    <p className="weekdays-description">but try to make consecutive workouts different.</p>
    <p className="weekdays-tip">Cheeky tip! if you want to know more about a workout just click on it!</p>
    <div className="workout-container">
      {isMondayOn ? <Monday/> : <p className="restday">Monday : REST DAY!</p>}
      {isTuesdayOn ? <Tuesday/> : <p className="restday">Tuesday : REST DAY!</p>}
      {isWednesdayOn ? <Wednesday/> : <p className="restday">Wednesday : REST DAY!</p>}
      {isThursdayOn ? <Thursday/> : <p className="restday">Thursday : REST DAY!</p>}
      {isFridayOn ? <Friday/> : <p className="restday">Friday : REST DAY!</p>}
      {isSaturdayOn ? <Saturday/> : <p className="restday">Saturday : REST DAY!</p>}
      {isSundayOn ? <Sunday/> : <p className="restday">Sunday : REST DAY!</p>}
    </div>
    <p className="weekdays-description">3. Now go and crush it, dont worry if you dont do everything, </p>
    <p className="weekdays-description">just come back at the end of the week and go again.</p>
    <p className="weekdays-description">The key is to get started and eventually get consistent!</p>
    </div>
    
  );
}

export default WorkoutPlanner;