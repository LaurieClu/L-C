import express, {Request, Response} from "express"
import mongoose from "mongoose"
import {config} from "dotenv"
config()
import Membre from "./models/Membres"

const PORT = 5000;
const app = express();

//allows POST requests to be in json format
app.use(express.json());


app.post("/membres", async (req: Request, res: Response) => {
    const newMembre = new Membre({
        name: req.body.name,
        username: req.body.username,
        statut: req.body.statut,
        participe: req.body.participe
    });
    const createdMembre = await newMembre.save();
    res.json(createdMembre);
});

mongoose.connect(process.env.MONGO_URL!).then(() => {
    console.log(`listening on port ${PORT}`);
    app.listen(PORT);
})
