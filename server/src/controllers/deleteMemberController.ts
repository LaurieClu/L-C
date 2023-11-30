import { Request, Response } from "express";
import Membre from "../models/Membres";

export async function deleteMemberController(req: Request, res: Response) {
  const membreId = req.params.membreId;
  const membre = await Membre.findByIdAndDelete(membreId);
  res.json(membre);
}