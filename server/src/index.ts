import express from 'express';
import cors from 'cors';
import router from './router';
import { connectDB } from './models/database.config';
import dotenv from 'dotenv';

dotenv.config();
connectDB();

const app = express();
const port = process.env.PORT || 3000;


app.use(cors());
app.use(express.json());
app.use(router);


// app.get('/', (req, res) => {
//   res.send('Halli hallo, welcome to our CFT Server!');
// });


app.listen(port, () => {
  console.log(`🌐 Server is running on http://localhost:${port} 🌐 `);
});






