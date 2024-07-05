import { useState, useEffect } from "react";
import { API_KEY } from "/secret.js"; 

function Wednesday() {
  const [selectedExercise1, setSelectedExercise1] = useState('');
  const [selectedExercise2, setSelectedExercise2] = useState('');
  const [exerciseData1, setExerciseData1] = useState(null);
  const [exerciseData2, setExerciseData2] = useState(null);
  const [shuffledExercises1, setShuffledExercises1] = useState([]);
  const [shuffledExercises2, setShuffledExercises2] = useState([]);
  const [visibleTextId, setVisibleTextId] = useState(null);
  const [visibleTextId2, setVisibleTextId2] = useState(null);

  useEffect(() => {
    if (selectedExercise1) {
      fetchExercise1(selectedExercise1);
    }
  }, [selectedExercise1]);

  useEffect(() => {
    if (selectedExercise2) {
      fetchExercise2(selectedExercise2);
    }
  }, [selectedExercise2]);

  function handleChange1(event) {
    setSelectedExercise1(event.target.value);
  }

  function handleChange2(event) {
    setSelectedExercise2(event.target.value);
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

  function fetchExercise2(muscle) {
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
        setExerciseData2(data);
        setShuffledExercises2(getRandomElement(data, 4));
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
  function handleButtonClick2(id) {
    setVisibleTextId2(visibleTextId2 === id ? null : id);
  }
  
  return (
    <>
      <h3>Wednesday Workout</h3>
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
      <select name="dropdown2" id="dropdown2" onChange={handleChange2}>
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
              <button onClick={() => handleButtonClick2(index)} className="exercise-button" >
                {exercise.name}
              </button>
              {visibleTextId2 === index && (
                <p>
                  {exercise.instructions}
                </p>
              )}
            </li>
            ))}
          </ul>
        </div>
      )}
      {exerciseData2 && (
        <div className="exercise-results">
          <h2>{selectedExercise2}</h2>
          <ul>
            {shuffledExercises2.map((exercise, index) => (
              <li key={index}>
                <button onClick={() => handleButtonClick(index)} className="exercise-button" >
                  {exercise.name}
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
    </>
  );
}

export default Wednesday;
