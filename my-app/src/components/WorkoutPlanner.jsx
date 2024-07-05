import { useState } from "react";
import Monday from "./Monday";

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
    <>
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
    <>
      {isMondayOn ? <Monday/> : null}
    </>
    {
    /*
    <button onClick={handleToggle} className={`button ${ isOn ? 'on' : 'off'}`}>
        {isOn ? 'SATURDAY' : 'saturday'}
    </button>
    <button onClick={handleToggle} className={`button ${ isOn ? 'on' : 'off'}`}>
        {isOn ? 'SUNDAY' : 'sunday'}
    </button> */}
    </>
    
  );
}

export default WorkoutPlanner;