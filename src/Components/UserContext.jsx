import { createContext, useState } from 'react';
import PropTypes from 'prop-types';
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [showSignUp, setShowSignUp] = useState(false);
  const [showLogin, setLogin] = useState(false);

  return (
    <UserContext.Provider value={{ showSignUp, setShowSignUp, showLogin, setLogin}}>
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired, 
};

export default { UserProvider, UserContext }