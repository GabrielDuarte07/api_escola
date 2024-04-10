import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  JoinColumn,
} from "typeorm";
import Type_Student from "./Type_Student";

@Entity("student")
class Student {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => Type_Student)
  @JoinColumn({ name: "type_id" })
  type_student: Type_Student;

  @Column("varchar")
  name: string;

  @Column("varchar")
  email: string;

  @Column("varchar")
  password: string;

  @Column("varchar")
  avatar: string;

  @Column("timestamp")
  birth_date: Date;

  @Column("varchar")
  CPF: string;

  @Column("varchar")
  cellphone: string;

  @Column("varchar")
  CEP: string;

  @Column("int")
  number: number;

  @Column("varchar")
  complement: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Student;
