export const storeTokenToLS = (token) => {
  localStorage.setItem("cab432-access-token", token);
};

export const getTokenFromLS = () => {
  return localStorage.getItem("cab432-access-token");
};

export const storeExpiresAt = (time) => {
  localStorage.setItem("cab432-expires-at", time);
};

export const getExpiresAt = () => {
  return localStorage.getItem("cab432-expires-at");
};

export const tokenExpired = () => {
  return getExpiresAt() <= Date.now();
};

export const logout = () => {
  window.localStorage.removeItem("cab432-access-token");
  window.localStorage.removeItem("cab432-expires-at");
  window.location.reload();
};
