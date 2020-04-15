# books-apollo-graphql

## A basic API about Books made with Apollo GraphQL

## Observations

-   This API uses a JSON Database because it's easy and fast to develop without troubles

## Steps to use

-   `git clone https://github.com/TeijiW/books-apollo-graphql`
-   `cd books-apollo-graphql`
-   `npm install`
-   `npm start`
-   Access http://localhost:4000 and use playground, or make a request with an API tool (like Insomnia or Postman)

**warning** - If you don't want use the default command to start the application, is very important not do the `database.js` file stay in loop

## Examples of use

-   Get a list of all books

```graphql
{
  getBooks {
    id
    author
    title
  }
}
```

-   Get a book by id

```graphql
{
  getBook(id: 0) {
    id
    author
    title
  }
}
```

-   Create a book

```graphql
mutation {
  addBook(title: "Clean Code", author: "Martin Fowler") {
    title
    author
  }
}
```

-   Update a book

```graphql
mutation {
  updateBook(id: 1, title: "Clean Code", author: "Martin Fowler") {
    id
    title
    author
  }
}
```

-   Remove a book

```graphql
mutation {
  removeBook(id: 0) {
    id
    title
    author
  }
}
```
