const books = [
    {
        title: "1984",
        author: "George Orwell",
        genre: "Dystopian",
        year: 1949,
        image: "https://m.media-amazon.com/images/I/71wANojhEKL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        genre: "Classic",
        year: 1960,
        image: "https://static.yakaboo.ua/media/cloudflare/product/webp/600x840/8/1/816jexyardl.jpg"
    },
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        genre: "Classic",
        year: 1925,
        image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1650033243i/41733839.jpg"
    },
    {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        genre: "Fantasy",
        year: 1937,
        image: "https://static.yakaboo.ua/media/cloudflare/product/webp/600x840/7/1/7103gcfdgdl.jpg"
    },
    {
        title: "Harry Potter and the Sorcerer's Stone",
        author: "J.K. Rowling",
        genre: "Fantasy",
        year: 1997,
        image: "https://m.media-amazon.com/images/I/91wKDODkgWL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        title: "Brave New World",
        author: "Aldous Huxley",
        genre: "Dystopian",
        year: 1932,
        image: "https://static.yakaboo.ua/media/catalog/product/9/7/9780099477464.jpg"
    }
];

const genreFilter = document.getElementById('genreFilter');
const genres = [...new Set(books.map(book => book.genre))];
genres.forEach(genre => {
    const option = document.createElement('option');
    option.value = genre;
    option.textContent = genre;
    genreFilter.appendChild(option);
});

function displayBooks(bookList) {
    const catalog = document.getElementById('bookCatalog');
    catalog.innerHTML = '';

    bookList.forEach(book => {
        const col = document.createElement('div');
        col.className = 'col';

        col.innerHTML = `
            <div class="card h-100">
                <img src="${book.image}" class="card-img-top" alt="${book.title}">
                <div class="card-body">
                    <h5 class="card-title">${book.title}</h5>
                    <p class="card-text"><strong>Author:</strong> ${book.author}</p>
                    <p class="card-text"><strong>Genre:</strong> ${book.genre}</p>
                    <p class="card-text"><strong>Year:</strong> ${book.year}</p>
                </div>
            </div>
        `;

        catalog.appendChild(col);
    });
}

displayBooks(books);

document.getElementById('searchInput').addEventListener('input', () => {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const filteredBooks = books.filter(book => book.title.toLowerCase().includes(searchTerm));
    displayBooks(filteredBooks);
});

genreFilter.addEventListener('change', () => {
    const selectedGenre = genreFilter.value;
    const filteredBooks = selectedGenre === 'all' ? books : books.filter(book => book.genre === selectedGenre);
    displayBooks(filteredBooks);
});
