let render_op = document.getElementById("render_op")
let opanterior = document.getElementById("opanterior")
let operacion = " "
let pa = true


function add_value(op){
    operacion +=  op
    operacion = operacion.replace("*", "x")
    operacion = operacion.replace("/", "÷")
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
    if(operacion == " " || operacion == undefined){
     render_op.value= "No Data"
     render_op.style.textAlign = "center"

    }else{
        render_op.style.textAlign = "left"
        opanterior.innerHTML = operacion + " ="
        operacion = operacion.replace("x", "*")
        operacion = operacion.replace("÷", "÷")
        render_op.value= eval(operacion)
    }
}