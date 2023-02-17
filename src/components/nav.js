import { NavLink } from "react-router-dom";

const nav = (props) => {
  return (
    <nav>
      <h1>Pursuit</h1>
      {props.user[0].Type === "Admin" && (
        <button onClick={props.toggleAdmin}>Administrative Tool</button>
      )}

      <ul>
        <li>
          <NavLink to="/product">Product Page</NavLink>
        </li>
        <li>
          <NavLink to="/">Landing</NavLink>
        </li>
        <li>
          <NavLink to="/discussionboard">Discussion Board</NavLink>
        </li>
        <li>
          <NavLink to="/goals">Goals</NavLink>
        </li>
        {/* <li>
          <NavLink to="/goals">My Goals</NavLink>
        </li>
        <li>
          <NavLink to="/goals">Rewards</NavLink>
        </li> */}
      </ul>
      {
        localStorage.getItem("userAuth") === null ? (
          <button id="signInDiv">Signup or Login</button>
        ) : null /* Only shows button if there's no stored user */
      }
    </nav>
  );
};

export default nav;
