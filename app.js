
//selecting the button to create directry entry of the book
const createbutton = document.querySelector(".create")

//selecting the popup form that will be used to make it visible/invisible
const popup = document.querySelector('.popup')

//selecting the submit button in the popup form that will push entries in the array
const subpop = document.querySelector('.popupsub')

//selecting the area where the carrds will b placed
const canvas = document.querySelector('.books')

//this variable is used to generate a new id for each delte button in the card
let idvar = 0
let idread = 0
let idunread = 0

createbutton.addEventListener('click',()=>{
    popup.classList.toggle('open-popup')
})

subpop.addEventListener('click',()=>{
    popup.classList.toggle('open-popup')
    addBookToLibrary()
    addCard()
    form.reset()
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
}

function addCard(){
    const card = document.createElement('div')
    card.className = 'card'


    if (document.getElementById('read').checked) {
        card.innerHTML = `
        <h3>${mylibrary[mylibrary.length-1].title}</h3>
        <p>${mylibrary[mylibrary.length-1].author}</p>
        <p>${mylibrary[mylibrary.length-1].pages} pg</p>
        <button class='readbut' id='readbut-${idvar}'>Read</button>
        <button class='cardel' id='cardel-${idvar}'>Delete</button>
        ` ;
    }
    else {
        card.innerHTML = `
        <h3>${mylibrary[mylibrary.length-1].title}</h3>
        <p>${mylibrary[mylibrary.length-1].author}</p>
        <p>${mylibrary[mylibrary.length-1].pages} pg</p>
        <button class='notreadbut' id='readbut-${idvar}'>Not Read</button>
        <button class='cardel' id='cardel-${idvar}'>Delete</button>
        ` ;
    }
    
    canvas.appendChild(card)
    document.getElementById('read').reset

    const delbut = document.querySelector('#cardel-'+idvar)

    delbut.addEventListener('click', (e)=>{
        console.log(e.target);
        mylibrary.pop()
        canvas.removeChild(card)
    })
    const reading = document.getElementById('readbut-'+idvar)
    reading.addEventListener('click',()=>{
        if(reading.innerText=='Read'){
            reading.classList.remove('readbut')
            reading.classList.add('notreadbut')
            reading.innerText = 'Not Read'
        } else {
            reading.classList.remove('notreadbut')
            reading.classList.add('readbut')
            reading.innerText = 'Read'
        }
    })
    idvar++

    
}
