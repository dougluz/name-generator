import { Resolver, Query } from 'type-graphql';
import { Morph } from '../models/Morph';

@Resolver()
export class MorphResolver {
  @Query(() => [Morph])
  morphes () {
    return []
  }
}