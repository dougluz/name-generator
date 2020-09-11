import { ApolloServer } from "apollo-server"
import { GraphQLSchema } from "graphql"

class Server {
  public server: ApolloServer
  constructor(schema: GraphQLSchema) {
    this.server = new ApolloServer({ schema })
  }
}

export default Server