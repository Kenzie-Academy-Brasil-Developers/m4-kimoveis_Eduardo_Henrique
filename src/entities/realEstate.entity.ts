import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

import { Schedule } from "./scheduler.entity";
import { Address } from "./address.entity";
import { Category } from "./categories.entity";

@Entity("real_estate")
export class RealEstate {
  @PrimaryGeneratedColumn("increment")
  id: number;
  
  @Column({ type: "varchar" })
  sold: boolean;

  @Column({
    type: "decimal",
    precision: 10,
    scale: 2,
    nullable: false,
    default: 0,
  })
  value: number | string;

  @Column({ type: "integer" })
  size: number;

  @CreateDateColumn({ type: "date" })
  createdAt: Date | string;

  @UpdateDateColumn({ type: "date" })
  updatedAt: Date | string;
  
  @OneToOne(() => Address, (address) => address.realEstate, { cascade: true })
  @JoinColumn()
  address: Address;

  @ManyToOne(() => Category, (category) => category.realEstates)
  category: Category;


  @OneToMany(() => Schedule, (schedule) => schedule.realEstate)
  schedules: Schedule[];
}
