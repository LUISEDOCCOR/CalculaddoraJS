let render_op = document.getElementById("render_op")
let opanterior = document.getElementById("opanterior")
let operacion = ""

function add_value(op){
    operacion +=  op
    render_op.value = operacion
}

function ac(){
    operacion = " "
    render_op.value = operacion
    opanterior.innerHTML = ""
}

let pa = true
function par(){
    if(pa == true){
        operacion += "("
        pa = false
    }else {
        operacion += ")"
        pa= true
    }
    render_op.value = operacion

}

function resultado(){
    opanterior.innerHTML = operacion + " ="
    resultado = eval(operacion)
    render_op.value = resultado
}