import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
// import { Auth0ProviderWithNavigate } from "./auth0-provider-with-navigate.jsx";
import { Auth0Provider } from "@auth0/auth0-react";
import store from "./Redux/store.js"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
    domain="dev-zx5u1z2uxn3grwex.us.auth0.com"
    clientId="nrpxsbfEP6Vop6gDY6VJxtQdrFUwMszt"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
    </BrowserRouter>
    </Auth0Provider>
  </React.StrictMode>
);
