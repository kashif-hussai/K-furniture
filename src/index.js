import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './function/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

        <Provider store={store}>
                <App />
        </Provider>

);

