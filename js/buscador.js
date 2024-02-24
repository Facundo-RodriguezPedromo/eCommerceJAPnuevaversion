const buscar = document.getElementById("buscador")
const objeto = document.getElementsByClassName("card offer-product")

buscar.addEventListener('keyup', (e)=>{
    let text = e.target.value
    
    let regular = new RegExp(text, "i")
    for(let i=0; i<objeto.length; i++){
    let valor = objeto[i]
        if(regular.test(valor.innerText)){
valor.classList.remove("ocultar")
        }else{
            console.log(valor)
valor.classList.add("ocultar")
        }
    }
})