`use strict`

const API_RANDOM_MAIL = "https://flynn.boolean.careers/exercises/api/random/mail";

fetch(API_RANDOM_MAIL)
    .then((risposta) => {
        return risposta.json();
    })
    .then((jsonData) => {
        console.log(jsonData);
    });