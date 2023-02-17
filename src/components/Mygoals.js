import React from "react";

export const Mygoals = (props) => {
  const { Goals } = props;
  return (
    <div>
      <div className="glz">
        <h1>My Goals</h1>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {Goals.map((goal) => (
            <li key={goal.id} className="goal-box">
              <h2 className="goal-name">{goal.name}</h2>
              <p>{goal.description}</p>
              <p>{goal.reward}</p>
              <button
                className="challenge-btn"
                // onClick={() => handleClick(goal)}
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
