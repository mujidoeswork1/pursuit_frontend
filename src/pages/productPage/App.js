import SideBarSorting from "../../components/ppComponents/SideBarSorting"
import React, { useState } from "react"
import { nanoid } from "nanoid"
import Admin from "../../components/ppComponents/AdminForm"
import ListProducts from "../../components/ppComponents/ListProducts"


function App(props) {

  const [currentSort, updateSort] = useState('Desc');
  const [currentCatergory, updateCatergory] = useState('All');
  const [list, updateList] = useState(props);

  const sortUpdate = () => {
    if(currentSort === "Desc"){
      updateSort("Asc");
    } else {
      updateSort("Desc");
    }
  }

  


  const catergoryUpdate = (e) => {
    console.log(e.target.value);
    updateCatergory(e.target.value);
    
  }
  
var temp;
  const testing = (e) => {
    e.preventDefault();
    temp = new Product(e.target[0], e.target[0], e.target[0]);
    console.log(temp);
    //Send item to database 
  }

  

  function Product(title, price, catergory){
    this.title = title;
    this.price = price;
    this.catergory = catergory;
    this.ID = nanoid();
    this.rating = 3;
  }

  return (
    <>
      <div className="productContent">
        <SideBarSorting test={sortUpdate} test2={catergoryUpdate}/>

        <Admin data={props.user[0].Type} testing={testing} showAdmin={props.showAdmin}/>
        
        
        <ListProducts toggleAdmin = {props.toggleAdmin} user = {props.user} sort={currentSort} catergory={currentCatergory}/>

      </div>

    </>
  );
}



export default App;
