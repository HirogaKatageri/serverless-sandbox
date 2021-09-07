const admin = require("firebase-admin");
const { serverless, app } = require("./base-handler");
const authRouter = require("../auth/auth-routes");

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
  credential: admin.credential.applicationDefault(),
};

admin.initializeApp(firebaseConfig);

app.use("/auth", authRouter);

module.exports.handler = serverless(app);
