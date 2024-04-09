import Type_Student from "../entities/Type_Student";
import dataSource from "@config/db";

const typeStudentRepository = dataSource.getRepository(Type_Student).extend({
  existsById: async function (id: string): Promise<boolean> {
    const typeStu = await this.existsBy({ id });
    return typeStu;
  },
  existsByName: async function (type: string): Promise<boolean> {
    const typeStu = await this.existsBy({ name: type });
    return typeStu;
  },
});

export default typeStudentRepository;
