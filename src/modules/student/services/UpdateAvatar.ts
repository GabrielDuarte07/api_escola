import fs from "fs";
import Student from "@student/entities/Student";
import studentRepository from "@student/repositories/studentRepository";
import AppError from "@error/AppError";
import { avatarsPath } from "@config/multer";
import { resolve } from "path";

export default class UpdateAvatar {
  async execute(id: string, fileName: string): Promise<Student> {
    const studentExists = await studentRepository.findById(id);
    if (!studentExists) throw new AppError(404, "Student not found");

    const { avatar } = studentExists;

    if (avatar) {
      const fileExists = await fs.promises.stat(resolve(avatarsPath, avatar));
      if (fileExists) await fs.promises.unlink(resolve(avatarsPath, avatar));
    }

    studentExists.avatar = fileName;

    const updated = await studentRepository.save(studentExists);
    return updated;
  }
}
