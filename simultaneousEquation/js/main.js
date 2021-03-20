const solve = (a,b,c,d,e,f,x,y) => {
  try{
    if(a,b,c,d,e,f){
      var af,ce,cb,ad,by
      af = a * f;
      ce = c * e;
      cb = c * b;
      ad = a * d;
      y = ((af - ce)/(-cb + ad));
      by = b * y;
      x = ((e - by)/ a);
      return`${a === '1' ? '' : a === '-1' ? '-' : a}${a ? 'x' : '0'}
        ${b < 0 ? '' : '+'}
        ${b === '1' ? '' : b === '-1' ? `${'-y'}` : b}${b ? 'y' : '0'} = ${e}<br/>
        ${c === '1' ? '' : c === '-1' ? '-' : c}${c ? 'x' : '0'} 
        ${d < 0 ? '' : '+'}
        ${d === '1' ? '' : d === '-1' ? '-' : d}${d ? 'y' : '0'} = ${f}<br/>
        x = ${x} and y = ${y}`
      } else {
        return ``
      }
  } catch { return ''}
}
const simultaneousEquation = (e) => {
  e.preventDefault();
  const a = document.querySelector("#a").value.trim();
  const b = document.querySelector("#b").value.trim();
  const c = document.querySelector("#c").value.trim();
  const d = document.querySelector("#d").value.trim();
  const g = document.querySelector("#e").value.trim();
  const f = document.querySelector("#f").value.trim();
  const resultDisplay = document.createElement("p");
  resultDisplay.innerHTML = solve(a,b,c,d,g,f);
  const result = document.querySelector("#result");
  result.appendChild(resultDisplay)
}

form.addEventListener("submit", simultaneousEquation);

// const squareAndPower = (e) =>
// {
//     e.preventDefault();
//     const a = Number(document.querySelector("#a").value.trim());
//     const b = Number(document.querySelector("#b").value.trim());
//     const result = Math.pow(a,b);
//     const work = `${a}<sup>${b}</sup> = ${result}`;
//     const resultDisplay = document.createElement("p");
//     const display = document.querySelector("#result");
//     resultDisplay.innerHTML = work;
//     display.appendChild(resultDisplay);
// }
