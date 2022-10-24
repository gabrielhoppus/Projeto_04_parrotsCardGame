const div = document.querySelector(".card_container");
const imageList = [`1`,`2`,`3`,`4`,`5`,`6`,`7`];
const card_list = [];
let imageCounter = 0;
let selectedList = [];
let firstCard = "";
let secondCard = "";
let playedCount = 0;
let cardOrder = 1;
let clickCount = 0;
let endCounter = 0;
let cardQuantity = 0;
let timeCounter = 0;
let addTime = 0;

function randomizeList(){
    //função para randomizar os elementos do jogo
    const randomCount = 0.5;
    return Math.random() - randomCount;
}

function addCard(){
    /*Função que adiciona a quantidade de cartas ao jogo
    1. Pede um número
    2. Embaralha as imagens das cartas
    3. Cria a div com a imagem criada, de duas em duas imagens e adiciona isso a uma lista
    4. Embaralha as cartas e coloca no campo*/

    cardQuantity =
        Number(prompt("Quantas cartas você quer jogar? (entre 4 e 14, número par)"));
    let i = 0;
    if (cardQuantity >= 4 && cardQuantity <= 14 && cardQuantity % 2 === 0){
        imageList.sort(randomizeList);
        while (i < cardQuantity){
            const card =
                    `<div id="${Math.floor(cardOrder)}" onclick="turnCard(this)" class="parrot_card">
                        <img class="parrot_back" src="./assets/back.png">
                        <img class="parrot_front hidden" src="./assets/${imageList[Math.floor(imageCounter)]}.gif">
                    </div>`;
            card_list.push(card);
            i++;
            imageCounter += 0.5;
            cardOrder++;
        } 
    }else{
        addCard()
    }
    card_list.sort(randomizeList)
    for (let x=0; x < card_list.length; x++){
        div.innerHTML += card_list[x]
    }
}

function turnCard(parrot){
    /*Função que marca as cartas viaradas para comparação */

    if (clickCount % 2 === 0){
        parrot.classList.add("hidden");
        parrot.classList.add(`selected1`);
        selectedList.push(parrot);
    }else{
        parrot.classList.add("hidden");
        parrot.classList.add(`selected2`);
        selectedList.push(parrot);
    }

    clickCount ++;
    checkCard();
}

function checkCard(){
    /*Função que compara as cartas e checa se elas são iguais 
    1. Se as cartas forem iguais, mantém o atributo hidden que mantém a carta desvirada
        e remove a maracação de selecionada para poder aplicar no próximo set de cartas
    2. Se as cartas forem diferentes, remove todos os atributos para o estado original
    3. mantém um contador de jogadas
    4. Condicional de fim de jogo que compara quantas cartas estão desviradas e quantas
        cartas tem no total*/
    firstCard = document.querySelector(".selected1");
    secondCard = document.querySelector(".selected2");
    if(selectedList.length == 2 && firstCard.innerHTML !== secondCard.innerHTML){
        playedCount += 1;
        div.classList.add("disable")
        setTimeout(() =>{
            firstCard.classList.remove("hidden")
            secondCard.classList.remove("hidden")
            firstCard.classList.remove("selected1")
            secondCard.classList.remove("selected2")
            div.classList.remove("disable")
        },1000)
        selectedList = []
    }else if (selectedList.length == 2 && firstCard.innerHTML === secondCard.innerHTML){
        playedCount += 1;
        div.classList.add("disable")
        setTimeout(() =>{
            div.classList.remove("disable")
            firstCard.classList.remove("selected1")
            secondCard.classList.remove("selected2")
        }, 1000)
        endCounter += 2
        selectedList = []
    }
    if (endCounter === cardQuantity){
        endGame()
    }
}

function endGame(){
    /*Alerta de fim de jogo */
    setTimeout(() =>{
        alert(`Você ganhou em ${playedCount} jogadas e em ${timeCounter} segundos!`)
        restartGame()
    }, 1500)
}

function restartGame(){
    /*Prompt após o fim do jogo para reiniciar a partida */
    const restart = prompt("Você gostaria de reiniciar a partida? (sim ou não)")
    clearInterval(addTime)
    if (restart === "sim"){
        location.reload()
    }else if (restart === "não"){
        return;
    }else{
        restartGame();
    }
}

function timeCount() {
    /*Contador de tempo do jogo */
    addTime = setInterval(timeProgression, 1000);

    function timeProgression() {
        timeCounter++;
        const div = document.querySelector(".time");
        div.innerHTML = timeCounter;
        if (timeCounter == 0) {
            clearInterval(addTime);
        }
    }
}
