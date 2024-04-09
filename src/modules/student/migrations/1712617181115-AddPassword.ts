import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddPassword1712617181115 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "student",
      new TableColumn({
        name: "password",
        type: "varchar",
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn("student", "password");
  }
}
