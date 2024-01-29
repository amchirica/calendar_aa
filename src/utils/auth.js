// utils/auth.js
let currentUser = null;

export const authenticate = (user, password) => {
  // Simulăm o verificare simplă a utilizatorului și parolei
  if (user === 'andrei' && password === 'AbCd123!!!') {
    currentUser = user;
    return true;
  } else {
    return false;
  }
};

export const isAuthenticated = () => {
  return currentUser !== null;
};

export const logout = () => {
  currentUser = null;
};
