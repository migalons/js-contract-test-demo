const book = require('./book')
const nock = require('nock')
const chai = require('chai')
chai.use(require('chai-as-promised'))
chai.should()

const server = "http://localhost:3000"

let books = [
  {
    title: "It",
    author: "Stephen King",
    year: 1992,
    price: 10.25,
    currency: "euro",
    stars: 3
  }]

describe('book', () => {

  describe('get', () => {

    it('should retrieve a book based on its index', () => {

      nock(server)
        .log(console.log)
        .get('/book/0')
        .reply(200, books[0])

      return book.get(0).should.eventually.deep.equal(books[0])

    });

    it('should retrieve all books when no index is provided', () => {
      nock(server)
        .get('/book')
        .reply(200, books)
      return book.get().should.eventually.deep.equal(books)
    });
  });

});
