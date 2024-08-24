import express from 'express';
import cors from 'cors';
import router from './router';
import { dbConnect } from './models/database.config';

const app = express();
const port = 5000;


app.use(cors());
app.use(express.json());
app.use(router);

app.get('/', (req, res) => {
  res.send('Halli hallo, here TypeScript with Node.js and Express!');
});

dbConnect();

app.listen(port, () => {
  console.log(`🌐 Server is running on http://localhost:${port} 🌐 `);
});






