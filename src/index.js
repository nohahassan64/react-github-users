import React from 'react';
import ReactDOM from 'react-dom';
import { GithubProvider } from './context/context'
import './index.css';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
        <Auth0Provider
                domain="dev--vq-scf5.us.auth0.com"
                clientId="aEJbECJdkSAwfNgM1VYvB8UeG0LZi23p"
                redirectUri={window.location.origin}
                cacheLocation="localstorage"
        >
                <GithubProvider>
                        <App />
                </GithubProvider>
        </Auth0Provider>
,document.getElementById('root'));
