
document.addEventListener('DOMContentLoaded', () => {
    const bibleContainer = document.getElementById('bibleContainer');

    // Function to fetch Bible data
    const fetchBibleData = () => {
        fetch('https://www.abibliadigital.com.br/api/books')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                // Display Bible data on the webpage
                data.forEach(book => {
                    const bookCard = document.createElement('div');
                    bookCard.classList.add('col-md-4', 'mb-4');
                    bookCard.innerHTML = `
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">${book.name}</h5>
                                <p class="card-text">Chapters: ${book.chapters}</p>
                                <p class="card-text">Group: ${book.group}</p>
                            </div>
                        </div>
                    `;
                    bibleContainer.appendChild(bookCard);
                });
            })
            .catch(error => {
                console.error('Error fetching Bible data:', error);
                bibleContainer.innerHTML = '<p class="text-danger">Failed to fetch Bible data. Please try again later.</p>';
            });
    };

    // Fetch Bible data on page load
    fetchBibleData();
});
