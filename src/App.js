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
		value = queryString.split('=')
		if (value[1] === "monet") {
			document.getElementById("monetFr").classList.remove('hiddenVid');
			document.getElementById("monetEn").classList.remove('hiddenVid');
		}
		
    }


  render() {

    return (
	<>
	  		
		<div className="hiddenVid" id="monetFr">
			<a href="https://youtu.be/16jiP0gLKCA">Français</a>
		</div>
		<div className="hiddenVid" id="monetEn">
			<a href="https://youtu.be/16jiP0gLKCA">English</a>
		</div>
		<div className="hiddenVid" id="signacFr">
			<a href="https://youtu.be/16jiP0gLKCA">Français</a>
		</div>
		<div className="hiddenVid" id="monetEn">
			<a href="https://youtu.be/16jiP0gLKCA">English</a>
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
          <LambdaDemo />
        </header>
      </div>
    )
  }
}

export default App
