import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { ObjectType, ID, Field } from "type-graphql";
import { Morph } from "./Morph";

@Entity()
@ObjectType()
export class MorphType extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: Number

  @Field(() => String)
  @Column()
  title: string

  @OneToMany(type => Morph, morph => morph.type)
  morphes: Morph[];
}