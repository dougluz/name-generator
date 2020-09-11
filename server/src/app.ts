import 'reflect-metadata'
import DatabaseConnection from './database/DatabaseConnection'
import Server from './server'

class App {
  async main() {
    const database = new DatabaseConnection()
    const schema = await database.genrateSchema()
    const apolloServer = new Server(schema)

    apolloServer.server.listen(4000).then(() => console.log('servidor rodando'))
  }
}

const app = new App

app.main()