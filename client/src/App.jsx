import React, { Component } from 'react';
import axios from 'axios';
import Cows from './components/Cows.jsx';

class App extends Component {
  constructor() {
    super()
    this.state = {
      cows: [],
      isdeplay: false,
      deplaycow: ''
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
        cows: res.data
      })
    })
  }

  render() {
    let display = (!this.state.isdeplay) ? 'hidden' : ''
    return (
      <div>
        <h1>Cow List!!!</h1>
        <div className={display}>display cow</div>
        <button>ADD</button>

        <div className='cows'>
        Cow List!!!
        <Cows cows={this.state.cows}/>
        </div>
      </div>
    )
  }
}

export default App