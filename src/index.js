import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import model from './redux/model';
import { Provider } from 'react-redux'
ReactDOM.render(<Provider><App store={model.store}/></Provider>, document.getElementById('root'));
registerServiceWorker();
