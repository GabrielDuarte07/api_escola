import typeStudentRepository from "@student/repositories/typeStudentRepository";
import Type_Student from "@student/entities/Type_Student";

export default class ReadTypeStudent {
  async execute(): Promise<Type_Student[]> {
    const types = await typeStudentRepository.find();
    return types;
  }
}
