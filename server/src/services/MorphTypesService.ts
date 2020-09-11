import { MorphType } from "../models/MorphType";
import { MorphTypeDTO } from "../resolvers/dto/MorphTypeDTO";

class MorphTypeService {
  async findAll() {
    const morphesType = await MorphType.find()
    return morphesType
  }

  async findById(id: number) {
    const morphType = await MorphType.findOne({ where: { id } })
    return morphType
  }

  async save(morph: MorphTypeDTO) {
    const newMorphType = MorphType.create(morph)
    await newMorphType.save()
    return newMorphType
  }

  async delete(id: number) {
    const morphType = await MorphType.findOne({ where: { id } })
    await morphType?.remove()
    return true
  }
}

export default new MorphTypeService()