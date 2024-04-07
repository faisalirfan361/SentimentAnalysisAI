import express from 'express';
import cors from 'cors';
import getSentiment from './utils/nlp';

const app = express();

app.use(express.json());

app.use(
    cors({
        origin: "http://localhost:3000"
    })
);

app.listen(4000, () => console.log("app is running"))

app.get("/health", (req, res) => res.send(200));

app.post('/v1/sentiment', (req, res) => {
    const data = req.body.data;

    const sentiment = getSentiment(data);

    return res.send({sentiment});
});