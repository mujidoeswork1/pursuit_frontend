import "./index.css";
import { BrowserRouter, Route, Switch, Routes, Router } from "react-router-dom";
import ProductPage from "./pages/productPage/App.js";
import Nav from "./components/nav";
import { useToggle } from "./hooks/useToggle";
import LandingPage from "./pages/LandingPage/App";
import DiscussionBoard from "./pages/DiscussionBoard/app";
import Goals from "./pages/goals/Goals";
import { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";

class discussion {
  constructor(title, description, category, rating, comments) {
    this.title = title;
    this.description = description;
    this.category = category;
    this.rating = rating;
    this.comments = comments;
  }
}

function App() {
  // Google API Callback
  function handleCallbackResponse(resp) {
    const userObj = jwtDecode(resp.credential);
    console.log(userObj);
    localStorage.setItem("userAuth", userObj);

    document.getElementById("signInDiv").hidden = true;
  }

  //Google API Logging in
  // useEffect(() => {
  //   /*global google*/
  //   google.accounts.id.initialize({
  //     client_id: "61845827701-co8703m0c8ns5c47umtkqlkcs5c7di6l.apps.googleusercontent.com",
  //     callback: handleCallbackResponse
  //   })
  //   google.accounts.id.renderButton(
  //     document.getElementById('signInDiv'),
  //     {
  //       theme: 'outline', size:'large'
  //     }
  //   );
  // }, []);

  const user = [{ ID: "an*s7s8da", Type: "Admin" }];

  const discussionBoard = new discussion(
    "Taela",
    "Hey guys, welcome to my free gift card giveaway. To enter, all you need to do is subscribe and hit that like button. Without further adoo, let's get into the video!",
    "Football",
    3.0,
    [
      { author: "Bee Bee", comment: "Hey Hey Hey" },
      { author: "fsafsadsa Bee", comment: "Hey wasd Hey" },
      { author: "Bee Bee", comment: "Hey Hey Hey" },
    ]
  );
  const discussionBoard2 = new discussion(
    "Taela",
    "I want to get",
    "Football",
    3.0,
    [
      { author: "Bee Bee", comment: "ddd Hey Hey" },
      { author: "Bee eeeeee", comment: "Hey dsa Hey" },
      { author: "Bee Bee", comment: "Hey Hey Hey" },
    ]
  );
  const discussions = [discussionBoard, discussionBoard2];

  console.log(localStorage.getItem("userAuth"));

  const { status: showAdmin, toggleStatus: toggleAdmin } = useToggle();

  return (
    <BrowserRouter>
      <Nav user={user} />

      <Routes>
        <Route
          path="/product"
          element={
            <ProductPage
              user={user}
              showAdmin={showAdmin}
              toggleAdmin={toggleAdmin}
            />
          }
        ></Route>
        <Route path="/" element={<LandingPage />}></Route>
        <Route
          path="/discussionboard"
          element={<DiscussionBoard list={discussions} />}
        ></Route>
        <Route path={"/goals"} element={<Goals />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
