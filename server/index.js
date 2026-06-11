import express from 'express';
import dotenv from 'dotenv';

//configure dotenv
dotenv.config();
//configure express
const app = express();
const PORT = process.env.PORT || 4000;
console.log("ENV PORT:", process.env.PORT);
app.get('/', (req, res) => {
    res.status(200).json("Home page of  AI-Assisted Quotation Builder");
});

if (process.env.NODE_ENV !== 'production' && process.env.VERCEL !== '1') {
    app.listen(PORT, () => {
        console.log(`Server is running on port  http://localhost:${PORT}`);
    });
}

export default app;//while deploying in versel we need to export app
