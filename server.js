const { ApolloServer, gql } = require("apollo-server")
const resolvers = require("./resolvers")

const typeDefs = gql`
	type Book {
		id: Int
		title: String
		author: String
	}
	type Query {
		getBooks: [Book]
		getBook(id: Int): Book
	}
	type Mutation {
		addBook(title: String!, author: String!): Book
		removeBook(id: Int!): Book
		updateBook(id: Int!, title: String!, author: String!): Book
	}
`

const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({ url }) => {
	console.log(`Server is running at ${url}`)
})
