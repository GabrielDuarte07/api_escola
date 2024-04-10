import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
} from "typeorm";

@Entity("type_student")
class Type_Student {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("varchar")
  type: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Type_Student;
