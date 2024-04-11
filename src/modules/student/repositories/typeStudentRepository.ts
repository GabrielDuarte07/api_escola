import Type_Student from "../entities/Type_Student";
import dataSource from "@config/db";

const typeStudentRepository = dataSource.getRepository(Type_Student).extend({
  foundById: async function (id: string): Promise<Type_Student | null> {
    const typeStu = await this.findOne({ where: { id } });
    return typeStu;
  },
  existsByName: async function (type: string): Promise<boolean> {
    const typeStu = await this.existsBy({ type });
    return typeStu;
  },
});

export default typeStudentRepository;
