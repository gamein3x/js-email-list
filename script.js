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
            randomMailList.push(randomMail);
            // creo il nuovo h6 che contiene la mail
            const newMailinSite = document.createElement('h6');
            newMailinSite.innerHTML = randomMail; 
            /* per quando creo il container:
                document.querySelector('emails').appendChild(h);
            */
            document.body.appendChild(newMailinSite);
        });
};

console.log(randomMailList);

