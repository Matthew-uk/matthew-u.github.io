const btn = document.querySelector('#btn');
const p = document.querySelector('#p');
const form = document.querySelector('#form');


btn.addEventListener("click", permutation);

const permute = (fact) => {
  let i, factorial;
  factorial = 1;
  for(i = 1; i <= fact; i++){
    factorial = i * factorial;
  }
  return factorial;
}

function permutation(e) {
  e.preventDefault();
  const n = parseInt(document.querySelector("#n").value);
  const r = parseInt(document.querySelector("#r").value);
  const resultBar = document.querySelector("#div");
  const result = document.createElement("h6");
  if(n&&r){
    const n_ = permute(n);
    const r_ = permute(r);
    const res = (n_)/(r_);
    const answer = `<sup>${n}</sup>P<sub>${r}</sub> = ${res}`;
    result.innerHTML = answer;
    resultBar.appendChild(result)
  }
}

form.addEventListener("submit", permutation)