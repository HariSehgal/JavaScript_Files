let todo = [];
let req = prompt("Enter your request");
while(true){
    if (req == "quit"){
        console.log("quitting todo");
        break;
    }
    else if(req == "list"){
        console.log("----------");
        for(task of todo){
            console.log(task);
        }
        console.log("----------");
    }
    else if(req == "add"){
        let newTask = prompt("Enter task you want to add");
        todo.push(newTask);
        console.log("Task added");
    }
    else if(req == "delete"){
        let popTask = prompt("Enter task you want to delete");
        let indx = todo.indexOf(popTask);
        for(task of todo){
            if (task == popTask){
                todo.splice(indx,1);
                console.log("Task removed");
            }
        }
    }
    else{
        console.log("Invalid Choice");
    }
    req = prompt("Enter your request again");
}