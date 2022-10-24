/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

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
    movieList = document.querySelector('.promo__interactive-list');

adv.forEach(item => {
    item.remove();
});  //1) Удалить все рекламные блоки со страницы (правая часть сайта)

genre.textContent = 'ДРАМА'; //2) Изменить жанр фильма, поменять "комедия" на "драма"

poster.style.backgroundImage = 'url("img/bg.jpg")'; //3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.

movieList.innerHTML = ""; //очищаем блок с названиями фильмов, записывая пустую строку

movieDB.movies.sort(); //выполняем сортировку по алфавиту базы

movieDB.movies.forEach((film, i) => {
    movieList.innerHTML += `
        <li class="promo__interactive-item">${i+1} ${film}
            <div class="delete"></div>
        </li>
`;
});
