import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddAvatar1712781602079 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "student",
      new TableColumn({
        name: "avatar",
        type: "varchar",
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn("student", "avatar");
  }
}
