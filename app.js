//alert('hello');
 let grid= [[],[]];


/*
for(let i=0;i<4;i++){
	for(let j= 0;j<4;j++){
		let cell= document.createElement('div');
		cell.classList.add("cell");
		
		document.querySelector(".board").appendChild(cell);

	}
}*/

document.querySelector(".three").addEventListener("click",function(){
	this.classList.add("selected");
	document.querySelector(".four").classList.remove("selected");
	document.querySelector(".five").classList.remove("selected");

	initialize(3);
})

document.querySelector(".four").addEventListener("click",function(){
	this.classList.add("selected");
	document.querySelector(".three").classList.remove("selected");
	document.querySelector(".five").classList.remove("selected");
	initialize(4);
	
});

document.querySelector(".five").addEventListener("click",function(){
	this.classList.add("selected");
	document.querySelector(".three").classList.remove("selected");
	document.querySelector(".four").classList.remove("selected");
	initialize(5);
	
});


function initialize(n){
	
	if(n==3){
		grid=[[0,0,0],[0,0,0],[0,0,0]];
	}else if(n==4){
		grid= [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
	}else if(n==5){
		grid= [[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]];
	}
		let div= document.querySelector(".board");
		 while (div.firstChild) {
    div.removeChild(div.lastChild);
  }
  let loc= getrandomlocation();
render(loc);
	show();
}
//console.log(loc);
function getrandomlocation(){
	let empty=[];
	let k=0;

	for(let i=0;i<grid.length;i++){
		for(let j=0;j<grid.length;j++){
			if(grid[i][j]==0){
				empty[k]= {row: i, col:j};
				k++;
			}
		}
	}
		if(empty.length==0 && gameover()){
			alert("GAME OVER!")
		}
	let r= Math.floor(Math.random()*empty.length);
	return empty[r];
}

/*document.querySelector(".left").addEventListener("click",moveleft);
document.querySelector(".right").addEventListener("click",moveright);
document.querySelector(".up").addEventListener("click",moveup);
document.querySelector(".down").addEventListener("click",movedown);*/

document.addEventListener('keydown', function(e) {
    switch (e.keyCode) {
        case 37:
            moveleft();
            break;
        case 38:
          moveup();
            break;
        case 39:
            moveright();
            break;
        case 40:
            movedown();
            break;
    }
});
function render(loc){
	let e=[2,4];
	let r= Math.floor(Math.random()*e.length);
	console.log(e[r]);
	grid[loc.row][loc.col]= e[r];
}

function show(){

	for(let i=0;i<grid.length;i++){
	for(let j= 0;j<grid.length;j++){
		let cell= document.createElement('div');
		cell.classList.add("cell");
		/*cell.style.height="100px";
		cell.style.width="100px";
		cell.*/

		if(grid[i][j]!=0){
			let val= document.createElement('p');
			let node= document.createTextNode(grid[i][j]);
			val.appendChild(node);
			cell.appendChild(val);
			if(grid[i][j]==2){
				cell.style.backgroundColor="#eee4da";
			}else if(grid[i][j]==4){
				cell.style.backgroundColor="#ede0c8";
			}else if(grid[i][j]==8){
				cell.style.backgroundColor="#f2b179";
			}else if(grid[i][j]==16){
				cell.style.backgroundColor="#ffcea4";
			}else if(grid[i][j]==32){
				cell.style.backgroundColor="#e8c064";
			}else if(grid[i][j]==64){
				cell.style.backgroundColor="#ffab6e";
			}else if(grid[i][j]==128){
				cell.style.backgroundColor="#fd9982";
			}else if(grid[i][j]==256){
				cell.style.backgroundColor="#ead79c";
			}else if(grid[i][j]==512){
				cell.style.backgroundColor="#76daff";
			}else if(grid[i][j]==1024){
				cell.style.backgroundColor="#beeaa5";
			}else if(grid[i][j]==2048){
				cell.style.backgroundColor="#d7d4f0";
			}
			
		}
		document.querySelector(".board").appendChild(cell);

	}
}
console.log(grid.length);
if(grid.length==3){
document.querySelector(".board").style.gridTemplateColumns="auto auto auto";
}else if(grid.length==4){
	document.querySelector(".board").style.gridTemplateColumns="auto auto auto auto";
}else{

	document.querySelector(".board").style.gridTemplateColumns="auto auto auto auto auto";
	document.querySelector(".board").style.width="750px"
	//document.querySelector(".cell").style.fontSize="20px";
	let cell= document.querySelector(".cell");

}

}

function moveleft(){
	let b= false;
	for(let i=0;i<grid.length;i++){
		for(let j=1;j<grid.length;j++){
			if(grid[i][j]!=0){
				let x= j-1;
				while(x>=0 && grid[i][x]==0){
					b= true;
				grid[i][x]=grid[i][x+1];
				grid[i][x+1]= 0;
				x--;
			}
				//start merging cells

				if(x>=0 && grid[i][x]==grid[i][x+1]){
				//start merging cells
				b= true;
				grid[i][x]= 2*grid[i][x];
				for(let k=x+1;k<grid.length-1;k++){
					grid[i][k]= grid[i][k+1];
				}
				grid[i][grid.length-1]=0;
			}
		
			
		}
		}
		}
		//console.log(grid);
		if(b==true){
			let div= document.querySelector(".board");
		 while (div.firstChild) {
    div.removeChild(div.lastChild);
  }
		let loc= getrandomlocation();
		render(loc);
		show();
	}else{
	if(gameover()){
		alert("GAME OVER!!")
	}
}
}


function moveright(){
	let b= false;
	for(let i=0;i<grid.length;i++){
		for(let j=grid.length-2;j>=0;j--){
			if(grid[i][j]!=0){
				let x= j+1;
				while(x<grid.length && grid[i][x]==0){
				b=true;
				grid[i][x]=grid[i][x-1];
				grid[i][x-1]= 0;
				x++;
			}
				//start merging cells

				if(x<grid.length && grid[i][x]==grid[i][x-1]){
				//start merging cells
				b=true;
				grid[i][x]= 2*grid[i][x];
				for(let k=x-1;k>=1;k--){
					grid[i][k]= grid[i][k-1];
				}
				grid[i][0]=0;
			}
		
			
		}
		}
		}
		//console.log(grid);
		if(b==true){
			let div= document.querySelector(".board");
		 while (div.firstChild) {
    div.removeChild(div.lastChild);
  }
		let loc= getrandomlocation();
		render(loc);
		show();
	}else{
	if(gameover()){
		alert("GAME OVER!!")
	}
}
}



function moveup(){
	let b= false;
	for(let j=0;j<grid.length;j++){
		for(let i=1;i<grid.length;i++){
			if(grid[i][j]!=0){
				let x= i-1;
				while(x>=0 && grid[x][j]==0){
				b=true;
				grid[x][j]=grid[x+1][j];
				grid[x+1][j]= 0;
				x--;
			}
				//start merging cells

				if(x>=0 && grid[x][j]==grid[x+1][j]){
					b=true;
				//start merging cells
				grid[x][j]= 2*grid[x][j];
				for(let k=x+1;k<grid.length-1;k++){

					grid[k][j]= grid[k+1][j];
				}
				grid[grid.length-1][j]=0;
			}
		
			
		}
		}
		}
		//console.log(grid);
		if(b==true){
			let div= document.querySelector(".board");
		 while (div.firstChild) {
    div.removeChild(div.lastChild);
  }
		let loc= getrandomlocation();
		render(loc);
		show();
	}else{
	if(gameover()){
		alert("GAME OVER!!")
	}
}
}

function movedown(){
	let b= false;
	for(let j=0;j<grid.length;j++){
		for(let i=grid.length-2;i>=0;i--){
			if(grid[i][j]!=0){
				let x= i+1;
				while(x<grid.length && grid[x][j]==0){
				b=true;
				grid[x][j]=grid[x-1][j];
				grid[x-1][j]= 0;
				x++;
			}
				//start merging cells

				if(x<grid.length && grid[x][j]==grid[x-1][j]){
				//start merging cells
				b=true;
				grid[x][j]= 2*grid[x][j];
				for(let k=x-1;k>=1;k--){
					grid[k][j]= grid[k-1][j];
				}
				grid[0][j]=0;
			}
		
			
		}
		}
		}
		//console.log(grid);
		if(b==true){
			let div= document.querySelector(".board");
		 while (div.firstChild) {
		 	
    div.removeChild(div.lastChild);
  }
		let loc= getrandomlocation();
		render(loc);
		show();
}else{
	if(gameover()){
		alert("GAME OVER!!")
	}
}
}



function gameover(){
	let b= true;
	if(grid[0][0]==0){
		return false;
	}
	for(let i=1;i<grid.length;i++){
		for(let j=0;j<grid.length;j++){
			if(grid[i][j]==grid[i-1][j] || grid[i][j]==0){
				return false;
			}
		}
	}

	for(let i=0;i<grid.length;i++){
		for(let j=1;j<grid.length;j++){
			if(grid[i][j]==grid[i][j-1] || grid[i][j]==0){
				return false;
			}
		}
	}

	let div= document.querySelector(".board");
		 while (div.firstChild) {
    div.removeChild(div.lastChild);
  }
  let nd= document.createElement("h1");
  let text= document.createTextNode("NEW GAME!");
  nd.appendChild(text);
  div.appendChild(nd);
  grid=[[],[]]
	return true;
}