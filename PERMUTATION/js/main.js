const number = document.querySelector("#number");
const btn = document.querySelector('#btn');
const p = document.querySelector('#p');
const form = document.querySelector('#form');

btn.addEventListener("click", permutation);
form.addEventListener("submit", permutation);

const permute = (fact) => {
  let i, factorial;
  factorial = 1;
  for(i = 1; i <= fact; i++){
    factorial = i * factorial;
  }
  return `${fact}! = ${factorial}`
}

function permutation(e) {
  try {
    e.preventDefault();
    let val = number.value;
    const result = document.createElement("h6");
    const resultDiv = document.querySelector("#div")
    if(val){
      result.innerHTML = permute(val);
      resultDiv.appendChild(result);
      p.innerHTML = '';
    } else if(val === null || val === ''){
      p.innerHTML = "Insert A Digit To Use Calculator..."
    }
  } catch {
    
  }
  
}

