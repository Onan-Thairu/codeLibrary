function reloadFunc () {
    location.reload()
}

document.addEventListener('DOMContentLoaded', () => {
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
                const div = document.createElement('div')
                div.className = 'goBack'
                bookDescription.appendChild(div)
                const goBackDiv = document.querySelector('.goBack')
                goBackDiv.innerHTML = `
                    <button className='btn' onClick="reloadFunc()">Home</button>
                `
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
})