import Type_Student from "@student/entities/Type_Student";
import typeStudentRepository from "@student/repositories/typeStudentRepository";
import AppError from "@error/AppError";

export default class CreateTypeStudent {
  async execute(name: string): Promise<Type_Student> {
    const exists = await typeStudentRepository.existsByName(name);

    if (exists) throw new AppError(400, "Student type already exists");

    const typeObj = typeStudentRepository.create({ name });

    const newType = await typeStudentRepository.save(typeObj);

    return newType;
  }
}
