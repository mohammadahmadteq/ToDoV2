import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { User } from "./User";

@Entity("Tasks")
export class Task {
  @PrimaryGeneratedColumn("increment")
  id: string

  @Column({
    unique: true, 
    nullable: false
  })
  taskId: string;

  @Column(
    {
      nullable: false
    }
  )
  taskHeading: string;

  @Column(
    {
      nullable: false
    }
  )
  taskBody: string;

  @Column()
  dueDate: string;

  @Column(
    { nullable: true }
  )
  finishedAt: string;

  @Column({nullable: true})
  useId: string

  @CreateDateColumn()
  createdAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne((type) => User, (user) => user.tasks)
  @JoinColumn({
    name: "userId",
    referencedColumnName: "userId"
  })
  user: User;
}
