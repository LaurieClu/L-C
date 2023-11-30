import { Request, Response } from "express";
import Membre from "../models/Membres";

export async function createNewMemberController(req: Request, res: Response) {
  const newMembre = new Membre({
    name: req.body.name,
    username: req.body.username,
    statut: req.body.statut,
    participe: req.body.participe
  });
  const createdMembre = await newMembre.save();
  res.json(createdMembre);
}