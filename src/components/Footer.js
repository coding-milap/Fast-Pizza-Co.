import React from 'react'

function Footer() {

  const hour = new Date().getHours()
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  // if (hour >= openHour && hour <= closeHour){
  //   alert("We're Currently Open");
  // }else{
  //   alert("Sorry We're closed");
  // } 

  return (
    <div>
      <footer className='footer'>
        <div className='order'>
        {isOpen ? <p>We are open until {closeHour}:00. Come Visit us or Order Online.</p> : <p>We are Happy to welcome you between {openHour}:00 and {closeHour}:00</p>}
        <button className='btn'>
            Order
        </button>
        </div>
      </footer>
    </div>
  )
}

export default Footer
