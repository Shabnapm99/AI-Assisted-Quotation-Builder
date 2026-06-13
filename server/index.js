import express from 'express';
import dotenv from 'dotenv';
import { dbConnect } from './src/config/db.js';
import authRoutes from './src/routes/authRoutes.js';
import clientRoutes from './src/routes/clientRoutes.js';
import quotationRoutes from './src/routes/quotationRoutes.js';
import { validateToken } from './src/middlewares/authMiddleware.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';

//configure dotenv
dotenv.config();

//configure express
const app = express();
app.use(cookieParser());

const PORT = process.env.PORT || 4000;
app.use(express.json());
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true//to access the cookies
}))

app.get('/', (req, res) => {
    res.status(200).json("Home page of  AI-Assisted Quotation Builder");
});

app.use('/auth', authRoutes);
app.use('/clients', validateToken, clientRoutes);
app.use('/quotations', validateToken, quotationRoutes);

//connecting to db

dbConnect();

// Start Express server
if (process.env.NODE_ENV !== 'production' && process.env.VERCEL !== '1') {
    app.listen(PORT, () => {
        console.log(`Server is running on port  http://localhost:${PORT}`);
    });
}

export default app;//while deploying in versel we need to export app
