import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  DeleteDateColumn,
  UpdateDateColumn,
  OneToMany,
  ManyToOne,
  BeforeInsert,
  BeforeUpdate,
} from "typeorm";
import { Schedule } from "./scheduler.entity";
import { getRounds, hashSync } from "bcryptjs";

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
  admin: boolean;

  @CreateDateColumn({ type: "date" })
  createdAt?: string;

  @UpdateDateColumn({ type: "date" })
  updatedAt?: string | null | undefined;

  @DeleteDateColumn({ type: "date", nullable: true })
  deletedAt?: string | null | undefined;

  @OneToMany(() => Schedule,(schedule) => {schedule.user;})
  schedules: Schedule[];

  @BeforeInsert()
  @BeforeUpdate()
  hashPassword() {
    const wasEncrypted = getRounds(this.password);
    if (!wasEncrypted) {
      this.password = hashSync(this.password, 10);
    }
  }

}
