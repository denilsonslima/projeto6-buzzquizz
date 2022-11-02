const api = 'https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes/';
let currentId = 0;
//page1

function loadQuizzes() {
    axios.get(api)
        .then(function (response) {
            console.log(response.data);
            const quizzes = response.data;
            const cards = document.querySelector('.bot .cards');
            cards.innerHTML = '';

            for (let i = 0; i < quizzes.length; i++) {
                const newDiv = document.createElement("div");
                newDiv.classList.add('card');
                newDiv.innerHTML = `<p>${quizzes[i].title}</p>`;
                newDiv.style.background = `linear-gradient(
                    180deg,
                    rgba(255, 255, 255, 0) 0%,
                    rgba(0, 0, 0, 0.5) 64.58%,
                    #000000 100%
                  ),url(${quizzes[i].image})`;
                cards.appendChild(newDiv);
                newDiv.addEventListener('click', function () {
                    loadQuiz(quizzes[i].id);
                });
            }

        })
        .catch(function (error) {
            console.log(error);
        });
}

function loadQuiz(id) {
    console.log(id);
    currentId = id;
}

loadQuizzes();

//page2
function selecionarCaixa(seletor){
    const caixaClicada = seletor.parentNode;
    const p = caixaClicada.querySelector("p")
    caixaClicada.classList.add("clicado")
    p.classList.add("acertou")

    const caixas = document.querySelectorAll(".caixa")
    for (let i = 0; i < caixas.length; i++){
        if(caixas[i].classList.contains("clicado") === false){
            caixas[i].innerHTML+= `
            <div class="esconder"></div>
            `
        }
        else {
            seletor.removeAttribute("onclick")
        }
    }
}
//page3