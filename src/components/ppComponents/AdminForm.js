import React from "react"
import { useState } from "react"
import { nanoid } from "nanoid"


const AdminForm = (props) => {

  

    

  

    return (
<div>
      { props.showAdmin &&<content id = "Admin" name="Admin">

      <form id="adminForm" onSubmit={props.testing} >
        <label htmlFor="productTitle">productTitle</label>
        <input type="text" name="productTitle"></input>
        <label htmlFor="productPrice">productPrice</label>
        <input type="text" name="productPrice"></input>
        <label htmlFor="Catergory">Catergory</label>
        <input type="text" name="Catergory"></input>
        <input type="submit" ></input>
      </form> 
      </content>
      }
      </div>
    )
  }




export default AdminForm;