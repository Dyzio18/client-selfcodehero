export function authHeader() {
  // return authorization header with jwt token
  const user = JSON.parse(localStorage.getItem('user'));

  if (user && user.tokens && user.tokens.access && user.tokens.access.token) {
    return { Authorization: `Bearer ${user.tokens.access.token}` };
  }
  return {};
}
