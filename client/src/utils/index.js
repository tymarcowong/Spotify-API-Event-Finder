export const storeTokenToLS = (token) => {
  localStorage.setItem("cab432-access-token", token);
};

export const getTokenFromLS = () => {
  return localStorage.getItem("cab432-access-token");
};

export const removeToken = () => {
  window.localStorage.removeItem("cab432-access-token");
};

export const storeExpiresAt = (time) => {
  localStorage.setItem("cab432-expires-at", time);
};

export const getExpiresAt = () => {
  return localStorage.getItem("cab432-expires-at");
};

export const removeExpiresAt = () => {
  window.localStorage.removeItem("cab432-expires-at");
};

export const tokenExpired = () => {
  return getExpiresAt() <= Date.now();
};

export const logout = () => {
  removeExpiresAt();
  removeToken();
  window.location.reload();
};

const SERVER_URL = `http://${process.env.REACT_APP_URL}:5000`;

export const getEndpointUrl = (endPoint) => {
  return `${SERVER_URL}${endPoint}`;
};
