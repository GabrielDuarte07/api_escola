import Student from "@student/entities/Student";
import AppError from "@error/AppError";
import studentRepository from "@student/repositories/studentRepository";
import bcrypt from "bcryptjs";

export default class UpdateStudent {
  async execute(
    id: string,
    currentPassword: string,
    studentData: Partial<Student>,
  ): Promise<Student> {
    const studentExists = await studentRepository.findById(id);
    if (!studentExists) throw new AppError(404, "Student not found");

    const comparedPassword = await bcrypt.compare(
      currentPassword,
      studentExists.password,
    );

    if (!comparedPassword) throw new AppError(400, "Current password is wrong");

    if (studentData.CPF && studentData.CPF !== studentExists.CPF) {
      const findByCPF = await studentRepository.findByCPF(studentData.CPF);
      if (findByCPF) throw new AppError(400, "CPF already exists");
    }

    if (studentData.email && studentData.email !== studentExists.email) {
      const findByEmail = await studentRepository.findByEmail(
        studentData.email,
      );
      if (findByEmail) throw new AppError(400, "E-mail already exists");
    }

    studentExists.name = studentData.name || studentExists.name;
    studentExists.email = studentData.email || studentExists.email;
    studentExists.CPF = studentData.CPF || studentExists.CPF;
    studentExists.CEP = studentData.CEP || studentExists.CEP;
    studentExists.number = studentData.number || studentExists.number;
    studentExists.password = studentData.password || studentExists.password;
    studentExists.type_id = studentData.type_id || studentExists.type_id;
    studentExists.birth_date =
      studentData.birth_date || studentExists.birth_date;
    studentExists.complement =
      studentData.complement || studentExists.complement;
    studentExists.cellphone = studentData.cellphone || studentExists.cellphone;

    const updated = await studentRepository.save(studentExists);

    return updated;
  }
}
