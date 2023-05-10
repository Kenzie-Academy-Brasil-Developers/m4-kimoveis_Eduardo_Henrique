import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  DeleteDateColumn,
  UpdateDateColumn,
  OneToMany,
  ManyToOne,
} from "typeorm";
import { Schedule } from "./scheduler.entity";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "varchar", length: 45 })
  name: string;

  @Column({ type: "varchar", length: 45, unique: true })
  email: string;

  @Column({ type: "varchar", length: 120 })
  password: string;

  @Column({ type: "boolean", default: false })
  admin: boolean | null | undefined;

  @CreateDateColumn({ type: "date" })
  createdAt?: Date | string;

  @UpdateDateColumn({ type: "date" })
  updatedAt?: Date | string | null | undefined;

  @DeleteDateColumn({ type: "date", nullable: true })
  deletedAt?: Date | string | null | undefined;
  
  @OneToMany(() => Schedule,(schedule)=>{schedule.user})
  schedules: Schedule[];
}
