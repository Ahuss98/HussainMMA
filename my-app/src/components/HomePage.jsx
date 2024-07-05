import { useState, useEffect } from "react";
import { API_KEY } from "/secret.js"; 

function HomePage(){
    const [selectedExercise1, setSelectedExercise1] = useState('');
    const [exerciseData1, setExerciseData1] = useState(null);
    const [shuffledExercises1, setShuffledExercises1] = useState([]);
    const [visibleTextId, setVisibleTextId] = useState(null);

  
    useEffect(() => {
      if (selectedExercise1) {
        fetchExercise1(selectedExercise1);
      }
    }, [selectedExercise1]);
  
    function handleChange1(event) {
      setSelectedExercise1(event.target.value);
    }
  
  
    function fetchExercise1(muscle) {
      const apiKey = API_KEY; // Replace with your actual API key
      const url = `https://api.api-ninjas.com/v1/exercises?muscle=${muscle}`;
  
      fetch(url, {
        method: 'GET',
        headers: {
          'X-Api-Key': apiKey
        }
      })
        .then(response => response.json())
        .then(data => {
          setExerciseData1(data);
          setShuffledExercises1(getRandomElement(data, 4));
        })
        .catch(error => console.error('Error:', error));
    }
  
  
    function getRandomElement(arr, numElements) {
      const shuffledArr = arr.slice();
      for (let i = shuffledArr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArr[i], shuffledArr[j]] = [shuffledArr[j], shuffledArr[i]];
      }
      return shuffledArr.slice(0, numElements);
    }
  
    function handleButtonClick(id) {
      setVisibleTextId(visibleTextId === id ? null : id);
    }
    
    return (
        <>
        <div className="homepage-description">
        <p>Here at HussainFitness we focus on improving lifes, changionf your life starts with the first step. and we are here to help you. alot of the time the first step can be the hardest and at HussainFitness we equip you with the rescources to make that first step easier.</p>
        <p>
            We have developed a system here at HussainFitenss that allows you to create a weekley workout ruitine with ease. all you have to do is select the days you would like to worout and the exercises you would like to do on that selected day which we display for you. we make it that easy for you. so you can take that all so important first step.
        </p>
        <p>
            If you dont feel like making a weekly plan and only want to make a workout for today, or would like to play around with this workout maker
        </p>
        </div>
        <div className="workout-container">
        <h3>Your Workout</h3>
      <select name="dropdown1" id="dropdown1" onChange={handleChange1}>
        <option value="">Select a muscle</option>
        <option value="biceps">Biceps</option>
        <option value="triceps">Triceps</option>
        <option value="forearms">Forearms</option>
        <option value="chest">Chest</option>
        <option value="neck">Neck</option>
        <option value="traps">Traps</option>
        <option value="lats">Lats</option>
        <option value="middle_back">Middle back</option>
        <option value="lower_back">Lower back</option>
        <option value="abdominals">Abdominals</option>
        <option value="abductors">Abductors</option>
        <option value="calves">Calves</option>
        <option value="glutes">glutes</option>
        <option value="hamstrings">Hamstrings</option>
        <option value="quadriceps">Quadriceps</option>
      </select>
      {exerciseData1 && (
        <div className="exercise-results">
          <h2>{selectedExercise1}</h2>
          <ul>
            {shuffledExercises1.map((exercise, index) => (
              <li key={index}>
              <button className="exercise-button" onClick={() => handleButtonClick(index)} >
                {exercise.name} || 3x10-12
              </button>
              {visibleTextId === index && (
                <p>
                  {exercise.instructions}
                </p>
              )}
            </li>
            ))}
          </ul>
        </div>
      )}
        </div>
        </>
        
    )
}
export default HomePage

