let num1 = document.querySelector("#num-first");

let num2 = document.querySelector("#num-second");

let plus = document.querySelector("#plus");

let minus = document.querySelector("#minus");

let multiplication = document.querySelector("#multiplication");

let divided = document.querySelector("#divided");

let result = document.querySelector("#result");

plus.onclick = function () {
    if (num1.value == "") {
        alert("Please Add Number :)")
        return;
    }
    else if(num2.value == ""){
        alert("Please Add Number :)")
        return;
    }


    let first = parseInt(num1.value);

    let second = parseInt(num2.value);

    resultValue = first + second;

    result.value = resultValue;

    num1.value = " ";

    num2.value = " ";
}

minus.onclick = function () {
    if (num1.value == "") {
        alert("Please Add Number :)")
        return;
    }
    else if(num2.value == ""){
        alert("Please Add Number :)")
        return;
    }

    let first = parseInt(num1.value);

    let second = parseInt(num2.value);

    resultValue = first - second;

    result.value = resultValue;

    num1.value = "";

    num2.value = "";
}

multiplication.onclick = function () {
    if (num1.value == "") {
        alert("Please Add Number :)")
        return;
    }
    else if(num2.value == ""){
        alert("Please Add Number :)")
        return;
    }

    let first = parseInt(num1.value);

    let second = parseInt(num2.value);

    resultValue = first * second;

    result.value = resultValue;

    num1.value = "";

    num2.value = "";
}

divided.onclick = function () {
    if (num1.value == "") {
        alert("Please Add Number :)")
        return;
    }
    else if(num2.value == ""){
        alert("Please Add Number :)")
        return;
    }

    let first = parseInt(num1.value);

    let second = parseInt(num2.value);

    resultValue = first / second;

    result.value = resultValue;

    num1.value = "";

    num2.value = "";
}