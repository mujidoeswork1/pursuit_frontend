import {Routes, Route, BrowserRouter as Router} from "react-router-dom"
import App from "./App";
import MyGoals from "./components/goalComponents/MyGoals";
import Steps from "./components/goalComponents/Steps";
import Exercise from "./components/goalComponents/Exercise";
import Yoga from "./components/goalComponents/Yoga";
import Goals from "./"


export default function AppRouter(){
  return (
  <Router>
    <Routes>
        

        <Route path = {'/'} element = {<App/>}>          
          <Route path={'/mygoals'} element={<MyGoals/>}/>   
          <Route index element  = {<Goals/>}/>       
        </Route>

        <Route path = {'/'} element = {<App/>}>
          {/* <Route index element  = {<Goals/>}/> */}
          <Route path={'/yoga'} element={<Yoga/>}/>
          <Route path={'/exercise'} element={<Exercise/>}/>
          <Route path={'/steps'} element={<Steps/>}/>     
          <Route path={'/event-goals'} element={<Goals/>}/>
        </Route>

    </Routes>
    </Router>
  )
}