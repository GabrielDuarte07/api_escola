import dataSource from "@config/db";
import Student from "../entities/Student";
import { Like } from "typeorm";

const studentRepository = dataSource.getRepository(Student).extend({
  findById: async function (id: string): Promise<Student | null> {
    const student = await this.findOne({ where: { id } });
    return student;
  },
  findByName: async function (name: string): Promise<Student[]> {
    const students = await this.find({ where: { name } });
    return students;
  },
  findByNameLike: async function (name: string): Promise<Student[]> {
    const students = await this.findBy({ name: Like(`%${name}%`) });
    return students;
  },
});

export default studentRepository;