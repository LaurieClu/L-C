import { Request, Response } from "express";
import Membre from "../models/Membres";

export async function getOneMemberController(req: Request, res: Response) {
  const { membreId } = req.params;
  const membre = await Membre.findById(membreId);
  res.json(membre);
}