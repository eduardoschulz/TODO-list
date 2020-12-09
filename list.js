
tasks = [];
//Create an array to store tasks
//maybe save it on a file
var numTask = 0;
//sets the task id

//accepts enter as a input instead of just clicking on button
addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        btPress();
    }
});

function btPress(){
    var inputTag = document.getElementById("nameTask").value; //gets the task
    inputTag = inputTag + " ";

    if(inputTag == ""){ //checks if task isnt empty
       alert("Please add a name!");
    }

    else{
        numTask += 1;//cycles through tasks so they're organized
        console.log(inputTag); //debugging
        tasks.push(inputTag); //saves task inside array
        console.log(tasks)//debugging

        var ul = document.getElementById("list"); //gets the "list"
        var container = document.createElement("div");//creates a container for the task
        var li = document.createElement("li");
        ul.appendChild(container); //add container inside the list
        li.appendChild(document.createTextNode(inputTag));//add task to li
        container.appendChild(li); //add li to the container
        container.id = "#" + numTask;//gives an id to the container
        container.className = "container" //creates a class for each <div>
        li.id  = numTask; //gives an id for the li
        li.setAttribute('draggable',true);
        li.setAttribute('class', "draggable");//set the element to a draggable one


        var btsForRem = document.createElement("BUTTON");
        //var btUp = document.createElement("BUTTON");
      //  var btDown = document.createElement("BUTTON");
        btsForRem.innerHTML = "X";
        li.appendChild(btsForRem);//Lukardos genio da formatacao JS!
        btsForRem.id = numTask;
        btsForRem.setAttribute("onclick", "removeTask()");
        console.log(numTask);
        nameTask.value = " ";
        //dragSets();
        console.log("out");
        dragCheck()
        }
    }
//This function assigns the X button to delete the task
function removeTask(){
    console.log("enter removeTask");

    var btnid = event.srcElement.id;
    console.log(btnid);

    var deathtrigger = document.getElementById(btnid);
    deathtrigger.remove();


//elem.parentNode.removeChild(elem);
}




function dragCheck(){
  var draggables = document.querySelectorAll(".draggable");
  var containers = document.querySelectorAll(".container");
  console.log("enter drag check")
  var ulDone = document.getElementById('ulDone')
  var dragging = document.querySelector(".dragging");
  var target = document.getElementById('divDone')
  var jabiraca = 0;
  var jervasio = 0; //variáveis Brasileiras salvando a pátria
  draggables.forEach(dragging =>{
    dragging.addEventListener('dragstart', () => {
      jabiraca = 0;
      jervasio = 0;
      console.log('drag start')
    })
    dragging.addEventListener('dragend', () => {
      jabiraca = 1;
      if (jabiraca == 1 && jervasio == 1){
        ulDone.appendChild(dragging)
      }
      console.log('drag end')
    })
    target.addEventListener('dragover', () => {
      jervasio = 1;
      console.log(jervasio, jabiraca);
      console.log("over");
    })
  })

  containers.forEach(container =>{
    container.addEventListener

  })



}
function potobaraShell(){



}
//https://www.youtube.com/watch?v=jfYWwQrtzzY
/*document.addEventListener('DOMContentLoaded', (event) =>{

function confusiondragset(){
  var draggables = document.querySelectorAll(".draggable"); //searches for all element with draggable tag and store in this var
  var containers = document.querySelectorAll(".containers");
  console.log(draggables);
  //draggables.forEach(eventDrag());

  draggables.forEach((draggables) => {
    while(true==true){
      draggables.addEventListener('dragstart', eventDrag(),false)
    }
  });

}

function eventDrag(){
  //draggables.addEventListener("dragstart", dragStart, true);
  console.log("INSIDE eventDrag");

}
function dragStart(){
  console.log('INSIDE drag start');
}
}
*/
//  draggables.addEventListener('dragstart', dragStart());






//https://github.com/electron-userland/electron-json-storage
