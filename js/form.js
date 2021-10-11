function checkUsername(valor) {
    const ptr = new RegExp('[^A-Za-z0-9Ñ]+');
    if (valor.length > 0 && valor.length <= 30) {
        if (!ptr.test(valor)) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}
function checkContrasena(valor) {
    const ptr1 = new RegExp('[A-ZÑ]+');
    const ptr2 = new RegExp('[a-zñ]+');
    const ptr3 = new RegExp('[0-9]+');
    if ((valor.length >= 8) && ptr1.test(valor) && ptr2.test(valor) && ptr3.test(valor)) {
        return true;
    } else {
        return false;
    }
}
function checkRespuestaSeg(valor) {
    const ptr = new RegExp('[^A-Za-z0-9Ñ]+');
    if (valor.length > 0 && valor.length <= 30) {
        if (!ptr.test(valor)) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}
let formulario = document.getElementById("form-registro");
function checkQuestion(){
    let desplegable = document.getElementById("pregunta_desplegable");
    formulario.addEventListener("submit", function(){
        if(desplegable.value == 0 || desplegable.value == ""){
            return false;
        }else{return true;}
    }, false);
}
module.exports = { checkUsername, checkContrasena, checkRespuestaSeg };