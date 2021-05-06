import React, { Component } from "react"
import logo from "./logo.svg"
import "./App.css"

class LambdaDemo extends Component {
  constructor(props) {
    super(props)
    this.state = { loading: false, msg: null }
	

  }
  

  componentDidMount() {
		const queryString = window.location.search;
		console.log(queryString);
		
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
	  
	  <div className="video-responsive">
	  <iframe id="frame1" title="superVid"
		src="https://youtu.be/embed/16jiP0gLKCA">
		</iframe>
		
		</div>
		
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
