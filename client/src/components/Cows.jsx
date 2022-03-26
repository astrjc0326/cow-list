import React, { Component } from 'react'

class Cows extends Component{
  constructor(props) {
    super(props)

  }
  render() {
    console.log(this.props.cows)
    let cow = this.props.cows.map(cow => (
      <div key={cow.id}>
        <h2>Name: {cow.name}</h2>
        <h2>{cow.description}</h2>
      </div>
    ))
    return(<div>{cow}</div>)
  }
}

export default Cows