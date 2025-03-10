function pressS(e) {
    var getInp = document.getElementById("inp");
    getInp.value += e;
}

function eq() {
    var getInp = document.getElementById("inp");
    getInp.value = eval(getInp.value);
}

function clearDisplay() {
    document.getElementById("inp").value = "";
}

function clearLast() {
    var getInp = document.getElementById("inp");
    getInp.value = getInp.value.slice(0, -1);
}
