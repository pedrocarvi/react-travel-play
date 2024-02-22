// index.js
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { Auth0Provider } from '@auth0/auth0-react';
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import Auth0ProviderWithNavigate from "./components/Auth0/Auth0ProviderWithNavigate";

const domain = "dev-iqpqx84u5g4043l2.us.auth0.com";
const clientId = "nblIEFIsRj6FeF0yQp02LNeOIA14MDXB";
const audience = "https://apiTravelPlay";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0ProviderWithNavigate
        domain={domain}
        clientId={clientId}
        audience={audience}
        redirectUri={window.location.origin}
      >
        <App />
      </Auth0ProviderWithNavigate>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
