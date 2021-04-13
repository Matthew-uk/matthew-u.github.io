const form = document.querySelector("#form");

const solve = (b, h) => {
  let answer, result;
    answer = 1/2 * (b * h);
    result = `when base = ${b} and height = ${h}, Area of Triangle (Δ) is ${answer}cm<sup>2</sup>/m<sup>2</sup>`
    return result;
}

const areaCircle = (e) =>{
  e.preventDefault();
  const b = Number(document.querySelector("#b").value);
  const h = Number(document.querySelector("#h").value);
  const err = document.querySelector("#p");
  if((b && h) !== (null || '' || 0)){
    const resultDisplay = document.createElement("p");
    const display = document.querySelector("#result");
    resultDisplay.innerHTML = solve(b,h);
    display.appendChild(resultDisplay);
    err.innerHTML = ''
  } else {
    err.innerHTML = 'Insert The required Values To Use This Calc...'
  }
  
}

form.addEventListener("submit", areaCircle );