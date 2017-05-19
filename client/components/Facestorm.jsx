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


  constructor (props) {
    super(props)

    this.windowWidth = window.innerWidth
    this.windowHeight = window.innerHeight

    const children = []

    this.state = {
      children: [{
        width: this.windowWidth / 2,
        height: this.windowWidth / 2,
        image: randomPic(images)
      }]
    }


  }
  newChild(images) {
    console.log("new child");
    let newChildren = [...this.state.children]
    newChildren.push({
      width: Math.floor(Math.random() * this.windowWidth ),
      height: Math.floor(Math.random() * this.windowHeight ),
      image: randomPic(images)
    })
    this.setState({children: newChildren})
  }

  componentDidMount() {
    console.log("mounted");
    setInterval(() => {
      this.newChild(images)
    }, 921)
  }

  renderChild(child) {
    return <img src={child.image}/>
  }

  renderChildren(children) {
    return children.map(this.renderChild)
  }


  render() {
    return (

      <div className="Facestorm">
        {this.renderChildren(this.state.children)}
        <h1> Facestorm </h1>
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
