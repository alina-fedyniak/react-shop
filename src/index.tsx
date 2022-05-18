import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { store } from './redux/store';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './i18n/config';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render (
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
);

serviceWorker.unregister();
