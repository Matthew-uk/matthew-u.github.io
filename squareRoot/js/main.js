const form = document.querySelector("#form");
const input = document.querySelector("#x");
const resholder = document.querySelector("#p");

const squrt = (x) => {
  let result = `The Square Root of √${x} = ${Math.sqrt(x)}`
  const res = document.createElement("p");
  res.innerHTML = result;
  resholder.appendChild(res);
}

const squareRoot = (e) => {
  e.preventDefault();
  squrt(input.value);
}

console.log();

form.addEventListener("submit", squareRoot)