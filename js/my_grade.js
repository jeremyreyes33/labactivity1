
let attendance = document.getElementById('att');
let seatwork = document.getElementById('sw');
let quiz = document.getElementById('que');
let exam = document.getElementById('ex');
let result1 = document.getElementById('res1');
let show_ans = document.getElementById('show_ans');
	
	show_ans.addEventListener("mouseover", function tilt(){

		const transform = document.querySelector('.transform_me').style;
		let my_width = "1px";
			/*if (my_width == "300px"){
				my_width = "10px";
				transform.width = `${my_width}`;
			} else if (my_width == "10px"){
				my_width = "300px";
				transform.width = `${my_width}`;
			}
		*/
		transform.width = `${my_width}`;
		show_ans.innerHTML = "";

	});

	let highlight = document.getElementById('highlight');

	highlight.addEventListener("click", compute);


attendance.addEventListener("input", function att(){
	result1.innerHTML = `${attendance.value}`;
});

seatwork.addEventListener("input", function sw() {
	document.getElementById('res2').innerHTML = `${seatwork.value}`;
});
quiz.addEventListener("input", function que() {
	document.getElementById('res3').innerHTML = `${quiz.value}`;
});
exam.addEventListener("input", function ex() {
	document.getElementById('res4').innerHTML = `${exam.value}`;
});

		function compute() {
			document.querySelector('.transform_me').style.width = "300px";
			_att = parseInt(attendance.value) || 0;
			_sw = parseInt(seatwork.value) || 0;
			_quiz = parseInt(quiz.value) || 0;
			_exam = parseInt(exam.value)|| 0;

				const total_ave = (_att*.10) + (_sw*.20) + (_quiz*.30) + (_exam*.40);
				
				
				let txt = "";

				if (total_ave == 0) {
					txt = "No input grade yet";
				} else if (total_ave <=74) {
					txt = "Failed";
				}
				else if (total_ave == 100) {
					txt = "Excellent!"
				
				} else {
					txt = "Passed";
				}
				
				document.getElementById('show_ans').innerHTML = `${total_ave.toFixed(2)} ${txt}`;
		}
