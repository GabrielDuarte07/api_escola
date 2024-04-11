import studentRepository from "@student/repositories/studentRepository";
import Student from "@student/entities/Student";
import AppError from "@error/AppError";
import bcrypt from "bcryptjs";

type IRequest = {
  type_id: string;
  name: string;
  email: string;
  password: string;
  birth_date: Date;
  cellphone: string;
  CPF: string;
  CEP: string;
  number: number;
  complement?: string;
};

export default class CreateStudent {
  async execute({
    name,
    email,
    password,
    birth_date,
    CEP,
    cellphone,
    number,
    complement,
    CPF,
    type_id,
  }: IRequest): Promise<Student> {
    const existsEmail = await studentRepository.findByEmail(email);
    if (existsEmail)
      throw new AppError(400, "Email already exists with another student");

    const existsCPF = await studentRepository.findByCPF(CPF);
    if (existsCPF)
      throw new AppError(400, "CPF already exists with another student");

    const hash = await bcrypt.hash(password, 10);

    const filteredComplement = complement ? complement : "";

    const studentEntity = studentRepository.create({
      name,
      email,
      password: hash,
      birth_date,
      CEP,
      cellphone,
      number,
      CPF,
      type_id,
      complement: filteredComplement,
      avatar: "",
    });

    const newStudent = await studentRepository.save(studentEntity);

    return newStudent;
  }
}
