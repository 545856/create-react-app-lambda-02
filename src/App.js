import React, { Component } from "react"
import logo from "./logo.svg"
import "./App.css"
import PropTypes from "prop-types";

class LambdaDemo extends Component {
  constructor(props) {
    super(props)
    this.state = { loading: false, msg: null }
	

  }
  

  componentDidMount() {
		const queryString = window.location.search;
		
    }

  handleClick = api => e => {
    e.preventDefault()

    this.setState({ loading: true })
    fetch("/.netlify/functions/" + api)
      .then(response => response.json())
      .then(json => this.setState({ loading: false, msg: json.msg }))
  }

  render() {
    const { loading, msg } = this.state

    return (
	<>
      <p>
        <button onClick={this.handleClick("hello")}>{loading ? "Loading..." : "Call Super Lambda"}</button>
        <button onClick={this.handleClick("async-dadjoke")}>{loading ? "Loading..." : "Call Super Async Lambda"}</button>
        <br />
        <span>{msg}</span>
      </p>
	  
	  <p>
		Salut !
	  </p>
	  
	  <iframe width="420" height="315"
		src="https://www.youtube.com/embed/tgbNymZ7vqY">
		</iframe>
	</>

    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <LambdaDemo />
        </header>
      </div>
    )
  }
}

export default App
