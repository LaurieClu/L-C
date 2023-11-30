import {config} from "dotenv"
config()
import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import { getMembersController } from "./controllers/getMembersController";
import { createNewMemberController } from "./controllers/createNewMemberController";
import { deleteMemberController } from "./controllers/deleteMemberController";
import { getOneMemberController } from "./controllers/getOneMemberController";

const PORT = 5000;
const app = express();

app.use(cors());
//allows POST requests to be in json format
app.use(express.json());


app.get("/membres", getMembersController);
app.post("/membres", createNewMemberController);
app.delete("/membres/:membreId", deleteMemberController);
app.get("/membres/:membreId", getOneMemberController);

mongoose.connect(process.env.MONGO_URL!).then(() => {
    console.log(`listening on port ${PORT}`);
    app.listen(PORT);
})
