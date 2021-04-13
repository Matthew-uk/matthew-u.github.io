const form = document.querySelector("#form");
console.log("hry")
const solve = (l, b) => {
  let answer, result;
    answer = l * b;
    result = `when length = ${l} and breadth = ${b}, Area of Rectangle is ${answer}cm<sup>2</sup>/m<sup>2</sup>.`
    return result;
}

const areaTriangle = (e) =>{
  e.preventDefault();
  const l = Number(document.querySelector("#l").value);
  const b = Number(document.querySelector("#b").value);
  const err = document.querySelector("#p");
  if((l && b) !== (null || '' || 0)){
    const resultDisplay = document.createElement("p");
    const display = document.querySelector("#result");
    resultDisplay.innerHTML = solve(l,b);
    display.appendChild(resultDisplay);
    err.innerHTML = ''
  } else {
    err.innerHTML = 'Insert The required Values To Use This Calc...'
  }
}

form.addEventListener("submit", areaTriangle);