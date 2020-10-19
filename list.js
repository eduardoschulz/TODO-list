tasks = [];
//Cria uma Array para armazenar as tasks
//pode ser util para armazenar em um arquivo
var numTask = 1;
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
    }
}
function removeTask(){
    //var remIdTask = document.getElementById.value('taskToRem');
     // aqui se define o id da task que deseja-se deletar
    console.log(rem);
    //rem.id.remove(remIdTask);//faz o contrario da funcao appendChild
    var remIdTask = document.getElementById("taskToRem").value;
    remIdTask.remove();



}

//https://github.com/electron-userland/electron-json-storage
//Pode ser interessante
