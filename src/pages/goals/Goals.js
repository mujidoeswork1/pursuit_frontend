import React from "react";
import { useState, useEffect } from "react";
// import { useContext } from "react";
import "../../components/goalComponents/Goals.css";
import "../../index.css";
import Sidebar from "../../components/goalComponents/Sidebar";
import "../../components/goalComponents/Sidebar.css";
// import { GlobalContext } from "../../context";
import { Allgoals } from "../../components/Allgoals";
import { Mygoals } from "../../components/Mygoals";
import { Rewards } from "../../components/Rewards";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from 'axios';

export default function Goals() {
  const goals = [
    {
      id: 1,
      name: "Goal 1,",
      description: "Goal description 1",
      reward: "free reward for goal 1",
      category: "Exercise",
    },
    {
      id: 2,
      name: "Goal 2,",
      description: "Goal description 2",
      reward: "free reward for goal 2",
      category: "Steps",
    },
    {
      id: 3,
      name: "Goal 3,",
      description: "Goal description 3",
      reward: "free reward for goal 3",
      category: "Event Goals",
    },
    {
      id: 4,
      name: "Goal 4,",
      description: "Goal description 4",
      reward: "free reward for goal 4",
      category: "Yoga & Medication",
    },
  ];
  const [Goals, setGoals] = useState([]);
  const [MyGoals, setMyGoals] = useState([]);

  const [showAllGoals, setShowAllGoals] = useState(true);
  const [showMyGoals, setShowMyGoals] = useState(false);
  const [showRewards, setShowRewards] = useState(false);

  

  const fetchGoals = async () => {
    fetch("http://localhost:8080/goal", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((result) => setGoals(result));

    // GET REQUEST TO FETCH THE ADDED MYGAOL
    fetch("http://localhost:8080/myGoal", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((result) => setMyGoals(result));
  };

  useEffect(() => {
    fetchGoals();
    console.log("hello");
  }, []);

  // const [myGoals, setMyGoals] = useContext(GlobalContext);
  // console.log("mygoals:", goals);

  // const handleClick = (goal) => {
  //   setMyGoals([myGoals, goal]);
  // };

  //   const handleClick = (id) => {
  //     console.log(`Button clicked for goal with id: ${id}`);
  //   };

  return (
    <>
      <div className="allgoals">
        <Sidebar
          Goals={Goals}
          setGoals={setGoals}
          goalsarr={goals}
          showAllGoals={showAllGoals}
          setShowAllGoals={setShowAllGoals}
          showMyGoals={showMyGoals}
          setShowMyGoals={setShowMyGoals}
          showRewards={showRewards}
          setShowRewards={setShowRewards}
          fetchGoals={fetchGoals}
        />
        {showAllGoals && <Allgoals Goals={Goals} MyGoals={MyGoals} heading="All Goals" setMyGoals={setMyGoals}/>}
        {showMyGoals && <Mygoals Goals={MyGoals} heading="My Goals" />}
        {showRewards && <Rewards />}
      </div>
      <div>
        {/* <Nav user={user} /> */}

        {/* <Routes> */}
        {/* <Route path="/Allgoals">
          <Allgoals Goals={Goals} />
        </Route> */}

        {/* <Route path="/Mygoals" element={<Mygoals Goals={Goals} />}></Route> */}
        {/* </Routes> */}
      </div>
    </>
  );
}
