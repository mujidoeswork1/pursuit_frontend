import React from "react";

export const Mygoals = (props) => {
  const { Goals } = props;

  const handleClick = () => {
    
  }
  return (
    <div>
      <div className="glz">
        <h1>My Goals</h1>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {Goals?.length > 1 && Goals.map(goal => (
            <li key={goal?.myGoalId} className="goal-box">
              <h2>{goal.goal.goalName}</h2>
              <p>{goal.goal.goalDescription}</p>
              <p>{goal.goal.reward}</p>
              <button className="progress-btn" onClick={handleClick}>
                In-progress
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
