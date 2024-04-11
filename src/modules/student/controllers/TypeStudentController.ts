import { Request, Response } from "express";
import CreateTypeStudent from "@student/services/CreateTypeStudent";
import ReadTypeStudent from "@student/services/ReadTypeStudent";
import DeleteTypeStudent from "@student/services/DeleteTypeStudent";

export default class TypeStudentController {
  static async create(req: Request, res: Response): Promise<Response> {
    const { type } = req.body;

    const typeObj = new CreateTypeStudent();

    const newType = await typeObj.execute(type);

    return res.status(201).json(newType);
  }

  static async index(req: Request, res: Response): Promise<Response> {
    const typeObj = new ReadTypeStudent();

    const types = await typeObj.execute();

    return res.status(200).json(types);
  }

  static async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const typeObj = new DeleteTypeStudent();
    const removed = await typeObj.execute(id);
    return res.status(200).json(removed);
  }
}
