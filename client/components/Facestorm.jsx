import React from 'react'
import {Link} from 'react-router-dom'
import images from './data/images'

class Facestorm extends React.Component {



  constructor (props) {
    super(props)

    this.windowWidth = window.innerWidth
    this.windowHeight = window.innerHeight

    const children = []

    this.state = {
      children: [{
        width: this.windowWidth / 8,
        height: this.windowWidth / 8,
        image: randomPic(images)
      }]
    }
  }

  componentDidMount() {
    document.Facestorm.addEventListener('click', (evt) => {
      // if (evt.key == 'b') {
      //   document.findElementById('bev').play()
      // }
      console.log(evt)
    })
    //  document.getElementById('bev').play()
  }
  newChild(images, x, y) {

    let newChildren = [...this.state.children]
    newChildren.push({
      width: x,
      height: y,
      image: randomPic(images)
    })
    this.setState({children: newChildren})
  }
  // console.log(Math.floor(Math.random() * this.windowWidth)

  componentDidMount() {
    // setInterval(() => {
    //   this.newChild(images)
    // }, 921)
    document.addEventListener('click', (evt) => {
      this.newChild(images, evt.clientX, evt.clientY)
      console.log(evt)
    })
  }

  renderChild(child) {
    console.log(child);
    var imgWidth = child.width
    console.log(imgWidth)
    return <img src={child.image} position='absolute' width={imgWidth} left={child.height}/>
  }

  renderChildren(children) {
    return children.map(this.renderChild)
  }


  render() {
    return (

      <div className="Facestorm">
        {this.renderChildren(this.state.children)}
        <h1> Facestorm </h1>

      </div>
    )
  }
}

function randomPic(datafile) {
  return datafile[Math.floor(Math.random() * 20) + 1].image
}


export default Facestorm
