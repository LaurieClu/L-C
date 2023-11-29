import express from "express"
import mongoose from "mongoose"
import {config} from "dotenv"
config()

const PORT = 5000;
const app = express();

app.use(express.json());


mongoose.connect(process.env.MONGO_URL!).then(() => {
    console.log(`listening on port ${PORT}`);
    app.listen(PORT)
})

app.get("/", (req, res) => {
    res.send("Hello world");
});

