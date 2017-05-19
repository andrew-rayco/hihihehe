import React from 'react'
import {Link} from 'react-router-dom'

class Facestorm extends React.Component {

  componentDidMount() {
    document.body.addEventListener('keyup', (evt) =>
  {
    if (evt.key == 'b') {
      document.getElementById('bev').play()
    }
  })
  //  document.getElementById('bev').play()
  }

  render() {
    return (

      <div className="Facestorm">


        <h1> Facestorm </h1>
          <audio id='bev' src="/sounds/bev.m4a">
              Your browser does not support the <code>audio</code> element.
          </audio>

      </div>
    )
  }
}

export default Facestorm


// {var audio = document.getElementById('bev')
//   audio.play()}
