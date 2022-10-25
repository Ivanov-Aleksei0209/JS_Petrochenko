/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

document.addEventListener('DOMContentLoaded', () => {

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    const adv = document.querySelectorAll('.promo__adv img'),
        poster = document.querySelector('.promo__bg'),
        genre = poster.querySelector('.promo__genre'),
        movieList = document.querySelector('.promo__interactive-list'),
        addForm = document.querySelector('form.add'),
        addInput = addForm.querySelector('.adding__input'),
        checkbox = addForm.querySelector('[type="checkbox"]');
    
    addForm.addEventListener('submit', (event) => {
        event.preventDefault(); // отмена стандартного поведения браузера при нажатии кнопки "подтвердить"

        let newFilm = addInput.value; // присвоение переменной того, что написал пользователь в форме
        const favorite = checkbox.checked; // присвоение переменной значения нажата галочка или нет

        if (newFilm) { // проверка условия чтобы строка была не пустой

            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 22)}...`; // проверка длины вводимого текста
            }

            if (favorite) {
                alert("Добавляем любимый фильм");
            }

            movieDB.movies.push(newFilm); // добавление в базу данных того, что ввел пользователь
            sortArr(movieDB.movies); // сортировка фильмов по алфавиту
    
            createMovieList(movieDB.movies, movieList); // создает список фильмов
        }
        

        addForm.reset();
    });
   
    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    }; 

    const makeChanges = () => {
        genre.textContent = 'ДРАМА'; // Изменить жанр фильма, поменять "комедия" на "драма"
    
        poster.style.backgroundImage = 'url("img/bg.jpg")'; // Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
    };

    const sortArr = (arr) => {
        arr.sort();
    };
    
    function createMovieList(films, parent) {
        parent.innerHTML = ""; //очищаем блок с названиями фильмов, записывая пустую строку
        sortArr(films); //выполняем сортировку по алфавиту базы

        films.forEach((film, i) => {
            parent.innerHTML += `
                <li class="promo__interactive-item">${i+1} ${film}
                    <div class="delete"></div>
                </li>
        `;
        });  

        document.querySelectorAll('.delete').forEach((btn, i) => { // получаем псевдомассив класса .delete и перебираем его используя callback-функцию
            btn.addEventListener('click', () => { // при создании события клик
                btn.parentElement.remove();   // удаляем родительский элемент
                movieDB.movies.splice(i, 1);  // удаляем эту же строку из объекта (базы данных)

                createMovieList(films, parent); // перестраиваем новый список

            });
        });
    }

    deleteAdv(adv); // Удаляет все рекламные блоки со страницы (правая часть сайта)
    makeChanges(); // Делает изменения на странице
   
    createMovieList(movieDB.movies, movieList); // создает список фильмов
});
