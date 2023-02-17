import React from "react"

 class PrintProducts extends React.Component
{
  constructor(props){
    super(props);
    this.state = {
      title: props.data.title,
      rating: props.data.rating,
      catergory: props.data.catergory,
      price: props.data.price,
      id: props.id,
      isAdmin: props.user[0].Type === "Admin",
      method: props.method
    }
  }


  render(){
    return (
      <li className="product" id={this.state.id}  key={this.state.key}>
        <img src="../stick.jpg" alt="Hockey Stick"></img>
        <div> {this.state.title} {this.state.catergory}</div>
        <div id="priceAndRating" >
          <div id="price">Price: {this.state.price}</div>
          <div id="rating">{this.state.rating}</div>
        </div>
        {this.state.isAdmin && <button onClick = {this.state.method}>edit</button>} 
      </li>
    )
  }
}



export default PrintProducts;