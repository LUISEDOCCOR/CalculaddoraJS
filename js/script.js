let render_op = document.getElementById("render_op")
let opanterior = document.getElementById("opanterior")
let operacion = ""
let pa = true


function add_value(op){
    operacion +=  op
    render_op.value = operacion
}

function ac(){
    operacion = " "
    render_op.value = operacion
    opanterior.innerHTML = ""
    pa = true
}

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

function backspace(){
    let opedit = operacion
    operacion = opedit.slice(0, -1)
    render_op.value =  operacion
    pa = true

}

function resultado(){
    opanterior.innerHTML = operacion + " ="
    render_op.value= eval(operacion)
}