alert("hello you can get the countdown to the end of the year on this page")
let countdate = new Date('Jan 1, 2023 00:00:00').getTime();

function newYear(){
	let now = new Date().getTime();
	let gap = countdate - now

	let second = 1000;
	let minute = second*60;
	let hour = minute*60;
	let day = hour*24;

	let d = Math.floor(gap / (day));
	let h = Math.floor((gap % (day)) / (hour));
	let m = Math.floor((gap %  (hour)) / (minute));
	let s = Math.floor((gap % (minute)) /(second));

	document.getElementById("days").innerText = d;
	document.getElementById("hours").innerText = h;
	document.getElementById("minutes").innerText = m;
	document.getElementById("seconds").innerText = s;

}
setInterval(function(){
 newYear();
}, 1000)

