`use strict`

const API_RANDOM_MAIL = "https://flynn.boolean.careers/exercises/api/random/mail";

fetch(API_RANDOM_MAIL)
    .then((risposta) => {
        return risposta.json();
    })
    .then((jsonData) => {
        const randomMailList = [];
        for (i=0; i<10; i++) {
            let randomMail = jsonData.response;
            console.log(randomMail);
            randomMailList.push(randomMail)
        }
    });