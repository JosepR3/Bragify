const { signOut } = require("./sign-out");

/**
 * Adds the user claims to the request object
 *
 * @param {Request} req Request object
 * @param {Object} userClaims {email: String, uid: String}
 *
 * req.user = { email: userClaims.email, uid: userClaims.uid }
 * req.signOut = auth.signOut
 */
function signIn(req = {}, userClaims = {}) {
  const username = req.username
  const { email, uid } = userClaims;

  if (typeof email !== "string" || typeof uid !== "string") {
    throw new Error("Missing user claims");
  }

  req.user = {
    username: username,
    email: email,
    uid: uid,
  };

  req.signOut = signOut;
}

module.exports = {
  signIn: signIn,
};
