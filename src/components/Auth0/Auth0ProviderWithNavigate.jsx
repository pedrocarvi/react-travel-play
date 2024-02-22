import React from 'react';
import { Auth0Provider } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

const Auth0ProviderWithNavigate = ({ children }) => {
  const navigate = useNavigate();

  const domain = "dev-iqpqx84u5g4043l2.us.auth0.com";
  const clientId = "nblIEFIsRj6FeF0yQp02LNeOIA14MDXB";
  const redirectUri = "http://localhost:3000/";
  const audience = "https://apiTravelPlay";

  const onRedirectCallback = (appState) => {
    navigate(appState?.returnTo || window.location.pathname);
  };

  if (!(domain && clientId && redirectUri)) {
    return null;
  }

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      audience={audience}
      redirectUri={redirectUri}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithNavigate;
