import React from 'react';
import { withAuthenticationRequired } from '@auth0/auth0-react';

export const AuthenticationGuard = ({ component }) => {
    const Component = withAuthenticationRequired(component, {
      onRedirecting: () => (
        <div className="flex flex-col items-center justify-center mx-96">
          <div className="mb-4 text-2xl font-bold">Redireccionando...</div>
        </div>
      ),
    });
  
    return <Component />;
};
