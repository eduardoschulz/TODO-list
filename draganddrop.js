<img draggable="true"> //diz q a imagem pode ser arrastada

function drag(ev) { //função q roda qnd arrasta
  ev.dataTransfer.setData("text", ev.target.id);
}

//event.preventDefault()


function drop(ev) { //funcao q roda qnd larga
  ev.preventDefault(); //n deixa largar em local q n pode
  var data = ev.dataTransfer.getData("text"); //dados a transferir (task)
  ev.target.appendChild(document.getElementById(data)); //cria o elemento transferido
}


<div id="div1" ondrop="drop(event)" ondragover="allowDrop(event)">//div habilitada a receber e a transferir
  <img src="img_w3slogo.gif" draggable="true" ondragstart="drag(event)" id="drag1" width="88" height="31">
  // o que será arrastado e suas propiedades
</div>

<div id="div2" ondrop="drop(event)" ondragover="allowDrop(event)"></div>//div habilitada a receber e a transferir

///codigo jorge


var list = document.getElementById('list')
var base, randomized, dragging, draggedOver;
var isRight = 'Not In Order!';

const genRandom = (array) => {
  base = array.slice()
  randomized = array.sort(() => Math.random() - 0.5)
  if (randomized.join("") !== base.join("")){
      renderItems(randomized)
   } else {
     //recursion to account if the randomization returns the original array
     genRandom()
   }
}

const renderItems = (data) =>{
  document.getElementById('isRight').innerText = isRight
  list.innerText = ''
  data.forEach(item=>{
    var node = document.createElement("li");
    node.draggable = true
    node.style.backgroundColor = item
    node.style.backgroundColor = node.style.backgroundColor.length > 0
    ? item : 'lightblue'
    node.addEventListener('drag', setDragging)
    node.addEventListener('dragover', setDraggedOver)
    node.addEventListener('drop', compare)
    node.innerText = item
    list.appendChild(node)
  })
}

const compare = (e) =>{
  var index1 = randomized.indexOf(dragging);
  var index2 = randomized.indexOf(draggedOver);
  randomized.splice(index1, 1)
  randomized.splice(index2, 0, dragging)

  isRight = randomized.join("") === base.join("")
    ? 'In Order!': 'Not In Order!'

  renderItems(randomized)
};


const setDraggedOver = (e) => {
  e.preventDefault();
  draggedOver = Number.isNaN(parseInt(e.target.innerText)) ? e.target.innerText : parseInt(e.target.innerText)
}

const setDragging = (e) =>{
  dragging = Number.isNaN(parseInt(e.target.innerText)) ? e.target.innerText : parseInt(e.target.innerText)
}

// genRandom([0, 1, 2, 3, 4, 5, 6])
genRandom(['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'])
