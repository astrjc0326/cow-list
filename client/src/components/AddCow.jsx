import React, { Component } from 'react'

class AddCow extends Component {
  constructor() {
    super()
    this.state ={
      name:'',
      description:''
    }
  }
  handleClick() {
    let data = {};
    data.name = this.state.name;
    data.description = this.state.description
    this.props.addCow(data)
  }

  render() {
    return(
      <div>
        <h2>Add a Cow</h2>
        <h3>Name</h3>
        <input onChange={(e) => {this.setState({name: e.target.value})}}></input>
        <h3>Description</h3>
        <input onChange={(e)=>{this.setState({description: e.target.value})}}></input>
        <button onClick={()=>{this.handleClick()}}>ADD</button>
      </div>
    )
  }
}

export default AddCow