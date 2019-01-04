const min = 1905;
const max = 2021;
const select = document.getElementById('years');

for (let i = min; i <= max; i++){
	 const opt = document.createElement('option');
	 opt.value = i;
	 opt.innerHTML = i;
	 select.appendChild(opt);
}

const hvorforText = document.getElementById("hvorfor-text");
const speechBubble = document.getElementsByClassName("speech-bubble")[0];

hvorforText.addEventListener('mouseover', () => {
	speechBubble.style.display="block";
});

hvorforText.addEventListener('mouseout', () => {
	setTimeout( function() {
		speechBubble.style.display="none"; 
	}, 3000);
});



