import express from 'express';
import dotenv from 'dotenv';
import { dbConnect } from './src/config/db.js';
import authRoutes from './src/routes/authRoutes.js';

//configure dotenv
dotenv.config();

//configure express
const app = express();

const PORT = process.env.PORT || 4000;
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json("Home page of  AI-Assisted Quotation Builder");
});

app.use('/api/auth',authRoutes)

//connecting to db

dbConnect();

// Start Express server
if (process.env.NODE_ENV !== 'production' && process.env.VERCEL !== '1') {
    app.listen(PORT, () => {
        console.log(`Server is running on port  http://localhost:${PORT}`);
    });
}

export default app;//while deploying in versel we need to export app
