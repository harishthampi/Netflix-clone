import React, { useEffect, useState } from 'react'
import './Nav.css'

export default function Nav() {
  const[show,handleShow] = useState(false);

  const transitionNavbar = () =>{
    if(window.scrollY > 100){
        handleShow(true);
    }
    else{
        handleShow(false);
    }
  }

  useEffect(()=>{
    window.addEventListener('scroll',transitionNavbar);
    return() => window.removeEventListener('scroll',transitionNavbar)
  },[])

  return (
    <div className={`nav ${show && 'nav-black'}`}>
        <div className='nav-content'>
            <img src="https://upload.wikimedia.org/wikipedia/commons/f/fd/Netflix-Logo.png" alt="" className='nav-logo' />
            <img className='nav-avatar' src="https://i.pinimg.com/originals/2b/90/0d/2b900d5612554cd0b5edf7d8e848c3ea.png" alt=""/>
        </div>
    </div>
  )
}
