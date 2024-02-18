function eraseGrid() {
  let sqrLength = document.querySelectorAll(".SquareDivs");
  console.log(sqrLength);
  for (j = 0; j <= sqrLength.length - 1; j++) {
    let parent = document.getElementById("gridContainer");
    console.log("removido o " + sqrLength[j] + " n° " + j);
    parent.removeChild(sqrLength[j]);
  }
}

function newGrid() {
  let gridNumber = prompt("Insert a number(max 100) :");
  eraseGrid();
  if (gridNumber > 100) {
    let evt = (event) => {
      event.addEventListener();
      console.log(event);
    };
    evt();
  } else {
    for (let i = 0; i < Math.pow(gridNumber, 2); i++) {
      const sqrDiv = document.createElement("div");
      const att = document.createAttribute("class");

      sqrDiv.addEventListener("dragenter", function colorChange() {
        this.style.backgroundColor = "black";
      });
      sqrDiv.addEventListener("touchmove", function colorChange() {
        this.style.backgroundColor = "black";
      });
      att.value = "SquareDivs";
      sqrDiv.style.width = `${600 / gridNumber - 2}px`;
      sqrDiv.style.height = `${600 / gridNumber - 2}px`;
      sqrDiv.setAttributeNode(att);

      document.getElementById("gridContainer").appendChild(sqrDiv);
    }
  }
}

let btn = document.getElementById("btn");
btn.addEventListener("click", function () {
  newGrid();
});

function quadrado() {
  for (let i = 1; i <= 256; i++) {
    let sqrDiv = document.createElement("div");
    const att = document.createAttribute("class");
    sqrDiv.addEventListener("mouseover", function colorChange() {
      this.style.backgroundColor = "black";
    });
    sqrDiv.addEventListener("touchmove", function colorChange() {
      this.style.backgroundColor = "black";
    });
    att.value = "SquareDivs";
    sqrDiv.setAttributeNode(att);
    document.getElementById("gridContainer").appendChild(sqrDiv);
  }
}
quadrado();
