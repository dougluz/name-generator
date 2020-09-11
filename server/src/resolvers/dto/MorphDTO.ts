import { Field, InputType } from "type-graphql";

@InputType()
export class MorphDTO {
  @Field()
  title: string

  @Field()
  type: Number
}