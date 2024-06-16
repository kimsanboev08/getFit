let workoutArr = [];

function addWorkout(newName, newBodyPart, newSets, newReps, newWeight) {
    let newWorkout = {
        name: newName,
        bodyPart: newBodyPart,
        sets: newSets,
        reps: newReps,
        weight: newWeight
    };
    workoutArr.push(newWorkout);
}

function editWorkout(index, newName, newBodyPart, newSets, newReps, newWeight) {
    let newVar = [newName, newBodyPart, newSets, newReps, newWeight];
    let workout = workoutArr[index];
    let i = 0;
    for (let key in workout) {
        workout[key] = workout[key] !== newVar[i] ? newVar[i] : workout[key];
        i++;
    }
}