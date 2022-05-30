
var tentativas = 5

function verificar(){
var resp1 = "cristiano ronaldo"
var resp2 = "justin bieber"

var inp1 = document.getElementById("res1")
var inpp1 = inp1.value.toLowerCase()
var inp2 = document.getElementById("res2")
var inpp2 = inp2.value.toLowerCase()

var chances = document.getElementById("chances")
var numerochances = document.querySelector("#nchan")

//INPUT RES1................................................................
if(inpp1.includes(resp1)){
    inp1.style.backgroundColor="green"
    inp1.disabled = true
    inp1.style.borderColor="black"
    resp1="..//;;"
}else if(inpp1.includes(resp2)){
    inp1.style.backgroundColor="green"
    inp1.disabled=true
    inp1.style.borderColor="black"
    resp2="..//;;"
}else{
    inp1.style.borderColor="red"
    var errou1 = true
}
//..........................................................................

//INPUT RES 2...............................................................
if(inpp2.includes(resp1)){
    inp2.style.backgroundColor="green"
    inp2.disabled=true
    inp2.style.borderColor="black"
    resp1="..//;;"
}else if(inpp2.includes(resp2)){
    inp2.style.backgroundColor="green"
    inp2.disabled=true
    inp2.style.borderColor="black"
    resp2="..//;;"
}else{
    inp2.style.borderColor="red"
    var errou2 = true
}
//...........................................................................



//TENTATIVAS................................................................
if(errou1 == true && errou2 == true){
    tentativas--
    numerochances.innerHTML = tentativas
}else if(errou1 == true || errou2 == true){
    tentativas--
    numerochances.innerHTML =  tentativas
}

if(tentativas == 0){
    inp1.disabled=true
    inp2.disabled=true
    chances.innerHTML="Você perdeu!"
}
//...........................................................................
}





//evento "tecla enter" para validar o botão de verificação....................
document.addEventListener("keypress", function(e){

    if(e.key === "Enter"){
        var btn = document.querySelector("#botaover")

        btn.click()
    }
})
//.............................................................................
