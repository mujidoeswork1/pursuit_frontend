import PrintProducts from "./PrintProducts"
import { nanoid } from "nanoid";
import React, { useState, useEffect } from "react"


const ListProducts = (props) => {
  const [products, setProducts] = useState([]);
  var comp;
  let result = [];
    //API CALLS
    useEffect(() => {
      async function plswork() {
        fetch('http://localhost:4000/api/product?minPrice=0&maxPrice=10')
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            result = data;
            comp = result.map((f) => <PrintProducts method={props.toggleAdmin} data = {f} id = {f.ID} key = {GenID()} user = {props.user}></PrintProducts>)
            setProducts(comp);
          })
          .catch((e) => console.log(e));
      }
      plswork();

      }, [])

    
  var value = result.sort === "Asc" ? 1 : -1;
   var shownList;
  
   filterItems();

  // // function createProduct(event){
  // //   event.preventDefault();
  // //   var result = { ID : GenID(), title: event.target.elements[0].value, price: event.target.elements[1].value, rating: 0, category: event.target.elements[2].value };
  // //   var obj = <PrintProducts data = {result} id = {result.ID} key = {GenID()}></PrintProducts>;
  // //   prodList.push(obj);
    

  // // }

  function GenID(){
    const id = `prodDesc-${nanoid()}`;
    return id;
  }

  function filterItems(){
    var tempList = [];
    tempList = result.filter(element => {
      return props.catergory === "All" || element.catergory === props.catergory;
    });

    tempList = tempList.sort(compare);
    
    shownList = tempList;
    
  }

  function compare( a, b ) {
    if ( a.props.data.price < b.props.data.price ){
      return 1 * value;
    }
    if ( a.props.data.price > b.props.data.price ){
      return -1 * value;
    }
    return 0;
  }




  return(
    <div className="productList">
      <ul id="products">
        {products}
      </ul>
    </div>
  );
}

export default ListProducts;