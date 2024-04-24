import inquirer from "inquirer";
let toDos = [];
let condition = true;
while (condition) {
    let addTask = await inquirer.prompt([
        {
            name: "todo",
            type: "input",
            message: "what do you want to add in toDos ?"
        },
        {
            name: "addMore",
            type: "confirm",
            message: "are you sure you want to add more todos ?",
            default: "false"
        }
    ]);
    toDos.push(addTask.todo);
    condition = addTask.addMore;
    console.log(toDos);
}
