(function () {
	setInterval(() => {
		let h = new Date().getHours();
		let m = new Date().getMinutes();
		let s = new Date().getSeconds();
		let am = h >= 12 ? "PM" : "AM";
		h = h > 12 ? h - 12 : h;

		document.getElementById("hours").innerHTML =
			convert(h) + "<br/><span>Hours</span>";
		document.getElementById("minutes").innerHTML =
			convert(m) + "<br/><span>Minutes</span>";
		document.getElementById("seconds").innerHTML =
			convert(s) + "<br/><span>Seconds</span>";
		document.getElementById("ampm").innerText = am;

		document.getElementById("hh").style.strokeDashoffset = 440 - (440 * h) / 12;
		document.getElementById("mm").style.strokeDashoffset = 440 - (440 * m) / 60;
		document.getElementById("ss").style.strokeDashoffset = 440 - (440 * s) / 60;

		document.querySelector(".hr_dot").style.transform = `rotate(${h * 30}deg)`;
		document.querySelector(".min_dot").style.transform = `rotate(${m * 6}deg)`;
		document.querySelector(".sec_dot").style.transform = `rotate(${s * 6}deg)`;
		function convert(n) {
			return n < 10 ? `0${n}` : `${n}`;
		}
	});
})();
