function count(){
    const number = document.getElementById("input1");
    console.log(number.value);
    const countSquare = number.value ** 2;
    console.log(countSquare);
    document.getElementById("input2").value = countSquare;
}

const button = document.getElementById("button");
button.addEventListener('click', count);