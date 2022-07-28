var so1 = null 
var so2 = null 
var pheptinh = null 
var kq = null 

function ganso(x) {
    if (so1 == null) so1 = x 
    else  so2 = x 
    document.getElementById("so1").innerHTML = so1 
    document.getElementById("so2").innerHTML = so2 
}

function ganpheptinh( x ) {
    pheptinh = x 
    document.getElementById("pheptinh").innerHTML = x 
}
function thuc_hien() {
    if (pheptinh == '+') kq = parseFloat(so1) + parseFloat(so2) 
    if (pheptinh == '-') kq = parseFloat(so1) - parseFloat(so2) 
    if (pheptinh == 'x') kq = parseFloat(so1) * parseFloat(so2) 
    if (pheptinh == ':') kq = parseFloat(so1) / parseFloat(so2) 
    document.getElementById("ketqua").innerHTML = kq 
}
function lam_lai(){
    so1 = null 
    so2 = null 
    pheptinh = null 
    kq = null 
}