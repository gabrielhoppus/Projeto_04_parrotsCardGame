const div = document.querySelector(".card_container");
let card_list = []

function turnCard(parrot){
    parrot.classList.toggle("hidden")
}

function randomizeList(){
    return Math.random() - 0.5;
}

function addCard(){
    let cards = 
        Number(prompt("Quantas cartas você quer jogar? (entre 4 e 14, número par)"));
    let i = 0
    let image = 1
    if (cards >= 4 && cards <= 14 && cards % 2 == 0){
        while (i < cards){
            let card = 
                    `<div onclick="turnCard(this)" class="parrot_card">
                        <img class="parrot_back" src="./assets/back.png">
                        <img class="parrot_front hidden" src="./assets/${Math.floor(image)}.gif">
                    </div>`
            card_list.push(card)
            i++
            image += 0.5
        } 
    }else{
        return addCard()
    }
    card_list.sort(randomizeList)
    for (let i=0; i < card_list.length; i++){        
        div.innerHTML += card_list[i]
    }

}
