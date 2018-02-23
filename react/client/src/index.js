import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './container/Homepage';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
