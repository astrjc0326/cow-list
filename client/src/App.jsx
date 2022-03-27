import React, { Component } from 'react';
import axios from 'axios';
import Cows from './components/Cows.jsx';
import AddCow from './components/AddCow.jsx'

class App extends Component {
  constructor() {
    super()
    this.state = {
      cows: [],
      isdeplay: false,
      displaycow: '',
      addCow: false
    }
    this.get = this.get.bind(this)
  }
  componentDidMount() {
    this.get()
  }
  get() {
    let url = '/api/cows'
    axios.get(url)
    .then((res) => {
      console.log(res.data);
      this.setState({
        cows: res.data.reverse()
      })
    })
  }
  post(cow) {
    let url = '/api/cows'
    axios.post(url, cow)
    .then((res) => {
      console.log(res)
      console.log('created a cow')
      this.setState({addCow: false})
    })
    this.get()
  }
  display(cow) {
    console.log(cow)
    this.setState({
      displaycow: cow,
      isdeplay: true
    })
  }
  edit(cow) {
    let url = `/api/cows/${cow.id}`;
    console.log(cow)
    axios.put(url, cow)
    .then(res => {
      console.log(res)
      this.get()
    })
    .catch()
  }
  delete(id) {
    let url = `/api/cows/${id}`;
    axios.delete(url)
    .then(res => {
      console.log(res)
      this.get()
    })
  }

  render() {
    let display = (!this.state.isdeplay) ? 'hidden' : 'display'
    let addCow = (!this.state.addCow) ? 'hidden' : 'addCow'
    let addButton = (this.state.addCow) ? 'hidden' : 'addButton'
    return (
      <div>
        <h1>Cow List!!!</h1>
        <div className={display}>
          <h2>Display Cow</h2>
          <h2>Name: {this.state.displaycow.name}</h2>
          <h2>Description: {this.state.displaycow.description}</h2>
          </div>
        <button className={addButton} onClick={() => {this.setState({addCow: true})}}>ADD</button>
        <div className={addCow}>
          <AddCow addCow={this.post.bind(this)}/>
        </div>
        <div className='cows'>
        Cow List!!!
        <Cows cows={this.state.cows}
        display={this.display.bind(this)}
        edit={this.edit.bind(this)}
        delete={this.delete.bind(this)}/>
        </div>
      </div>
    )
  }
}

export default App