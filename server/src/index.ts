import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Halli hallo, here TypeScript with Node.js and Express!');
});

app.listen(port, () => {
  console.log(`🌐 Server is running on http://localhost:${port} 🌐 `);
});
