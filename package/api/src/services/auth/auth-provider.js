const admin = require("firebase-admin");

const firebaseCertConfig = require("../../../firebase.json");
admin.initializeApp({
  credential: admin.credential.cert(firebaseCertConfig),
});

const auth = admin.auth();

function verifyIdToken(token) {
  return auth.verifyIdToken(token);
}
module.exports = {
  verifyIdToken: verifyIdToken,
  firebaseCertConfig: firebaseCertConfig,
};
