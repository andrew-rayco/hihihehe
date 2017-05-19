import React from 'react'
import {Link} from 'react-router-dom'
import images from './data/images'

class Facestorm extends React.Component {
  //
  // componentDidMount() {
  //   document.body.addEventListener('keyup', (evt) =>
  // {
  //   if (evt.key == 'b') {
  //     document.findElementById('bev').play()
  //   }
  //   console.log(evt.key)
  // })
  // //  document.getElementById('bev').play()
  // }


  render() {
    return (

      <div className="Facestorm">


        <h1> Facestorm </h1>
        <img src={randomPic(images)}/>
          <audio id='bev' src="/sounds/bev.m4a" autoPlay={true}>
              Your browser does not support the <code>audio</code> element.
          </audio>

      </div>
    )
  }
}

function randomPic(datafile) {
  return datafile[Math.floor(Math.random() * 20) + 1].image
}
export default Facestorm
