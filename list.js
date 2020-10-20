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
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(inputTag));
        ul.appendChild(li);
        li.id  = numTask;
        var btsForRem = document.createElement("BUTTON");
        btsForRem.innerHTML = "X";
        li.appendChild(btsForRem);//Lukardos genio da formatacao JS!

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

//https://github.com/electron-userland/electron-json-storage
//Pode ser interessante
