import { Field, InputType } from "type-graphql";

@InputType()
export class MorphTypeDTO {
  @Field()
  title: string
}