const btn = document.querySelector('#btn');
const p = document.querySelector('#p');
const form = document.querySelector('#form');



const solve = (a,b,c) => {
  let x,answer;
  x = ((c - b)/a);
  answer = `${a === '1' ? `x` : a === '-1' ? `-x` : `${a}x`}
            ${b < '1' ? `` : '+'}
            ${b} = ${c}.
            x = ${x}`
            
  return answer;
}

const linearEquation = (e) => {
  const a = document.querySelector("#a").value;
  const b = document.querySelector("#b").value;
  const c = document.querySelector("#c").value;
    alert("Hey there...")
    e.preventDefault();
    const result = document.createElement("h6");
    const resultDiv = document.querySelector("#div")
    if(a && b && c){
      result.innerHTML = solve(a,b,c);
      console.log(result.innerHTML)
      resultDiv.appendChild(result);
      p.innerHTML = '';
    } else {
      p.innerHTML = "Insert A Digit To Use Calculator..."
    }
}
form.addEventListener("submit", linearEquation);