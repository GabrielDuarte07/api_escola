import Student from "@student/entities/Student";
import studentRepository from "@student/repositories/studentRepository";

export default class ReadStudent {
  async execute(): Promise<Student[]> {
    const students = await studentRepository.find({
      relations: { type_student: true },
    });
    return students;
  }
}
