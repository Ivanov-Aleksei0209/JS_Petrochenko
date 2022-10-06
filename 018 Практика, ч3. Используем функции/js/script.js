/* Задание на урок 1 (12):

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */
/* Задание на урок 2 (15):

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

/* Задание на урок 3 (18):

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

// const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
let numberOfFilms;
// console.log(numberOfFilms);

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

/* const lastFilm1 = prompt("Назовите один из последних фильмов?", ""),
    scoreFilm1 = prompt("На сколько оцените его?", ""),
    lastFilm2 = prompt("Назовите один из последних фильмов?", ""),
    scoreFilm2 = prompt("На сколько оцените его?", "");

personalMovieDB.movies[lastFilm1] = scoreFilm1;
personalMovieDB.movies[lastFilm2] = scoreFilm2; */

/* for (let i = 0; i < 2; i++) {
    const lastFilm = prompt("Назовите один из последних фильмов?", ""),
        scoreFilm = prompt("На сколько оцените его?", "");

    if (lastFilm != null && scoreFilm != null && lastFilm != "" && scoreFilm != "" && lastFilm.length < 50) {
        personalMovieDB.movies[lastFilm] = scoreFilm;
        console.log('Done');
    } else {
        console.log('error');
        i--;
    }
} */

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const lastFilm = prompt("Назовите один из последних фильмов?", ""),
            scoreFilm = prompt("На сколько оцените его?", "");

        if (lastFilm != null && scoreFilm != null && lastFilm != "" && scoreFilm != "" && lastFilm.length < 50) {
            personalMovieDB.movies[lastFilm] = scoreFilm;
            console.log('Done');
        } else {
            console.log('error');
            i--;
        }
    }
}

rememberMyFilms();

//Второй способ задания цикла
/* let i = 0;
while (i < 2) {
    const lastFilm = prompt("Назовите один из последних фильмов?", ""),
        scoreFilm = prompt("На сколько оцените его?", "");
    if (lastFilm != null && scoreFilm != null && lastFilm != "" && scoreFilm != "" && lastFilm.length < 50) {
        personalMovieDB.movies[lastFilm] = scoreFilm;
        console.log('Done');
        i++;
    } else {
        console.log('error');
        i--;
    }
} */


/* if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
    console.log('Вы киноман');
} else {
    console.log('Произошла ошибка');
} */

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }
}
detectPersonalLevel();


function showMyDB(privat) {
    if (privat == false) {
        console.log(personalMovieDB);
    }
}

/* 2й способ с помощью отрицания
    function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
} */
showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        // let genre = prompt(`Ваш любимый жанр под номером ${i+1}`, '');
        // personalMovieDB.genres[i] = genre; 
        personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i+1}`, '');       
    }
}
writeYourGenres();
// console.log(personalMovieDB);