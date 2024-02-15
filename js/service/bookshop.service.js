'use strict'

var gBooks
_createBooks()
console.log(gBooks)



function getBooks(){
    return gBooks
}



function _createBooks(){
    gBooks =[
        _createBook('The adventures of Lori Ipsi',120),
        _createBook('The note book',100),
        _createBook('The hobbit',75),
        _createBook('World atlas',220)
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