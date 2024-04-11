import Student from "@student/entities/Student";
import AppError from "@error/AppError";
import studentRepository from "@student/repositories/studentRepository";

export default class DeleteStudent {
  async execute(id: string): Promise<Student> {
    const studentExists = await studentRepository.findById(id);

    if (!studentExists) throw new AppError(404, "Student not found");

    const removed = await studentRepository.remove(studentExists);

    return removed;
  }
}
