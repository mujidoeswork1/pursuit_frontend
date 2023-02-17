import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar(props) {
  const {
    Goals,
    setGoals,
    goalsarr,
    showAllGoals,
    setShowAllGoals,
    showMyGoals,
    setShowMyGoals,
    showRewards,
    setShowRewards,
  } = props;
  const handleButtonClick = (category) => {
    // fetch all Goals from database
    const filtered = goalsarr.filter((goal) => goal.category === category);
    setGoals(filtered);
    // console.log(first)
  };
  // console.log(goals);
  return (
    <aside className="sidebar">
      <input
        className="search"
        type="text"
        id="search"
        name="search"
        placeholder="Search"
      />

      <div className="sidebar-Menu">
        <Link
          className="goal-icon"
          to={"/goals"}
          onClick={() => {
            setShowAllGoals(true);
            setShowMyGoals(false);
            setShowRewards(false);
          }}
        >
          ALL GOALS
        </Link>
        <Link
          className="goal-icon"
          to={"/goals"}
          onClick={() => {
            setShowAllGoals(false);
            setShowMyGoals(true);
            setShowRewards(false);
          }}
        >
          MY GOALS
        </Link>
        <Link
          className="goal-icon"
          to={"/goals"}
          onClick={() => {
            setShowAllGoals(false);
            setShowMyGoals(false);
            setShowRewards(true);
          }}
        >
          REWARDS
        </Link>
      </div>

      <h2 style={{ textAlign: "center" }}>GOALS Categories</h2>

      <div className="goal-catergory-menu">
        {/* <Link className="gc-menu-icon" to={'/'}>All Goals</Link> */}
        <button
          className="gc-menu-icon"
          onClick={() => handleButtonClick("Event Goals")}
        >
          Event Goals
        </button>
        <button
          className="gc-menu-icon"
          onClick={() => handleButtonClick("Exercise")}
        >
          Exercise
        </button>
        <button
          className="gc-menu-icon"
          onClick={() => handleButtonClick("Steps")}
        >
          Steps
        </button>
        <button
          className="gc-menu-icon"
          onClick={() => handleButtonClick("Yoga & Medication")}
        >
          Yoga & Medication
        </button>
      </div>
    </aside>
  );
}
