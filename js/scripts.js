const button = document.querySelector('#add');
const buttonClear = document.querySelector('#clear');
const input = document.querySelector('input');
const tasksList = document.querySelector('ul');

const createTask = (event) => {
    const newTask = document.createElement('li');
    const removeButton = document.createElement('button');
    const taskName = document.createElement('span');

    taskName.innerText = input.value

    removeButton.innerText = 'x';
    removeButton.classList.add('remove');

    newTask.classList.add('cta-text');
    newTask.append(taskName, removeButton)

    tasksList.appendChild(newTask);
}

const addTask = (event) => {
    const currentTasks = Array.from(tasksList.children).map((taskItem) => {
        const taskName = taskItem.querySelector('span');
        return taskName.innerText;
    })
    console.log(currentTasks);
    if (currentTasks.includes(input.value)) {
        console.error('HALKO UWAZAC');
    }
    else {
        createTask()
    }


}

button.addEventListener('click', addTask);

const handleRemoveButton = (event) => {
    if (event.target.tagName === 'BUTTON') {
        event.target.parentElement.remove();
    }
};

tasksList.addEventListener('click', handleRemoveButton);

const handleInput = (event) => {
    if (event.keyCode === 13) {
        addTask()
    }
}

input.addEventListener('keyup', handleInput);

const removeTasks = (event) => {
    tasksList.innerHTML = ''
}
buttonClear.addEventListener('click', removeTasks)


/* w domu
//1. Kazde zadanie bedzie mialo checkbox (domyslnie checkbox ma byc niezaznaczony) w momencie kiedy checkbox jest zaznaczone to zadanie jest ukonczone i kolor tekstu
 classlist.toogle
 jak dodajemy zadanie, sprawdzamy liste obecnych zadan
 sprawdzmy czy jest ukonczone czy nie, wtedy pozwolimy dodac to zadanie */
