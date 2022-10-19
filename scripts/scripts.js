const div = document.querySelector("card_container") 

function turnCard(parrot){
    parrot.classList.toggle("hidden")
}

function addCard(){
    let cards = 
        Number(prompt("Quantas cartas você quer jogar? (entre 4 e 14, número par)"));
    
    let i = null
    
    while (i <= cards){
        if (4 >= cards <= 14 && cards % 2 == 0){
            div.innerHTML += "<div>aaa</div>"

                i++
        }
    }
}


/**                `<div onclick="turnCard(this)" class="parrot_card">
                    <img class="parrot_back" src="./assets/back.png">
                    <img class="parrot_front hidden" src="./assets/bobrossparrot.gif">
                </div>` */