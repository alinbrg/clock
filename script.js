function setDate(){
	const secondHand = document.querySelector('.second-hand');
	const minuteHand = document.querySelector('.min-hand');
	const hourHand = document.querySelector('.hour-hand');

	const now = new Date();
	const seconds = now.getSeconds();
	const minutes = now.getMinutes();
	const hours = now.getHours();

	const secondsDegrees = ((seconds / 60) * 360) + 90;
	secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
	
	const minutesDegree = ((minutes / 60 )* 360) + 90;
	minuteHand.style.transform = `rotate(${minutesDegree}deg)`
	
	const hoursDegree = ((hours / 12 )* 360) + 90 ;
	hourHand.style.transform = `rotate(${hoursDegree}deg)`


}

setInterval(setDate, 1000);