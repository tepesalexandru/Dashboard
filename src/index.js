import React from 'react'
import ReactDOM from 'react-dom'
import './styles/styles.css';
import './styles/custom.css';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers';

import App from './App';

const store = createStore(reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById("root"));