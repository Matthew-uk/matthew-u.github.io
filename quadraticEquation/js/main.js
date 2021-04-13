const form = document.querySelector("#form");
let hist = [];
const p = document.querySelector("#p");

const solve = (a,b,c) => {
	if(a && b && c){
		var b2, A1, A2, D, sD
		b2 = Math.pow(b,2)
		D = b2 - (4 * a * c)
		sD = Math.sqrt(D)
		A1 = (-b - sD)/(2 * a);
		A2 = (-b + sD)/(2 * a);
		return `${a === 1 ? 'x<sup>2</sup>' : a === -1 ? `-x<sup>2</sup>` : `${a}x<sup>2</sup>`}
		${b < 1 ? '' : '+'}
		${b === 1 ? 'x' : b === -1 ? `-x` : `${b}x`}
		${c < 1 ? '' : '+'}
		${c} = 0 
		${isNaN(A1 && A2) ? `is an invalid or False Equation` : `x = ${A1} or ${A2} `}. 
		${D > 0 ? `(The roots are real and distinct). :)` :
			D < 0 ? `(The roots are unreal). :(` : 
			D === 0 ? `(The roots are real and equal). :)`: ``}`
	} else {	}
}


const quadraticEquation = (e) =>
{
	const a = Number(document.querySelector("#a").value);
	const b = Number(document.querySelector("#b").value);
	const c = Number(document.querySelector("#c").value);
	e.preventDefault();
	const result = document.createElement("p");
	
	if(a && b && c){
		
		// hist.filter((i)=>{
		// 	return !i.includes(result.innerHTML)
		// })
		// Working on history Not Yet Done
		// if(hist.length === 0){
		// 	result.innerHTML = (solve(a,b,c));
		// } else if(hist[0] = result.innerHTML){
		// 	console.log('Problem Already Solved Above...')
		// }
		result.innerHTML = (solve(a,b,c))
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

form.addEventListener("submit", quadraticEquation);