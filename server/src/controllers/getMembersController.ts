import { Request, Response } from "express";
import Membre from "../models/Membres";

export async function getMembersController(req: Request, res: Response) {
  const membres = await Membre.find();
  res.json(membres);
}