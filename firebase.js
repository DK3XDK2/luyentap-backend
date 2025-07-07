const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccount.json"); // ← dùng trực tiếp file JSON

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

module.exports = admin;
