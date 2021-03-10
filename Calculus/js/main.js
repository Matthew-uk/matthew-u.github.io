const form = document.querySelector("#form");
let hist = [];
const p = document.querySelector("#p");

const solve = (a,n) => {
	let an,answer;
	an = a * n;
	answer = `${a === 1 ? `x` : a === -1 ? `-x` : `${a}x`}<sup>${n}</sup> = 
						${n - 1 === 0 ? 1 : an === 1 ? `x` : an === -1 ? `-x` : `${an}x`}${(n - 1) !== 0 ? `<sup>${n - 1}</sup>` : ``}`;
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