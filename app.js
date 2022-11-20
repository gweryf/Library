
const createbutton = document.querySelector(".create")
const popup = document.querySelector('.popup')
const subpop = document.querySelector('.popupsub')

createbutton.addEventListener('click',()=>{
    popup.classList.toggle('open-popup')
})

subpop.addEventListener('click',()=>{
    popup.classList.toggle('open-popup')
    addBookToLibrary()
})

let mylibrary = []

function book (title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages 
    this.read = read

}

function addBookToLibrary () {
    event.preventDefault()
    title = document.getElementById('bookname').value
    author = document.getElementById('author').value
    pages = document.getElementById('pagenum').value
    read = document.getElementById('read').value
    let newbook = new book(title, author, pages, read)
    mylibrary.push(newbook)
    console.log(mylibrary)
    form.reset()
}

