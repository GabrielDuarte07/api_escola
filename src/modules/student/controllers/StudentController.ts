import { Request, Response } from "express";
import CreateStudent from "@student/services/CreateStudent";
import ReadStudent from "@student/services/ReadStudent";
import UpdateStudent from "@student/services/UpdateStudent";
import LoginStudent from "@student/services/LoginStudent";

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

  static async update(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { currentPassword } = req.body;
    delete req.body.currentPassword;
    const objStudent = new UpdateStudent();
    const updatedStudent = await objStudent.execute(
      id,
      currentPassword,
      req.body,
    );
    return res.status(200).json(updatedStudent);
  }

  static async login(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;
    const objLogin = new LoginStudent();
    const logged = await objLogin.execute({ email, password });
    return res.status(201).json(logged);
  }
}
