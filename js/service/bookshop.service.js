'use strict'

const BOOK_DB = 'booksDB'
var gBooks
var gFilter = ''
_createBooks()




function getBooks() {
    if (!gFilter) return gBooks
    return gBooks.filter(book => book.title.toLowerCase().includes(gFilter))
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
    return newBook.id
}

function bookRead(bookId) {
    const book = gBooks.find(book => book.id === bookId)
    return book
}

function _createBooks() {
    gBooks = loadFromStorage('booksDB')

    if (!gBooks) {
       
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

function setFilterBy(input) {
    gFilter = input.toLowerCase()

}

function totalExpensive(){
return gBooks.filter(book=> book.price > 200).length

}

function totalAverage(){
    return gBooks.filter(book=> book.price < 200 && book.price >80).length
}

function totalCheap(){
    return gBooks.filter(book=> book.price < 80).length
}
