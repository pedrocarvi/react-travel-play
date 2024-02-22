import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";

const RegistroButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button
      onClick={() =>
        loginWithRedirect({
            appState: {
                returnTo: "/my-account", 
            },
            authorizationParams: {
                screen_hint: "signup",
              },
        })
      }
    >
      Sign up
    </button>
  );
};

export default RegistroButton;