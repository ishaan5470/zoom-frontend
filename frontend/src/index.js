import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import { store } from './redux/store';
import { BrowserRouter } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
// import env from "./";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

        <Provider store={store}>
                <BrowserRouter>
                        <GoogleOAuthProvider clientId={`${process.env.REACT_APP_GOOGLE_CLIENT_ID}`}>
                                <App />
                        </GoogleOAuthProvider>
                </BrowserRouter>
        </Provider>

);
