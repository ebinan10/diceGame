function rollDice(){
			
	var die1=document.getElementById("dice1");
	var die2=document.getElementById("dice2");
	var status=document.getElementById("status");
	var d1=Math.floor(Math.random()*6)+1;
	var d2=Math.floor(Math.random()*6)+1;
	diceTotal = d1 + d2;
	
	dice1.innerHTML = d1;
	dice2.innerHTML = d2;
	status.innerHTML = "You rolled " + diceTotal +".";
	const img1 = document.querySelector('#image1 img');
	const img2 = document.querySelector('#image2 img') 

	function img3(){
		return  img1.src = (d1 === 1)? "./images/image-one.png":
	(d1===2)?"./images/image-two.png":
	(d1===3)?"./images/image-three.png":
	(d1===4)?"./images/image-four.png":
	(d1===5)?"./images/images-five.png":
	"./images/image-six.png";}
// 	if(d1 === 1){
	if(d1 === d2){
		status.innerHTML += " DOUBLES, You won another turn .";
	}

		function img4(){
		return img2.src = (d2 === 1)? "./images/image-one.png":
		(d2===2)?"./images/image-two.png":
		(d2===3)?"./images/image-three.png":
		(d2===4)?"./images/image-four.png":
		(d2===5)?"./images/images-five.png":
		"./images/image-six.png";
		}
		
	// img.src = "./images/image-one.png";
	// 	}
	// else(d1===2){
	// 	img.src = "./images/image-one.png";
	img3()
	img4()
	}
	

