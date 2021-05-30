const input = document.querySelector("#input");
const form = document.querySelector("#form");
const resultholder = document.querySelector("#p");

const volumeOfCube = (l) => {
  let result = `The volume of Cube with length ${l}cm/m = ${Math.pow(l,3)}cm<sup>3</sup>/m<sup>3</sup>`;
  let res = document.createElement("p");
  res.innerHTML = result;
  resultholder.appendChild(res)
}

const Submit = (e) => {
  e.preventDefault();
  volumeOfCube(input.value);
}

form.addEventListener("submit", Submit)