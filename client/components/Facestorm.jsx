import React from 'react'
import {Link} from 'react-router-dom'
import images from './data/images'

const Facestorm = () => {
  return (
    <div className="Facestorm">
    <h1> Facestorm </h1>
    <img src={randomPic(images)}/>
    </div>
  )
}

function randomPic(datafile) {
  return datafile[Math.floor(Math.random() * 20) + 1]
}

export default Facestorm
