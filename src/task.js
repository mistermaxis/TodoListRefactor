class Task {
    #itemList;

    constructor(itemlist) {
        this.#itemList = itemlist;
    }

    removeTask(task) {
        this.#itemList.removeChild(task);
    }

    generateTask (task) {
        const todoItem = document.createElement('div');
            
        todoItem.classList.add('item');
        const description = document.createElement('span');
        description.innerText = task.description;
        description.classList.add('text');
        const button = document.createElement('button');
        button.type = 'button';
        button.innerText = 'remove';
        button.classList.add('button');

        button.addEventListener('click', () => {
            todoItem.classList.add('animation-remove');
            setTimeout(() => this.removeTask(todoItem), 500);
        });

        todoItem.appendChild(description);
        todoItem.appendChild(button);
        this.#itemList.appendChild(todoItem);
    }
}

export default Task;