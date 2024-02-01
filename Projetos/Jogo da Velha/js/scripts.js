let x = document.querySelector('.x');
let o = document.querySelector('.o');
let boxes = document.querySelectorAll('.box');
let buttons = document.querySelectorAll('#buttons-container button');
let messageContainer = document.querySelector('#message');
let messageText = document.querySelector('#message p');
let secondPlayer;

// contador de jogadas
let player1 = 0;
let player2 = 0;

// adicionando o evento de click nos boxes
for(let i = 0; i < boxes.length; i++) {

    // quando alguem clica na caixa
    boxes[i].addEventListener('click', function() {

        let el = checkEl(player1, player2);

        // Só registra a jogada se nenhum movimento tiver sido feito
        if(this.childNodes.length == 0){
            
            let cloneEl = el.cloneNode(true);

            this.appendChild(cloneEl)

            // Registrando a jogada
            if(player1 == player2){

                player1++;

                // Jogada da IA
                if(secondPlayer == 'ai-player'){

                    // Finaliza a jogada
                    computerPlay();
                    player2++;
                }

            } else {

                player2++;
            }

            checkWinCondition();
        }
    });
}

// evento para saber se é 2 players ou IA
for(let i = 0; i < buttons.length; i++){

    buttons[i].addEventListener("click", function(){

        secondPlayer = this.getAttribute("id");

        for(let j = 0; j < buttons.length; j++){
            buttons[j].style.display = 'none';
        }

        setTimeout(function(){

            let container = document.querySelector("#container");
            container.classList.remove("hide");

        }, 500);
    });
}

// Verifica quem vai jogar
function checkEl(player1, player2) {

    if(player1 == player2) {

        el = x;

    } 
    else {

        el = o;
    }

    return el;
}

// Verifica quem ganhou
function checkWinCondition(){

    let b1 = document.getElementById('block-1');
    let b2 = document.getElementById('block-2');
    let b3 = document.getElementById('block-3');
    let b4 = document.getElementById('block-4');
    let b5 = document.getElementById('block-5');
    let b6 = document.getElementById('block-6');
    let b7 = document.getElementById('block-7');
    let b8 = document.getElementById('block-8');
    let b9 = document.getElementById('block-9');

    // Horizontais
    checkThreeBlocks(b1, b2, b3);
    checkThreeBlocks(b4, b5, b6);
    checkThreeBlocks(b7, b8, b9);

    // Verticais
    checkThreeBlocks(b1, b4, b7);
    checkThreeBlocks(b2, b5, b8);
    checkThreeBlocks(b3, b6, b9);

    // Diagonais
    checkThreeBlocks(b1, b5, b9);
    checkThreeBlocks(b3, b5, b7);

    // Deu velha
    let counter = 0;

    for(let i = 0; i < boxes.length; i++){

        if(boxes[i].childNodes[0] != undefined){
            counter++;
        }
    }

    if(counter == 9){
        declareWinner('Deu Velha');
    }
}

// Verifica se existem 3 blocos consecutivos com o mesmo movimento, 
// configurando vitória
function checkThreeBlocks(mov01, mov02, mov03){

    if(mov01.childNodes.length > 0  && mov02.childNodes.length > 0 && mov03.childNodes.length > 0) {

        let b1Child = mov01.childNodes[0].className;
        let b2Child = mov02.childNodes[0].className;
        let b3Child = mov03.childNodes[0].className;

        if(b1Child == 'x' && b2Child == 'x' && b3Child == 'x') {

            declareWinner('x');

        } else if(b1Child == 'o' && b2Child == 'o' && b3Child == 'o') {

            declareWinner('o');
        }

    }

}

// Finaliza o jogo
function declareWinner(winner){

    let scoreboardX = document.querySelector("#scoreboard-1");
    let scoreboardY = document.querySelector("#scoreboard-2");
    let msg = '';

    if(winner == 'x'){

        scoreboardX.textContent = parseInt(scoreboardX.textContent) + 1;
        msg = "O jogador 1 venceu";

    } else if(winner == 'o') {

        scoreboardY.textContent = parseInt(scoreboardY.textContent) + 1;
        msg = "O jogador 2 venceu";

    } else {

        msg = "Deu Velha!";
    }

    // Exibe a mensagem
    messageText.innerHTML = msg;
    messageContainer.classList.remove("hide");

    // Esconde a mensagem
    setTimeout(function() {
        messageContainer.classList.add("hide");
    }, 3000);

    // Zerar as jogadas
    player1 = 0;
    player2 = 0;

    // remove os movimentos
    let boxesToRemove = document.querySelectorAll(".box div");

    for(let i = 0; i < boxesToRemove.length; i++){
        boxesToRemove[i].parentNode.removeChild(boxesToRemove[i]);
    }
}

// Jogada da IA
function computerPlay() {

    let cloneO = o.cloneNode(true);

    counter = 0;
    filled = 0;

    for(let i = 0; i < boxes.length; i++) {

        let randomNumber = Math.floor(Math.random() * 5);

        // Só preenche se estiver vazio
        if(boxes[i].childNodes[0] == undefined){

            if(randomNumber <= 1){
                boxes[i].appendChild(cloneO);
                counter++;
                break;
            }
        
        // Checagem de quantas estão preenchidas    
        } else {

            filled++;
        }
    }

    if(counter == 0 && filled < 9){
        computerPlay();
    }
}