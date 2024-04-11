import { Request, Response } from "express";
import CreateStudent from "@student/services/CreateStudent";
import ReadStudent from "@student/services/ReadStudent";

export default class StudentController {
  static async index(req: Request, res: Response): Promise<Response> {
    const objStudent = new ReadStudent();
    const students = await objStudent.execute();
    return res.status(200).json(students);
  }

  static async create(req: Request, res: Response): Promise<Response> {
    const objStudent = new CreateStudent();
    const newStudent = await objStudent.execute(req.body);
    return res.status(201).json(newStudent);
  }
}
