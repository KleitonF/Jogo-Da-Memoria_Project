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
                        gameOver()
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