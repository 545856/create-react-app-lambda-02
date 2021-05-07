import React, { Component } from "react"
import logo from "./logo-liege-musees-web.png"
import "./App.css"

class LambdaDemo extends Component {
  constructor(props) {
    super(props)
    this.state = { loading: false, msg: null }
	

  }
  

  componentDidMount() {
		const queryString = window.location.search;
		console.log(queryString);
		const value = queryString.split('=')
		if (value[1] === "monet") {
			document.getElementById("monetFr").classList.remove('hiddenVid');
			document.getElementById("monetEn").classList.remove('hiddenVid');
		}
		
    }


  render() {

    return (
	<>
	  		
		<div className="hiddenVid" id="monetFr">
			<a class="textlink" href="https://youtu.be/16jiP0gLKCA">Lecture de l’œuvre “Le bassin du commerce, Le Havre” de Claude Monet </a>
		</div>
	    	<br/>
		<div className="hiddenVid" id="monetEn">
			<a class="textlink" href="https://youtu.be/16jiP0gLKCA">Reading of the work “Le bassin du commerce, Le Havre” - Claude Monet </a>
		</div>
	   	 <br/>
		<div className="hiddenVid" id="signacFr">
			<a class="textlink" href="https://youtu.be/16jiP0gLKCA">Français</a>
		</div>
	    	<br/>
		<div className="hiddenVid" id="monetEn">
			<a class="textlink" href="https://youtu.be/16jiP0gLKCA">English</a>
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
