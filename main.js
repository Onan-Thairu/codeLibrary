const baseUrl = "https://www.googleapis.com/books/v1/volumes?q="
fetch(`${baseUrl}javascript+programming+book`)
    .then(response => response.json())
    .then(data => {
        const books = data.items
        books.forEach(book => {
            const volumeInfo = book.volumeInfo
            console.log(volumeInfo.title)
            console.log(volumeInfo.subtitle)
            console.log(volumeInfo.authors)
            console.log(volumeInfo.publishedDate)
            console.log(volumeInfo.imageLinks.smallThumbnail)
            console.log("")
        })
    })