'use strict'


 function onInit(){
    renderBooks()
 }

 function renderBooks(){
    const books = getBooks()

    const strHTML = '<tr><th>title</th><th>price</th><th>action</th></tr>'

   const strHTMLcontinue = books.map(book=> 
        `<tr>
        <td>${book.title}</td>
        <td>${book.price}</td>
        <td>
            <button class="read">Read</button>
            <button class="update">Update</button>
            <button class="delete">Delete</button>
        </td>
    </tr>`)
        
    console.log(strHTMLcontinue.join(''))
        const elBooksTable =document.querySelector('.books-table')
        elBooksTable.innerHTML =  strHTML+strHTMLcontinue.join('')
 }