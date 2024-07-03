import { useState } from "react";
function Monday(){
    const [newExercise1, setNewExercise1] = useState('');
    const [newExercise2, setNewExercise2] = useState('');
    const [exerciseData, setExerciseData] = useState(null); // To store the fetched exercise data

    function handleSubmit(event) {
        event.preventDefault();
        fetchExercise();
      }
    
      function fetchExercise() {
        const apiKey = ''; // Replace with your actual API key
        const url = `https://api.api-ninjas.com/v1/exercises?muscle=${newExercise1}`;
    
        fetch(url, {
          method: 'GET',
          headers: {
            'X-Api-Key': apiKey
          }
        })
        .then(response => response.json())
        .then(data => {
          console.log(data);
          setExerciseData(data);
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

return (
<>
    <h3> monday workout</h3>
    <form className="MondayForm" onSubmit={handleSubmit}>
        <input type="text"
        className="Monday-input"
        placeholder="what is the exercise?"
        value={newExercise1} 
        onChange={(e) => setNewExercise1(e.target.value)}
        />
        <button type="submit">fetch exercise</button>
        {exerciseData && (
            <div className="exercise-results">
                <h2>Exercise Results</h2>
                <ul>
                {getRandomElement(exerciseData, 4).map((exercise, index) => (
                 <li key={index}> {exercise.name}</li>
                ))}
            </ul>
            </div>
        )}
    </form>
      
</>

)
}
export default Monday