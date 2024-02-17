'use strict'

const BOOK_DB = 'booksDB'
var gBooks
_createBooks()




function getBooks() {
    return gBooks
}

function removeBook(bookId) {
    const bookIdx = gBooks.findIndex(book => book.id === bookId)
    gBooks.splice(bookIdx, 1)
    _saveBooks()


}

function updatePrice(bookId, newPrice) {
    const bookIdx = gBooks.findIndex(book => book.id === bookId)
    gBooks[bookIdx].price = newPrice
    _saveBooks()
}

function AddBook(title, price) {
    const newBook = _createBook(title, price)
    gBooks.unshift(newBook)
    _saveBooks()
}

function bookRead(bookId) {
    const book = gBooks.find(book => book.id === bookId)
    return book
}



function _createBooks() {
    gBooks = loadFromStorage('booksDB')

    if (!gBooks) {
        console.log('hi')
        gBooks = [
            _createBook('The adventures of Lori Ipsi', 120),
            _createBook('The note book', 100),
            _createBook('The hobbit', 75),
            _createBook('World atlas', 220)
        ]
        _saveBooks()
    }
}

function _createBook(title, price) {
    return {
        id: makeId(),
        title: title,
        price: price,
        imgUrl: getRandomPicture()
    }
}

function getRandomPicture() {
    const pic = ['<img src="imag/atlas.jpg">',
        '<img src="imag/harry.webp">',
        '<img src="imag/hobit.jpg">',
        '<img src="imag/sharma.webp">']

    const num = getRandomInt(0, 4)

    return pic[num]

}

function _saveBooks() {
    saveToStorage(BOOK_DB, gBooks)
}