import React from "react";
import axios from 'axios';

export const Allgoals = (props) => {
  const { Goals, MyGoals, heading, setMyGoals } = props;

  const handleClick = async (goal) => {

    if(MyGoals.some((g)=> g.goal.goalId === goal.goalId)){
      return;
    }
    const date = new Date();

    const setDateY = date.getFullYear();
    const dueDateY = setDateY;
    const setDateM = date.getMonth();
    const dueDateM = setDateM + 1;
    const setDateD = date.getDate();
    const dueDateD = setDateD;

    const goalObj = {
      setDate: `${setDateY}-0${setDateM}-${setDateD}`,
      dueDate: `${dueDateY}-0${dueDateM}-${dueDateD}`,
      goal,
    };

    try {
      // POST REQUEST TO ADD INTO MYGOAL
      await axios.post(
        "http://localhost:8080/myGoal",
        JSON.stringify(goalObj),
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      // abduurrafaykhawer20@gmail.com

      // GET REQUET TO FETCH THE ADDED MYGOAL
      const { data } = await axios.get("http://localhost:8080/myGoal");
      setMyGoals(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="glz">
        <h1>{heading}</h1>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {Goals.map((goal) => (
            <li key={goal?.myGoalId} className="goal-box">
              <h2 className="goal-name">{goal.goalName}</h2>
              <p>{goal.goalDescription}</p>
              <p>{goal.reward}</p>
              <button
                className="challenge-btn"
                onClick={() => handleClick(goal)}
              >
                {Goals.find((g) => g.id === goal.id) ? "Added" : "Challenge"}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
