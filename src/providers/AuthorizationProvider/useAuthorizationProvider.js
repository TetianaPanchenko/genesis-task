import { useContext } from 'react';

import { AuthorizationContext } from './AuthorizationProvider';

const useAuthorizationProvider = () => {
  const context = useContext(AuthorizationContext);

  if (context === undefined) {
    throw new Error(
      'useAuthorizationProvider must be used within a AuthorizationProvider'
    );
  }

  return context;
};

export default useAuthorizationProvider;
