const { verifyAuthToken } = require("./verify-auth-token");
const { getAuthToken } = require("./get-auth-token");
const { signIn } = require("./sign-in");
const { signOut } = require("./sign-out");

module.exports = {
  verifyAuthToken: verifyAuthToken,
  getAuthToken: getAuthToken,
  signIn: signIn,
  signOut: signOut,
};
