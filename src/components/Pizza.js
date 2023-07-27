import React from 'react'

  

function Pizza(props) {
  return (
    <div className={`pizza ${props.pizza.soldOut ? 'sold-out':null}`} >
      <img src={props.pizza.photoName} alt={props.pizza.name} />
      <li>
      <h3>{props.pizza.name}</h3>
      <p>{props.pizza.ingredients}</p>
      <p>{ props.pizza.soldOut ? 'Sold Out' : props.pizza.price}</p>
      </li>
    </div>
  )
}

export default Pizza
