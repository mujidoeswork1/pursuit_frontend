import React, { useState } from "react";

export const Rewards = () => {
  const rewards = [
    {
      id: 1,
      name: "reward 1,",
      description: "reward description 1",
      reward: "free reward for goal 1",
      //   category: "Exercise",
    },
    {
      id: 2,
      name: "reward 2,",
      description: "reward description 2",
      reward: "free reward for goal 2",
      //   category: "Steps",
    },
    {
      id: 3,
      name: "reward 3,",
      description: "reward description 3",
      reward: "free reward for goal 3",
      //   category: "Event Goals",
    },
    {
      id: 4,
      name: "reward 4,",
      description: "reward description 4",
      reward: "free reward for goal 4",
      //   category: "Yoga & Medication",
    },
  ];
  const [Rewards, setRewards] = useState(rewards);
  return (
    <div className="glz">
      <h1>Rewards</h1>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {Rewards.map((goal) => (
          <li key={goal.id} className="goal-box">
            <h2 className="goal-name">{goal.name}</h2>
            <p>{goal.description}</p>
            <p>{goal.reward}</p>
            <button
              className="challenge-btn"
              // onClick={() => handleClick(goal)}
            >
              {Rewards.find((g) => g.id === goal.id) ? "Added" : "Challenge"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
