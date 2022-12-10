
//selecting the button to create directry entry of the book
const createbutton = document.querySelector(".create")

//selecting the popup form that will be used to make it visible/invisible
const popup = document.querySelector('.popup')

//selecting the submit button in the popup form that will push entries in the array
const subpop = document.querySelector('.popupsub')

//selecting the area where the carrds will b placed
const canvas = document.querySelector('.books')

createbutton.addEventListener('click',()=>{
    popup.classList.toggle('open-popup')
})

subpop.addEventListener('click',()=>{
    popup.classList.toggle('open-popup')
    addBookToLibrary()
    addCard()
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

function addCard(){
    const card = document.createElement('div')
    card.className = 'card'

    card.innerHTML = `
    <h3>${mylibrary[mylibrary.length-1].title}</h3>
    <p>${mylibrary[mylibrary.length-1].author}</p>
    <p>${mylibrary[mylibrary.length-1].pages} pg</p>
    <button class='cardel'>Delete</button>
    ` ;
    canvas.appendChild(card)

    const delbut = card.querySelector('.cardel')

    delbut.addEventListener('click', ()=>{
        delcard()
    })
}

function delcard(){
    mylibrary.pop()
    canvas.removeChild(card)
}