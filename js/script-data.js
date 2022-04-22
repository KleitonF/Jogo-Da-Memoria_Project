let body = document.querySelector("body");
let main = document.querySelector("main");
let baralho = [
{card: `<div nome="camelo" class='card'>     <div class="front"> <img src="./assets/camelo.png" alt="camelo">         </div>  <div class="back"></div>   </div>`},
{card: `<div nome="camelo" class='card'>     <div class="front"> <img src="./assets/camelo.png" alt="camelo">         </div>  <div class="back"></div>   </div>`},
{card: `<div nome="beija-flor" class='card'> <div class="front"> <img src="./assets/beija-flor.png" alt="beija-flor"> </div>  <div class="back"></div>   </div>`},
{card: `<div nome="beija-flor" class='card'> <div class="front"> <img src="./assets/beija-flor.png" alt="beija-flor"> </div>  <div class="back"></div>   </div>`},
{card: `<div nome="porco" class='card'>      <div class="front"> <img src="./assets/porco.png" alt="porco">           </div>  <div class="back"></div>   </div>`},
{card: `<div nome="porco" class='card'>      <div class="front"> <img src="./assets/porco.png" alt="porco">           </div>  <div class="back"></div>   </div>`},
{card: `<div nome="galinha" class='card'>    <div class="front"> <img src="./assets/galinha.png" alt="galinha">       </div>  <div class="back"></div>   </div>`},
{card: `<div nome="galinha" class='card'>    <div class="front"> <img src="./assets/galinha.png" alt="galinha">       </div>  <div class="back"></div>   </div>`},
{card: `<div nome="elefante" class='card'>   <div class="front"> <img src="./assets/elefante.png" alt="elefante">     </div>  <div class="back"></div>   </div>`},
{card: `<div nome="elefante" class='card'>   <div class="front"> <img src="./assets/elefante.png" alt="elefante">     </div>  <div class="back"></div>   </div>`},
{card: `<div nome="bode" class='card'>       <div class="front"> <img src="./assets/bode.png" alt="bode">             </div>  <div class="back"></div>   </div>`},
{card: `<div nome="bode" class='card'>       <div class="front"> <img src="./assets/bode.png" alt="bode">             </div>  <div class="back"></div>   </div>`},
{card: `<div nome="coelho" class='card'>     <div class="front"> <img src="./assets/coelho.png" alt="coelho">         </div>  <div class="back"></div>   </div>`},
{card: `<div nome="coelho" class='card'>     <div class="front"> <img src="./assets/coelho.png" alt="coelho">         </div>  <div class="back"></div>   </div>`},
{card: `<div nome="lobo" class='card'>       <div class="front"> <img src="./assets/lobo.png" alt="lobo">             </div>  <div class="back"></div>   </div>`},
{card: `<div nome="lobo" class='card'>       <div class="front"> <img src="./assets/lobo.png" alt="lobo">             </div>  <div class="back"></div>   </div>`}
];

// Esta função embaralha as carta e exibe na tela.
function getRandomListInt(min, max, baralho) {
    let listInicial = [];
    let listFinal = [];
    while (listFinal.length != max){    
        min = Math.ceil(min);
        max = Math.floor(max);
        let n = Math.floor(Math.random() * (max - min)) + min;
        listInicial.push(n);
        listFinal = [...new Set(listInicial)];
    }
    for (let i of listFinal) {
        main.innerHTML += baralho[i].card;
    };
};

//Tela de Game Over
function gameOver() {
    body.innerHTML = "<section id='gameOverWindow'> <div id='gameOverMsg'> Parabéns! <input id='btn_restart' type='button' value='Reiniciar'> </div></section>";
    let btn_restart = document.querySelector("#btn_restart");
    btn_restart.addEventListener("click", function(){window.location.reload()})
}

getRandomListInt(0, 16, baralho)