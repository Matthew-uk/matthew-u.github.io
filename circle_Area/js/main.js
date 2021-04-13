const form = document.querySelector("#form");
let pI = document.querySelector("#pi");
pI.innerHTML = `${Math.PI}`

const solve = (r) => {
  let answer, result;
    answer = Math.PI * Math.pow(r,2);
    result = `when radius = ${r}, Area of Circle is ${answer}cm<sup>2</sup>/m<sup>2</sup>
    but approximately ${Math.round(answer)}cm<sup>2</sup>/m<sup>2</sup>`
    return result;
}

const areaCircle = (e) =>{
  e.preventDefault();
  const r = Number(document.querySelector("#a").value);
  const err = document.querySelector("#p");
  if(r !== (null || '' || 0)){
    const resultDisplay = document.createElement("p");
    const display = document.querySelector("#result");
    resultDisplay.innerHTML = solve(r);
    display.appendChild(resultDisplay);
    err.innerHTML = ''
  } else {
    err.innerHTML = 'Insert The required Values To Use This Calc...'
  }
  
}

form.addEventListener("submit", areaCircle );