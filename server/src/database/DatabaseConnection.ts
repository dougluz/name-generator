import { createConnection } from "typeorm";
import { buildSchema } from 'type-graphql'
import { MorphTypeResolver } from "../resolvers/MorphTypeResolver";

class DatabaseConnection {
  constructor() {
    this.connection()
  }

  async connection () {
    await createConnection()
  }

  async genrateSchema () {
    try {
      const schema = await buildSchema({
        resolvers: [MorphTypeResolver]
      })
      return schema
    } catch (error) {
      throw new Error(error)
    }
  }
}

export default DatabaseConnection