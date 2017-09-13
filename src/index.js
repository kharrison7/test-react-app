
//imports react into the project
import React from 'react';
//imports ReactDOM into the project. Connects React to DOM.
import ReactDOM from 'react-dom';
import './index.css';
// The 3rd line contains the importing of our app from the src/App.js file.
//This allows us to call our app inside the index.js and render it using ReactDOM.
import App from './App';
import registerServiceWorker from './registerServiceWorker';


// This line of code states that we want to use our <App />
//and insert it into the HTML page at the element with an ID of root.
//We've already looked at our HTML and saw the <div id="root"> tag in the body.
//ReactDOM will render the <App /> tag inside of the <div id="root">.
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
