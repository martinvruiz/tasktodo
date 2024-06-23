let btn = document.getElementById("addTask")
let toDo = document.getElementById("toDo")
let doing = document.getElementById("doing")
let done = document.getElementById("done")

function createTaskElement(task){
    let addTask = document.createElement("div");
    addTask.className = "w-4/5 max-w-full p-2 my-2 mx-auto text-white text-center flex justify-between items-center";

    let taskText = document.createElement("span");
    taskText.className = "break-words";
    taskText.textContent = task;
    taskText.style.wordBreak = "break-all";

    let moveButton = document.createElement("button");
    moveButton.textContent = "En proceso";
    moveButton.className = "hidden bg-green-600 text-white text-center px-2 py-1 rounded ml-2";

    addTask.addEventListener("mouseenter", ()=>{
        moveButton.classList.remove("hidden")
    })

    addTask.addEventListener("mouseleave", ()=>{
        moveButton.classList.add("hidden")
    })

    moveButton.addEventListener("click", () => {
            doing.appendChild(addTask);
            moveButton.remove();

            let moveDone = document.createElement("button")
            moveDone.textContent= "Terminado"
            moveDone.className = "hidden bg-green-600 text-white px-2 py-1 rounded ml-2"

            addTask.addEventListener("mouseenter", ()=>{
                moveDone.classList.remove("hidden")
            })

            addTask.addEventListener("mouseleave", ()=>{
                moveDone.classList.add("hidden")
            })

            moveDone.addEventListener("click", () => {
                done.appendChild(addTask)
                moveDone.remove()
            })
    addTask.appendChild(moveDone)
});

    addTask.appendChild(taskText);
    addTask.appendChild(moveButton);

    return addTask;
}

btn.addEventListener("click", () =>{
    let task = prompt("Ingrese tarea")

    if(!task){
        Swal.fire({
            icon: "error",
            text: "Agregue una tarea por favor",
        });
    }else{
        let addTask = createTaskElement(task)
        toDo.appendChild(addTask)
    }
})
