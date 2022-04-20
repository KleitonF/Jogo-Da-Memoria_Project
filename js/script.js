// Esta função gera uma lista das cartas em ordem aleatória e exibe na tela.
function getRandomListInt(min, max) {
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

getRandomListInt(0, 16)

let back = document.querySelectorAll(".back");
let listStsOff = []
let list = []
for(let i=0; i< back.length; i++){
    back[i].addEventListener("click", function(){
        back[i].style.opacity = '0%'
        console.log(back[i].parentElement)
        listStsOff.push(back[i].parentElement)
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
                        n1 = n.children[1]
                        n1.style.opacity = '100%'
                    }
                    listStsOff =[]
                },500)
            }
        }
    })
}

