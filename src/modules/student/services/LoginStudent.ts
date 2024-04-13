import AppError from "@error/AppError";
import studentRepository from "@student/repositories/studentRepository";
import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";

type IRequest = {
  email: string;
  password: string;
};

type IResponse = {
  id: string;
  token: string;
};

export default class LoginStudent {
  async execute({ email, password }: IRequest): Promise<IResponse> {
    const studentEmail = await studentRepository.findByEmail(email);
    if (!studentEmail) throw new AppError(400, "E-mail invalid");

    const compared = await compare(password, studentEmail.password);
    if (!compared) throw new AppError(400, "wrong password");

    const token = jwt.sign(
      { id: studentEmail.id },
      String(process.env.JWT_TOKEN),
      { expiresIn: "1d" },
    );

    return {
      id: studentEmail.id,
      token,
    };
  }
}
