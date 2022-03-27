import React, { Component } from 'react'

class Cows extends Component{
  constructor(props) {
    super(props)
    this.state = {
      id: '',
      editname: '',
      editdes: '',
      editable: false
    }
  }
  editOnClick() {
    let cow = {};
    cow.id = this.state.id;
    cow.name = this.state.editname;
    cow.description = this.state.editdes;
    this.props.edit(cow)
    this.setState({
      editable: false,
      id: '',
      editname: '',
      editdes: ''
    })
  }

  render() {
    console.log(this.props.cows)
    let cow = this.props.cows.map(cow => (
      <div key={cow.id}>
        <h2 onClick={() => {this.props.display(cow)}}>Name: {cow.name}</h2>
        <button onClick={() => {
          this.setState({
            editable: true,
            editname: cow.name,
            editdes: cow.description,
            id: cow.id
            })}}>
              Edit
        </button>
        <button onClick={() => this.props.delete(cow.id)}>X</button>
      </div>
    ))
    let editable = (!this.state.editable) ? 'hidden' : 'edit'
    return(
    <div>
      <div className={editable}>
        <h2>Edit Cow</h2>
        <h3>Name</h3>
        <input value={this.state.editname}
          onChange={(e) => {this.setState({editname: e.target.value})}}>
        </input>
        <h3>Description</h3>
        <input value={this.state.editdes} onChange={(e) => {this.setState({editdes: e.target.value})}}></input>
        <button onClick={() => {this.editOnClick()}}>Submit</button>
      </div>
    <div>
      {cow}
    </div>
    </div>
    )
  }
}

export default Cows