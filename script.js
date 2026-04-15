`use strict`

const API_RANDOM_MAIL = "https://flynn.boolean.careers/exercises/api/random/mail";

const randomMailList = [];
for (i = 0; i < 10; i++) {
    fetch(API_RANDOM_MAIL)
        .then((risposta) => {
            return risposta.json();
        })
        .then((jsonData) => {
            let randomMail = jsonData.response;
            console.log(randomMail);
            randomMailList.push(randomMail)
        });
    };

console.log(randomMailList);

