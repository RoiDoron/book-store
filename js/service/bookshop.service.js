'use strict'

var gBooks
_createBooks()




function getBooks() {
    return gBooks
}

function removeBook(bookId) {
    const bookIdx = gBooks.findIndex(book => book.id === bookId)
    gBooks.splice(bookIdx, 1)


}

function updatePrice(bookId, newPrice) {
    const bookIdx = gBooks.findIndex(book => book.id === bookId)
    gBooks[bookIdx].price = newPrice
}

function AddBook(title,price){
const newBook = _createBook(title,price)
gBooks.unshift(newBook)
}



function _createBooks() {
    gBooks = [
        _createBook('The adventures of Lori Ipsi', 120),
        _createBook('The note book', 100),
        _createBook('The hobbit', 75),
        _createBook('World atlas', 220)
    ]
}
console.log()
function _createBook(title, price) {
    return {
        id: makeId(),
        title: title,
        price: price,
        imgUrl: 'img'
    }
}