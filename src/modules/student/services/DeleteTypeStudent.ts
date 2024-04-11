import AppError from "@error/AppError";
import Type_Student from "@student/entities/Type_Student";
import typeStudentRepository from "@student/repositories/typeStudentRepository";

export default class DeleteTypeStudent {
  async execute(id: string): Promise<Type_Student> {
    const existType = await typeStudentRepository.foundById(id);

    if (!existType) throw new AppError(404, "type not found");

    const removed = await typeStudentRepository.remove(existType);

    return removed;
  }
}
