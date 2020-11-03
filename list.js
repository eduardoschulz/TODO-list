tasks = [];
//Cria uma Array para armazenar as tasks
//pode ser util para armazenar em um arquivo
var numTask = 0;
//Define qual eh o id da task

//quando o bt eh pressionado o valor eh guardado na array
addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        btPress();
    }
});
//https://www.youtube.com/watch?v=jfYWwQrtzzY

var draggables = document.querySelectorAll(".draggable"); //searches for all element with draggable tag and store in this var



function btPress(){
    var inputTag = document.getElementById("nameTask").value;
    inputTag = inputTag + " ";
    if(inputTag == ""){
       alert("Please add a name!");
    }

    else{
        numTask += 1;
        console.log(inputTag);
        tasks.push(inputTag);
        console.log(tasks)

        var ul = document.getElementById("list");
        var container = document.createElement("div");
        var li = document.createElement("li");
        ul.appendChild(container);
        li.appendChild(document.createTextNode(inputTag));
        container.appendChild(li);
        container.id = "#" + numTask;
        li.id  = numTask;
        li.setAttribute('draggable',true);//set the element to a draggable one


        var btsForRem = document.createElement("BUTTON");
        //var btUp = document.createElement("BUTTON");
      //  var btDown = document.createElement("BUTTON");
        btsForRem.innerHTML = "X";
        //btUp.innerHTML = "↑";
        //btDown.innerHTML = "↓";
        li.appendChild(btsForRem);//Lukardos genio da formatacao JS!
        //li.appendChild(btUp);
        //li.appendChild(btDown);
        btsForRem.id = numTask;
        btsForRem.setAttribute("onclick", "removeTask()");
        var idBt = (numTask);
        console.log(idBt);
        nameTask.value = " ";
//onclick="btPress()"

        }
    }

function removeTask(){
    console.log("enter removeTask");

    var btnid = event.srcElement.id;
    console.log(btnid);

    var deathtrigger = document.getElementById(btnid);
    deathtrigger.remove();


//elem.parentNode.removeChild(elem);
}
function upOrder(){


}

function downOrder(){




}




//https://github.com/electron-userland/electron-json-storage
//Pode ser interessante
