import React from 'react'
import {Link} from 'react-router-dom'
import Facestorm from './Facestorm'

const Home = () => {
  document.addEventListener('click', (evt) => {
    // if (evt.key == 'b') {
    //   document.findElementById('bev').play()
    // }
    console.log(evt)
  })

  return (
    <div className="home">
      <h1><Link to='/Facestorm'> Hihi Facestorm </Link></h1>
    </div>
  )
}

export default Home
