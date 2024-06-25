console.log("-Welcome Todo Manager-");
let todoList = [];
console.log(todoList.length);

    let todoOption = prompt("What would you like to do?");
    while(todoOption !== "quit"){

        switch(todoOption){
            
            case "new":
               
                let newTodo = prompt("Enter a new Todo");
                todoList.push(newTodo);
                console.log("New ToDo has been added");               
                todoOption = prompt("What would you like to do?");
                break; 
    
            case "list":
                console.log("--Todo list--");
                let i = 0;
                for (const todo of todoList) {
                    
                    console.log(`${i} --> ${todo}`);
                    i++;
                }
                todoOption = prompt("What would you like to do?");
                break;
           
            case "delete":
               let todoIndex = prompt("Enter the INDEX of the todo to delete");
               todoList.splice(parseInt(todoIndex),1);
               console.log("Todo Removed!");
               todoOption = prompt("What would you like to do?");
                break;   
            default:
                todoOption = prompt("Enter valid option..What would you like to do?");
                break;
        }

    }

    console.log("You Quit the app");