const database = require("./database")()
database.start()
const books = database.get()

const resolvers = {
	Query: {
		getBooks: () => books,
		getBook: (_, { id }) => database.getById(id),
	},
	Mutation: {
		addBook: (_, { title, author }) => {
			const bookCreated = database.insert(title, author)
			return bookCreated
		},
		removeBook: (_, { id }) => {
			const bookRemoved = database.remove(id)
			return bookRemoved
		},
		updateBook: (_, bookToUpdate) => {
			const book = database.update(bookToUpdate)
			return book
		},
	},
}

module.exports = resolvers
