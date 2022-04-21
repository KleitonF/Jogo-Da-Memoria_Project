// Esta função gera uma lista das cartas em ordem aleatória e exibe na tela.
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

getRandomListInt(0, 16, baralho)

let listStsOff = []
let list = []
let back = document.querySelectorAll(".back");
for(let i=0; i< back.length; i++){
    back[i].addEventListener("click", function(){
        let card = back[i].parentElement
        card.classList.add("flip")
        console.log(card)
        listStsOff.push(card)
        if(listStsOff.length > 1){
            let n1 = listStsOff[0].getAttribute('nome')
            let n2 = listStsOff[1].getAttribute('nome')
            if(n1 == n2){
                list.push(n1)
                list.push(n2)
                listStsOff =[]
                if(list.length == 16){
                    setTimeout(function(){
                        alert("Parabéns! Você completou o jogo. Reinicie a página.")
                    },200)
                }
            }else{
                setTimeout(function(){
                    for(let n of listStsOff){
                        n.classList.remove("flip")
                        listStsOff = []
                    }
                },500)
            }
        }
    })
}
