var sqNum=6;
colors=getRandomColorArray(sqNum);
var squares=document.querySelectorAll(".square");
var message=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#resetButton");
var colorDisp=document.querySelector("h1 span");
var easyBtn=document.querySelector("#easyBtn");
var hardBtn=document.querySelector("#hardBtn");
var pickedColor=pickColor();
for (var i = 0; i < squares.length; i++) {
	//add initial colors
	squares[i].style.backgroundColor=colors[i];

	//add event listener to every box;
	squares[i].addEventListener("click",function(){
     var clickedColor=this.style.backgroundColor;
      //check picked color and clicked color
	console.log(clickedColor,pickedColor);
      if (clickedColor===pickedColor) {
      	message.textContent="Correct";
      	colorChange(pickedColor);
        h1.style.backgroundColor=pickedColor;
        resetButton.textContent="Play Again?";
      }
      else{
      	this.style.backgroundColor="#232323";
      	message.textContent="Try Again";
      }
	})
}

easyBtn.addEventListener("click",function(){
   hardBtn.classList.remove("selected");
   easyBtn.classList.add("selected");
   sqNum=3;
   colors=getRandomColorArray(sqNum);
   pickedColor=pickColor();
   colorDisp.textContent=pickedColor;
   for (var i = 0; i < squares.length; i++) {
    	if (colors[i]) {
    	  squares[i].style.backgroundColor=colors[i];
     } 
     else {
       squares[i].style.display= "none";
     }
   }
})
hardBtn.addEventListener("click",function(){
   hardBtn.classList.add("selected");
   easyBtn.classList.remove("selected");
   sqNum=6;
   colors=getRandomColorArray(sqNum);
   pickedColor=pickColor();
   colorDisp.textContent=pickedColor;
   for (var i = 0; i < squares.length; i++) {
   	  squares[i].style.backgroundColor=colors[i];
      squares[i].style.display= "block";
    }

})
resetButton.addEventListener("click",function(){
	    this.textContent="New Game";
        colors=getRandomColorArray(sqNum);
        pickedColor=pickColor();
        colorDisp.textContent=pickedColor;
        h1.style.backgroundColor="steelblue";
        message.textContent="";
        for (var i = 0; i < colors.length; i++) {
        	squares[i].style.backgroundColor=colors[i];
        }
})
colorDisp.textContent=pickedColor+" ";

function colorChange(color){
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor=color;
	}
}

function pickColor(){
	var random=Math.floor(Math.random()*colors.length);
	return colors[random];
}

function getRandomColorArray(num){
	var arr=[];
  while(num-- >0){
     arr.push(randomColor());
  }
  return arr;
}
function randomColor(){
   var r=Math.floor(Math.random()*256);
   var g=Math.floor(Math.random()*256);
   var b=Math.floor(Math.random()*256);
   return "rgb("+r+", "+g+", "+b+")";
}