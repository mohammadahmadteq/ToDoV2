import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from "typeorm";
import { UserDBModel } from "./UserModel";

@Entity("tasks")
export class TaskDBModel {
  @PrimaryGeneratedColumn("uuid")
  taskId: string;

  @Column()
  taskHeading: string;

  @Column()
  taskBody: string;

  @Column()
  dueDate: string;

  @Column()
  isFinished: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne((type) => UserDBModel, (user) => user.tasks)
  user: UserDBModel;
}
