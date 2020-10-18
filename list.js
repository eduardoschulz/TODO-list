tasks = [];
//Cria uma Array para armazenar as tasks
//pode ser util para armazenar em um arquivo

//quando o bt eh pressionado o valor eh guardado na array
function btPress(){
    var inputTag = document.getElementById("nameTask").value; 
    if(inputTag == ""){
       alert("Please add a name!");
    }

    else{
        console.log(inputTag);
        tasks.push(inputTag);
        console.log(tasks)
   



        var ul = document.getElementById("list");
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(inputTag));
        ul.appendChild(li);

    }
    


}
//https://github.com/electron-userland/electron-json-storage
//Pode ser interessante
    
