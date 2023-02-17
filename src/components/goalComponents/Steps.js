import React from "react";

export default function Steps(){

    const step_goals = [
        { id: 1, text: 'step Goal 1' },
        { id: 2, text: 'step Goal 2' },
        { id: 3, text: 'step-Goal 3' },
      ];
    
      const handleClick = (id) => {
        console.log(`Button clicked for goal with id: ${id}`);
      };
    
      return (
        <ul>
          {step_goals.map(goal => (
            <li key={goal.id}>
              {goal.text}
              <button onClick={() => handleClick(goal.id)}>Button</button>
            </li>
          ))}
        </ul>
      );
    };
