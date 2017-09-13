
//import React, and the Component class from React in the first statement import React, { Component } from 'react';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
   <br />


   <nav className="navbar">
           <h1 className="title">Favorite Murray</h1>
         </nav>
         <main className="main-body">
           <div className="top">
             <div className="image-one">
               <img src="https://www.fillmurray.com/200/300" alt="Fill Murray Pictures" />
             </div>
             <p className="top-paragraph">
               Lorem ipsum dolor sit amet, consectetur adipisicing.
             </p>
           </div>
           <div className="bottom">
             <div className="image-two">
               <img src="https://www.fillmurray.com/300/300" alt="Fill Murray Pictures" />
             </div>
             <p className="bottom-paragraph">
               Lorem ipsum dolor sit amet, consectetur adipisicing.
             </p>
           </div>
         </main>
         <div className="murrayinator">
           <h3>What is your favorite Murray Movie?</h3>
           <form className="murray-form" action="" method="">
             <label htmlFor="murray-movie">Type your favorite movie here...</label>
             <input type="text" id="murray-movie" />
             <button>Submit</button>
           </form>
         </div>
         <div className="answer">
           <h4 className="murray-display"></h4>
         </div>
  </div>
    );
  }
}

export default App;
