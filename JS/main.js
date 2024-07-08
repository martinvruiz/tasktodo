let btn = document.getElementById("addTask")
let toDo = document.getElementById("toDo")
let doing = document.getElementById("doing")
let done = document.getElementById("done")

function createTaskElement(task){
    let addTask = document.createElement("div");
    addTask.className = "w-4/5 max-w-full p-2 my-2 mx-auto font-bold text-white text-center flex flex-col justify-between items-center";

    let taskText = document.createElement("span");
    taskText.className = "break-words";
    taskText.textContent = task;
    taskText.style.wordBreak = "break-all";

    let moveButton = document.createElement("button");
    moveButton.textContent = "En proceso";
    moveButton.className = "hidden bg-green-600 text-white text-center my-1 px-2 py-1 rounded ml-2 transition-opacity duration-300 opacity-0";

    addTask.addEventListener("mouseenter", ()=>{
        moveButton.classList.remove("hidden");
        moveButton.classList.remove("opacity-0");
        moveButton.classList.add("opacity-100");
    })

    addTask.addEventListener("mouseleave", ()=>{
        moveButton.classList.add("opacity-0");
        moveButton.classList.remove("opacity-100");
        setTimeout(() => {
            moveButton.classList.add("hidden");
        }, 300);
    })

    moveButton.addEventListener("click", () => {
            doing.appendChild(addTask);
            moveButton.remove();
            deleteButton.remove();
            Toastify({
                text: "Movido a en proceso",
                duration: 1500,
                style:{
                    background: "#16a34a"
                },
                }).showToast();

            let moveDone = document.createElement("button")
            moveDone.textContent= "Terminado"
            moveDone.className = "hidden bg-green-600 my-1 text-white px-2 py-1 rounded ml-2 transition-opacity duration-300 opacity-0"

            addTask.addEventListener("mouseenter", ()=>{
                moveDone.classList.remove("hidden");
                moveDone.classList.remove("opacity-0");
                moveDone.classList.add("opacity-100");
            })

            addTask.addEventListener("mouseleave", ()=>{
                moveDone.classList.add("opacity-0");
                moveDone.classList.remove("opacity-100");
                setTimeout(() => {
                    moveDone.classList.add("hidden");
                }, 300);
            })

            addTask.appendChild(moveDone)

            moveDone.addEventListener("click", () => {
                done.appendChild(addTask)
                moveDone.remove()
                Toastify({
                    text: "Movido a terminado",
                    duration: 1500,
                    style:{
                        background: "#16a34a"
                    },
                    }).showToast();
            

            let deleteItem = document.createElement("button")
            deleteItem.textContent= "Eliminar"
            deleteItem.className = "hidden bg-red-600 my-1 text-white px-2 py-1 rounded ml-2 transition-opacity duration-300 opacity-0"
    
            addTask.addEventListener("mouseenter", ()=>{
                deleteItem.classList.remove("hidden");
                deleteItem.classList.remove("opacity-0");
                deleteItem.classList.add("opacity-100");
            })
    
            addTask.addEventListener("mouseleave", ()=>{
                deleteItem.classList.add("opacity-0");
                deleteItem.classList.remove("opacity-100");
                setTimeout(() => {
                    deleteItem.classList.add("hidden");
                }, 300);
            })
    
            deleteItem.addEventListener("click", ()=>{
                done.removeChild(addTask)
                Toastify({
                    text: "Eliminado",
                    duration: 1500,
                    style:{
                        background: "#dc2626"
                    },
                    }).showToast();
            })

            addTask.appendChild(deleteItem)
        })
        });

        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Eliminar";
        deleteButton.className = "hidden bg-red-600 my-1 text-white text-center px-2 py-1 rounded ml-2 transition-opacity duration-300 opacity-0";

        
        addTask.addEventListener("mouseenter", ()=>{
        deleteButton.classList.remove("hidden");
        deleteButton.classList.remove("opacity-0");
        deleteButton.classList.add("opacity-100");
    })

    addTask.addEventListener("mouseleave", ()=>{
        deleteButton.classList.add("opacity-0");
        deleteButton.classList.remove("opacity-100");
        setTimeout(() => {
            deleteButton.classList.add("hidden");
        }, 300);
    })

    deleteButton.addEventListener("click", ()=>{
        toDo.removeChild(addTask)
    })

    addTask.appendChild(taskText);
    addTask.appendChild(moveButton);
    addTask.appendChild(deleteButton)

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
