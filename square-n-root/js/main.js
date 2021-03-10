const form = document.querySelector("#form");

const squareAndPower = (e) =>
{
    e.preventDefault();
    const a = Number(document.querySelector("#a").value.trim());
    const b = Number(document.querySelector("#b").value.trim());
    const result = Math.pow(a,b);
    const work = `${a}<sup>${b}</sup> = ${result}`;
    const resultDisplay = document.createElement("p");
    const display = document.querySelector("#result");
    resultDisplay.innerHTML = work;
    display.appendChild(resultDisplay);
}

form.addEventListener("submit", squareAndPower );

const squareRoot =(e)=>
{
    e.preventDefault();
    a = document.querySelector();
}