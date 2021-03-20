const form = document.querySelector("#form");
let hist = [];
const p = document.querySelector("#p");

const solve = (a,n) => {
	let an,answer;
	an = a * n;
	answer = `y = ${a === 1 ? `` : a === -1 ? `x` : `${a}`}${(an && n) === 0 ? `` : 'x' }<sup>${n === 1 ? '' : n === 0 ? `` : `${n}`}</sup><br />
                  <sup>dy</sup>/<sub>dx</sub> = 
                  ${an === 0 ? '' : an}${(n-1 === 0) ? '0' : (n === 0) ? `0` : `x<sup>${(n-1) === 1 ? `` : n - 1}</sup>`}`
return answer;
}

const calculus = (e) =>
{
	const a = Number(document.querySelector("#a").value);
	const n = Number(document.querySelector("#n").value);
	e.preventDefault();
	const result = document.createElement("p");
	
	if((a && n) !== null ){
		
		// hist.filter((i)=>{
		// 	return !i.includes(result.innerHTML)
		// })
		// Working on history Not Yet Done
		// if(hist.length === 0){
		// 	result.innerHTML = (solve(a,b,c));
		// } else if(hist[0] = result.innerHTML){
		// 	console.log('Problem Already Solved Above...')
		// }
		result.innerHTML = (solve(a,n))
		hist.concat(result.innerHTML)
		console.log(hist)
		p.innerHTML = '';
	} else {
		p.innerHTML = `Input The Required Value To Use This Calc...`
		result.innerHTML = ''
	}
	const div = document.querySelector("#div");
	div.appendChild(result)
}

form.addEventListener("submit", calculus);
