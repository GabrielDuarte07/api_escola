import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateStudent1712519341642 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "student",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "uuid",
            default: "uuid_generate_v4()",
          },
          {
            name: "type_id",
            type: "uuid",
          },
          {
            name: "name",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "email",
            type: "varchar",
            isUnique: true,
            isNullable: false,
          },
          {
            name: "password",
            type: "varchar",
          },
          {
            name: "birth_date",
            type: "timestamp",
          },
          {
            name: "CPF",
            type: "varchar",
            isUnique: true,
          },
          {
            name: "cellphone",
            type: "varchar",
            isUnique: true,
          },
          {
            name: "CEP",
            type: "varchar",
          },
          {
            name: "number",
            type: "int",
          },
          {
            name: "complement",
            type: "varchar",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "now()",
          },
        ],
        foreignKeys: [
          {
            name: "fk_type",
            columnNames: ["type_id"],
            referencedTableName: "type_student",
            referencedColumnNames: ["id"],
            onDelete: "SET NULL",
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("student");
  }
}
