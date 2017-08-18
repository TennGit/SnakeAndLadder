import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducer from './reducer'
import {createStore} from 'redux'
import {Provider} from 'react-redux'

ReactDOM.render(
    <Provider store={createStore(reducer)}>
        <App />
    </Provider>
    ,
    document.getElementById('root'));
registerServiceWorker();
