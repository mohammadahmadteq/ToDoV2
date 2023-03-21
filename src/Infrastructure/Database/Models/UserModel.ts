import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { TaskDBModel } from "./TodoModel";

@Entity("users")
export class UserDBModel {
  @PrimaryGeneratedColumn("uuid")
  userId: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @CreateDateColumn()
  createdAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany((type) => TaskDBModel, (task) => task.user)
  tasks: TaskDBModel[];
}
