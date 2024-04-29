function searchBook() {
    const searchInput = document.getElementById('searchInput').value.trim();

    // Проверка на наличие введенных символов
    if (searchInput.length === 0) {
        clearBookList();
        return;
    }

    // Здесь должен быть код отправки запроса на сервер с введенным текстом поиска
    // В данном примере просто создадим массив объектов книг для демонстрации
    const books = [
        {
            title: "Ертең біз жол жүреміз",
            author: "Мұқағали Мақатаев ",
            image: "war_and_peace.jpg" // путь к изображению книги
        },
        {
            title: "Көшпенділер",
            author: "Ӏлияс Есенберлин",
            image: "crime_and_punishment.jpg" // путь к изображению книги
        },
        {
            title: "Азат елдің ар-намысы – Ата Заң",
            author: "Айбатыр Сейтақ",
            image: "crime_and_punishment.jpg" // путь к изображению книги
        },
        {
            title: "Жас дәурен",
            author: "Қасым Аманжолов",
            image: "crime_and_punishment.jpg" // путь к изображению книги
        },
        {
            title: "Уақыт қайтарымы",
            author: "Сахиев Жүніс",
            image: "crime_and_punishment.jpg" // путь к изображению книги
        },
        {
            title: "Жетінші  толқын",
            author: "Медеу Сәрсеке",
            image: "crime_and_punishment.jpg" // путь к изображению книги
        },


        {
            title: "Қарағанды",
            author: "Ғабиден Мұстафин ",
            image: "crime_and_punishment.jpg" // путь к изображению книги
        },
        {
            title: "Әпке драмасы",
            author: "Дулат Исабеков",
            image: "crime_and_punishment.jpg" // путь к изображению книги
        },
        {
            title: "Қан мен тер",
            author: "Әбдіжәміл Нұрпейісов ",
            image: "crime_and_punishment.jpg" // путь к изображению книги
        },
        {
            title: "Өркениеттің адасуы",
            author: "Мұхтар Шаханов  ",
            image: "crime_and_punishment.jpg" // путь к изображению книги
        },
        {
            title: "Он алты жасар чемпион",
            author: "Бердібек Соқпақбаев",
            image: "crime_and_punishment.jpg" // путь к изображению книги
        },




        {
            title: "Қаздар қайтып барады",
            author: "Қабдеш Жұмаділов ",
            image: "crime_and_punishment.jpg" // путь к изображению книги
        },
        {
            title: "Бәйтерек",
            author: "Несіпбек Айтұлы ",
            image: "crime_and_punishment.jpg" // путь к изображению книги
        },
        {
            title: "Көкшетау",
            author: "Сәкен Сейфуллин ",
            image: "crime_and_punishment.jpg" // путь к изображению книги
        },
        {
            title: "Қорғансыздың күні",
            author: "Мұхтар Әуезов ",
            image: "crime_and_punishment.jpg" // путь к изображению книги
        },
        {
            title: "Преступление и наказание",
            author: "Федор Достоевский",
            image: "crime_and_punishment.jpg" // путь к изображению книги
        },
        {
            title: "Преступление и наказание",
            author: "Федор Достоевский",
            image: "crime_and_punishment.jpg" // путь к изображению книги
        },
        {
            title: "Преступление и наказание",
            author: "Федор Достоевский",
            image: "crime_and_punishment.jpg" // путь к изображению книги
        },
        {
            title: "Преступление и наказание",
            author: "Федор Достоевский",
            image: "crime_and_punishment.jpg" // путь к изображению книги
        },
        // Добавьте другие книги по вашему усмотрению
    ];

    // Фильтрация книг по введенному тексту
    const filteredBooks = books.filter(book => 
        book.title.toLowerCase().includes(searchInput.toLowerCase()) ||
        book.author.toLowerCase().includes(searchInput.toLowerCase())
    );

    displayBooks(filteredBooks);
}

// Функция для очистки списка книг
function clearBookList() {
    const bookInfoDiv = document.getElementById('bookInfo');
    bookInfoDiv.innerHTML = '';
}


function displayBooks(books) {
    clearBookList();

    const bookInfoDiv = document.getElementById('bookInfo');

    books.forEach(book => {
        const bookTitle = document.createElement('h2');
        bookTitle.textContent = book.title;

        const bookAuthor = document.createElement('p');
        bookAuthor.textContent = `Автор: ${book.author}`;

        const bookYear = document.createElement('p');
        bookYear.textContent = `Год издания: ${book.year}`;

        const bookImage = document.createElement('img');
        bookImage.src = book.image;
        bookImage.alt = "Изображение книги";

        // Создание ссылки для загрузки книги
        const downloadLink = document.createElement('a');
        downloadLink.href = book.downloadLink; // Замените "book.downloadLink" на ссылку на файл книги
        downloadLink.textContent = "Скачать";

        // Создание ссылки для чтения книги
        const readLink = document.createElement('a');
        readLink.href = book.readLink; // Замените "book.readLink" на ссылку на страницу чтения книги
        readLink.textContent = "Читать онлайн";

        const bookContainer = document.createElement('div');
        bookContainer.classList.add('book-container');
        bookContainer.appendChild(bookTitle);
        bookContainer.appendChild(bookAuthor);
        bookContainer.appendChild(bookYear);
        bookContainer.appendChild(bookImage);
        bookContainer.appendChild(downloadLink);
        bookContainer.appendChild(readLink);

        bookInfoDiv.appendChild(bookContainer);
    });

    // Показать информацию о книгах
    bookInfoDiv.classList.remove('hidden');
}