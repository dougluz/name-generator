import { Resolver, Query, Arg, Mutation } from 'type-graphql';
import { MorphType } from '../models/MorphType';
import MorphTypeService from '../services/MorphTypesService';
import { MorphTypeDTO } from './dto/MorphTypeDTO';

@Resolver()
export class MorphTypeResolver {
  @Query(() => [MorphType])
  morphTypes () {
    return MorphTypeService.findAll()
  }

  @Query(() => MorphType)
  morphType(@Arg('id') id: number) {
    return MorphTypeService.findById(id)
  }

  @Mutation(() => MorphType)
  createMorphType(@Arg('data') data: MorphTypeDTO) {
    return MorphTypeService.save(data)
  }

  @Mutation(() => Boolean)
  deleteMorphType(@Arg('id') id: number) {
    return MorphTypeService.delete(id)
  }
}