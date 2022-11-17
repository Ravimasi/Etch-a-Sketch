function eraseGrid(){
			for(j = 0 ; j <= 256;j+1){
			let sqrLength = document.getElementsByClassName("SquareDivs")[j];
			let parent = document.getElementById("container");
			console.log("removido o "+ sqrLength + " n° "+ j)
			parent.removeChild(sqrLength)
		}
		}
		
		function newGrid(){
			
			let gridNumber = prompt("Insert a number(max 100) :")
			console.log(gridNumber)
			eraseGrid()
			if(gridNumber > 100){
				function evt(event){
					event.preventDefault()
				}
				evt()
			}
			else{
					
					for(let i = 0;i < gridNumber * gridNumber;i++){
						
						const sqrDiv = document.createElement("div");
						const att = document.createAttribute("class")

						sqrDiv.addEventListener("dragenter", function colorChange(){
							this.style.backgroundColor = "black"
						})
						sqrDiv.addEventListener("touchmove", function colorChange(){
							this.style.backgroundColor = "black"
						})
						att.value = "SquareDivs"
						
						sqrDiv.setAttributeNode(att) 
			
						document.getElementById("container").appendChild(sqrDiv)
						document.body.style.marginBottom += "150vh"
				} 
				   
				}
			}
			
			



	
const sqrDiv = document.createElement("div");
let btn = document.getElementById('btn')
btn.addEventListener("click", function(){
	newGrid()
})

function quadrado(){
	for(let i = 1;i<=256;i++){
			const sqrDiv = document.createElement("div");
			const att = document.createAttribute("class")
			sqrDiv.addEventListener("dragenter", function colorChange(){
				this.style.backgroundColor = "black"
			})
			sqrDiv.addEventListener("touchmove", function colorChange(){
				this.style.backgroundColor = "black"
			})
			att.value = "SquareDivs"
			sqrDiv.setAttributeNode(att)
			document.getElementById("container").appendChild(sqrDiv)
	}
}
quadrado()
