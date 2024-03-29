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
            <button onclick="onBookRead('${book.id}')" class="read">Read</button>
            <button onclick="onUpdateBook('${book.id}','${book.price}')" class="update">Update</button>
            <button onclick="onRemoveBook('${book.id}')" class="delete">Delete</button>
        </td>
    </tr>`)


    const elBooksTable = document.querySelector('.books-table')
    elBooksTable.innerHTML = strHTML + strHTMLcontinue.join('')

    renderStats()
}

function onBookRead(bookId) {

    const book = bookRead(bookId)

    const elBookRead = document.querySelector('.book-details')
    const elSpan = elBookRead.querySelector('h2 span')

    const elPic = elBookRead.querySelector('.pic')
    const elPrice = elBookRead.querySelector('.price')
    const elId = elBookRead.querySelector('.id')




    elSpan.innerText = book.title
    elPic.innerHTML = book.imgUrl
    elPrice.innerText = book.price
    elId.innerText = book.id


    elBookRead.showModal()
}

function onRemoveBook(bookId) {
    BookChange(bookId, 'delete')
    removeBook(bookId)
    renderBooks()
}

function onUpdateBook(bookId, price) {

    const newPrice = +prompt('update the price', price)
    if(sanitise(newPrice) === 'NaN') return alert('price needs to be a number!')
    updatePrice(bookId, newPrice)
    
    renderBooks()
}

function onAddBook() {
    const title = prompt('The book title?')
    const price = +prompt('The book price?')
   
    if (title === '' || sanitise(price) === 'NaN') return alert('cant add book without price or title!')
    var bookID = AddBook(title, price)
    BookChange(bookID, 'Add book')
    renderBooks()
}

function onInput() {
    const input = document.querySelector("input")
    setFilterBy(input.value)
    renderBooks()
}

function onClear() {

    setFilterBy('')
    renderBooks()
}

function BookChange(bookId, txt) {

    const book = bookRead(bookId)

    const elBookUpdate = document.querySelector('.book-update')
    const elSpan = elBookUpdate.querySelector('h2 span')
    const elSpanContent = elBookUpdate.querySelector('.content span')

    const elPrice = elBookUpdate.querySelector('.price')
    const elId = elBookUpdate.querySelector('.id')

    elSpanContent.innerText = txt
    elSpan.innerText = book.title
    elPrice.innerText = book.price
    elId.innerText = book.id


    elBookUpdate.showModal()

    setTimeout(() => {
        elBookUpdate.close()
    }, 2000)
}

function renderStats() {

    const elExpensive = document.querySelector('.total-expensive')
    const elAverage = document.querySelector('.total-average')
    const elCheap = document.querySelector('.total-cheap')

    elExpensive.innerText = totalExpensive()

    elAverage.innerText = totalAverage()

    elCheap.innerText = totalCheap()


}