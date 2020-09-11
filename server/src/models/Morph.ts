import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'
import { ObjectType, Field, ID } from 'type-graphql';
import { MorphType } from './MorphType';

@Entity()
@ObjectType()
export class Morph extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: Number

  @Field(() => String)
  @Column()
  title: string

  @Field(() => MorphType)
  @ManyToOne(type => MorphType, morphType => morphType.id)
  type: MorphType
}
