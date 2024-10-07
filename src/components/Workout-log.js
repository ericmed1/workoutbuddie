import '../css/Workout-log.css';
import React from 'react';
import { useState } from 'react';


function Workoutlog(){
    const [workouts, setWorkouts] = useState([])
    const [workoutname, setWorkoutname] = useState()
    const [sets,setSets] = useState()
    const [reps,setReps] = useState()
    const [weight, setWeight] = useState()
    // this event handler makes it so when the user click the add workout button it will then call this function
    // and this function will take in the info the user inputed and if everything is inputed the function
    // will make a newworkout with all the needed fields and then will add the newworkout into the 
    // workouts array and add that new row into the table
    const handleAddWorkout = () => {
        if(workoutname && sets > 0 && reps > 0 && weight > 0){
            const newWorkout = {
                workoutname,
                sets,
                reps,
                weight
            };
            setWorkouts([...workouts, newWorkout]);
            setWorkoutname("Enter Workout name");
            setReps(0);
            setSets(0);
            setWeight(0);

        }
    }
    // here on click this function is called to delete the row desired 
    const handleDelete = (index) =>{
        const updatedWorkouts = workouts.filter((_,i) => i !== index);
        setWorkouts(updatedWorkouts);
    }
    return(
        
        <div className='userInfo'>
            <h1>
                Workout Log
            </h1>
            <div className='inputs'>
                <input
                    type = "text"
                    value={workoutname}
                    onChange={(e) => setWorkoutname(e.target.value)} 
                    placeholder="Enter Workout Name"
                /> 
                <input
                    type = "number"
                    value={sets}
                    onChange={(e) => setSets(parseInt(e.target.value, 10))}
                    placeholder="Enter Sets"
                />
                <input
                    type = "number"
                    value={reps}
                    onChange={(e) => setReps(parseInt(e.target.value, 10))}
                    placeholder="Enter Reps"
                />
                <input
                    type = "number"
                    value ={weight}
                    onChange={(e) => setWeight(parseInt(e.target.value, 10))}
                    placeholder="Enter Weight"
                    />
                <button onClick={handleAddWorkout}>Add</button>
            </div>

            <table className='tableInfo'>
                <thead className='firstRow'>
                    <tr>
                        <th>Workout Name</th>
                        <th>Sets</th>
                        <th>Reps</th>
                        <th>Weight</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {workouts.map((workout,index) => (
                        <tr key={index}>
                            <td>{workout.workoutname}</td>
                            <td>{workout.sets}</td>
                            <td>{workout.reps}</td>
                            <td>{workout.weight}</td>
                            <td>
                                <button onClick={() => handleDelete(index)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>  
            </table>
        </div>
    );
}

export default Workoutlog;