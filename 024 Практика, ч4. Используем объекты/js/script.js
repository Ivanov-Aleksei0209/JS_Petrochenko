/* Задание на урок 4:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

'use strict';

// const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
//let numberOfFilms;
// console.log(numberOfFilms);

/* function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
} */

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
        }
    },
    rememberMyFilms: function () {
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
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Вы классический зритель');
        } else if (personalMovieDB.count >= 30) {
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка');
        }
    },
    showMyDB: function (privat) {
        if (privat == false) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function () {
        for (let i = 0; i < 3; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i + 1}`, '');
            if (genre == null || genre === "") {
                console.log('Вы ввели некорректные данные или не ввели вовсе');
                i--;
            } else {
                personalMovieDB.genres[i] = genre;
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр #${i + 1} - это ${item}`);
        });
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    }
};
//personalMovieDB.start();
// personalMovieDB.rememberMyFilms();
// personalMovieDB.detectPersonalLevel();
//personalMovieDB.showMyDB(personalMovieDB.privat);
// personalMovieDB.writeYourGenres();

//personalMovieDB.toggleVisibleMyDB();


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

/* function rememberMyFilms() {
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
} */



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

/* function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }
} */



/* function showMyDB(privat) {
    if (privat == false) {
        console.log(personalMovieDB);
    }
} */

/* 2й способ с помощью отрицания
    function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
} */


/* function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        // let genre = prompt(`Ваш любимый жанр под номером ${i+1}`, '');
        // personalMovieDB.genres[i] = genre;
        personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i+1}`, '');
    }
} */
// console.log(personalMovieDB);

