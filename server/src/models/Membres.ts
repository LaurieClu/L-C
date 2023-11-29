import mongoose from "mongoose";

const Schema = mongoose.Schema;

const MembreSchema = new Schema ({
    name: String,
    username: String,
    statut: String, 
    participe: Boolean
})

const MembreModel = mongoose.model("Membre", MembreSchema)

export default MembreModel;