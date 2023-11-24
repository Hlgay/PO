// const admin = require('firebase-admin');
// const serviceAccount = require('./path/to/serviceAccountKey.json');

// admin.initializeApp({
//  credential: admin.credential.cert(serviceAccount),
// });

// const db = admin.firestore();

// app.post('/api/newsletter', async (req, res) => {
//  try {
//     const { email } = req.body;
//     await db.collection('newsletter').add({ email });
//     res.sendStatus(200);
//  } catch (err) {
//     console.error(err);
//     res.sendStatus(500);
//  }
// });