
// fetch(`${baseUrl}javascript+programming+book`)
//     .then(response => response.json())
//     .then(data => {
//         const books = data.items
//         books.forEach(book => {
//             const volumeInfo = book.volumeInfo
//             console.log(volumeInfo.title)
//             console.log(volumeInfo.subtitle)
//             console.log(volumeInfo.authors)
//             console.log(volumeInfo.publishedDate)
//             console.log(volumeInfo.imageLinks.smallThumbnail)
//             console.log("")
//         })
//     })

const languages = document.querySelectorAll(".languages img")
languages.forEach( lang => {
    lang.addEventListener('click', (e) => {
        document.querySelector('.languages').style.display = "none"
        document.querySelector('.hidePoison').style.display = "none"
        const parentElem = e.target.parentElement
        const searchTerm = parentElem.querySelector('p').textContent
        details(searchTerm)
    })
})

function details (searchTerm) {
    const baseUrl = "https://www.googleapis.com/books/v1/volumes?q="
    fetch(`${baseUrl}${searchTerm}+programming+book`)
        .then(response => response.json())
        .then(data => {
            const books = data.items
            const bookDescription = document.querySelector('.bookDescription')
            // const btn = document.createElement('a')
            // btn.textContent = 'Go back'
            // btn.addEventListener('click', (e) => console.log(e.target))
            // bookDescription.appendChild(btn)
            books.forEach(book => {
                const volumeInfo = book.volumeInfo
                bookDescription.innerHTML += `
                <div class="book">
                    <p class="title">${volumeInfo.title}</p>
                    <img src=${volumeInfo.imageLinks.smallThumbnail} />
                    <p>Author(s): ${volumeInfo.authors}</p>
                    <p>Published: ${volumeInfo.publishedDate}</p>
                </div>
                `
            })
        })
}