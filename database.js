const lowdb = require("lowdb")
const FileSync = require("lowdb/adapters/FileSync")
const adapter = new FileSync("database.json")

const db = lowdb(adapter)
db.set("settings.toggledOption", true).write
const database = () => {
	const start = () => db.defaults({ books: [] }).write()

	const insert = (title, author) => {
		try {
			let booksArray = db.get("books").value()
			let lastId = -1
			if (booksArray.length > 0) {
				lastId = booksArray[booksArray.length - 1].id
			}
			db.get("books")
				.push({ id: lastId + 1, title, author })
				.write()
			booksArray = db.get("books").value()
			return booksArray[booksArray.length - 1]
		} catch (error) {
			throw new Error(error)
		}
	}

	const remove = (id) => {
		const bookToRemove = db.get("books").find({ id }).value()
		console.log(bookToRemove)
		if (!bookToRemove) {
			return null
		}
		db.get("books").remove(bookToRemove).write()
		return bookToRemove
	}

	const update = ({ id, title, author }) => {
		const book = { id, title, author }
		const bookToUpdate = db.get("books").find({ id }).value()
		if (!bookToUpdate) {
			throw new Error("Not Found")
		}
		db.get("books").find({ id }).assign(book).value()
		return book
	}

	const get = () => db.get("books").value()

	const getById = (id) => db.get("books").find({ id }).value()

	const reset = () => db.get("books").remove().value()

	return { start, reset, get, getById, update, insert, remove }
}

module.exports = database
