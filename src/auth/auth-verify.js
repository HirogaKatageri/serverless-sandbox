const admin = require("firebase-admin");

const verifyUser = async (idToken) => admin.auth().verifyIdToken(idToken);

module.exports = { verifyUser };
