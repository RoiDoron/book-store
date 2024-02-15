'use strict'


function onInit() {
    renderBooks()
}

function renderBooks() {
    const books = getBooks()

    const strHTML = '<tr><th>title</th><th>price</th><th>action</th></tr>'

    const strHTMLcontinue = books.map(book =>
        `<tr>
        <td>${book.title}</td>
        <td>${book.price}</td>
        <td>
            <button class="read">Read</button>
            <button onclick="onUpdateBook('${book.id}','${book.price}')" class="update">Update</button>
            <button onclick="onRemoveBook('${book.id}')" class="delete">Delete</button>
        </td>
    </tr>`)


    const elBooksTable = document.querySelector('.books-table')
    elBooksTable.innerHTML = strHTML + strHTMLcontinue.join('')
}

function onRemoveBook(bookId) {
    removeBook(bookId)
    renderBooks()
}

function onUpdateBook(bookId,price) {
    
    const newPrice = prompt('update the price',price)
    updatePrice(bookId,newPrice)
    renderBooks()
}

function onAddBook(){
    const title = prompt('The book title?')
    const price = prompt('The book price?')
    AddBook(title,price)
    renderBooks()
}