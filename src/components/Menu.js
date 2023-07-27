import React from 'react'
import Pizza from './Pizza'

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];


function Menu() {

  const pizzas = pizzaData;
  const numPizzas = pizzas.length;
  return (
    <div className='menu'>
      <h2>Our Menu</h2>

      {/* {numPizzas > 0 && (
        <ul className='pizzas'>
        {pizzaData.map((pizza) => (
            <Pizza pizza={pizza} key={pizza.name} />
        ))}
      </ul>
      )} */}

      {
        numPizzas > 0 ? (
          <>
          <p>Authentic Italain cuisine. 6 creative dishes to choose from. All from our stone oven, all organic, all delicious.</p>
          <ul className='pizzas'>
          {pizzaData.map((pizza) => (
              <Pizza pizza={pizza} key={pizza.name} />
          ))}
        </ul>
        </>
        ): (<p>No Pizzas!!</p>)
      }
      
    </div>
  )
}

export default Menu
