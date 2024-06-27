//alert("hello"); 
/*
	This is a block comment
	Variable
		var
		let
		const
	DOM manipulation
	Event
		-attributes
			onclick
			onmouseover
			onmouseleave
			onmouseout
		-addEventListener

	const name = "Jeremy";
   name = "Reyes";
	console.log(name);



function pag_click() {

	let design = document.querySelector("h1").style;
		design.color = "white";
		design.background = "black";
		design.textAlign = "center";

}

function pag_umalis() {
	let design = document.querySelector("h1").style;

		design.color = "red";
		design.background = "none";
		design.textAlign = "left";
		design.border = "1px solid red";

}
*/
function pang_trigger() {

	//parseInt() parseFloat() parseDouble()
	const my_input1 = parseInt(document.getElementById("num1").value) || 0;
	const my_input2 = parseInt(document.getElementById("num2").value) || 0;
	const btn = document.getElementById("btn1");

		const result1 = document.getElementById("result1");
			const result2 = document.getElementById("result2");
				const result3 = document.getElementById("result3");
					const result4 = document.getElementById("result4");

					let repuesta1 = my_input1 + my_input2;
					let repuesta2 = my_input1 - my_input2;
					let repuesta3 = my_input1 * my_input2;
					let repuesta4 = my_input1 / my_input2;

	//result.innerHTML = "ang result ay " + my_input.value;
			result1.innerHTML = `${repuesta1}`;
				result2.innerHTML = `${repuesta2}`;
					result3.innerHTML = `${repuesta3}`;
						result4.innerHTML = `${repuesta4.toFixed(2)}`;

		/* const total_grade = (attendance*.10) + (seatwork*.20) + (quiz*.30) + (exam*.40);
			let txt = "";

			if (total_grade < 75) {
				txt = "BAGSAK HAHAHA!";
			} else (total_grade >= 75 AND total_grade <= 77) {
				txt = "Good!";
			}


	*/
}