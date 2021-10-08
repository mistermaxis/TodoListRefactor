import StorageManager from "./storage";
import DataManager from "./data";

class HandlerFunctions {
    #storage;
    #data;
    #itemList;
    #empty;
    #input;

    constructor(itemlist, input) {
        this.#storage = new StorageManager();
        this.#data = new DataManager(this.#storage.load());
        this.#itemList = itemlist;
        this.#input = input;

        this.#empty = document.createElement('div');
        this.#empty.classList.add('item');
        const message = document.createElement('span');
        message.classList.add('empty-text');
        message.innerText = 'No tasks have been added';
        
        this.#empty.appendChild(message);
        
        this.#input.addInput.addEventListener('keyup', (e) => this.handleTextInput(e));
        this.#input.clearButton.addEventListener('click', () => this.handleClearAll());
    }

    generateTask(task) {
        const todoItem = document.createElement('div');

        todoItem.classList.add('item');

        if (task.animation !== '') {
            todoItem.classList.add(task.animation);
        }
        
        todoItem.addEventListener('animationend', () => {
            todoItem.classList.remove('animation-add');
        })

        task.animation = '';

        this.#storage.save(this.#data.list);
        
        const checkBox = this.#input.checkBox();
        checkBox.classList.add('checkbox');
        checkBox.checked = task.completed;

        checkBox.addEventListener('change', (e) => this.handleCheckboxChange(e));

        const description = document.createElement('span');
        description.innerText = task.description;
        description.classList.add('text');

        const removeButton = this.#input.removeButton();

        removeButton.addEventListener('click', (e) => this.handleRemoveTask(e));

        todoItem.appendChild(checkBox);
        todoItem.appendChild(description);
        todoItem.appendChild(removeButton);
        this.#itemList.appendChild(todoItem);
    }

    updateTasks() {
        if (this.#data.list && this.#data.list.length > 0) {
            const listChildren = this.#itemList.children;

            if (listChildren.length > 0 && listChildren[0] === this.#empty) {
                this.#empty.classList.remove('animation-add');
                this.#empty.classList.add('animation-remove');

                setTimeout(() => {
                    this.#itemList.innerHTML = '';
                    this.#data.list.forEach(task => {
                    this.generateTask(task);
                    });
                }, 300);
            }
            else {
                this.#itemList.innerHTML = '';
                this.#data.list.forEach(task => {
                this.generateTask(task);
                });
            }
        }
        else {
            this.#itemList.innerHTML = '';
            this.#empty.classList.remove('animation-remove');
            this.#empty.classList.add('animation-add');
            this.#itemList.appendChild(this.#empty);
        }
    }

    handleTextInput(event) {
        const text = event.currentTarget;

        if (event.key === 'Enter') {            
            if (text.value.length > 0) {
                const newItem = {
                    description: text.value,
                    completed: false,
                    animation: 'animation-add',
                }
               
                text.value = '';

                this.#data.add(newItem);
                //this.#storage.save(this.#data.list);
                this.updateTasks();
            }
        }
    }

    handleCheckboxChange(event) {
        const items = Array.from(event.currentTarget.parentElement.parentElement.children);
        const item = event.currentTarget.parentElement;

        const index = items.indexOf(item);

        this.#data.setCompleted(index, event.currentTarget.checked);
        this.#storage.save(this.#data.list);

    }

    handleRemoveTask(event) {
        const items = Array.from(event.currentTarget.parentElement.parentElement.children);
        const item = event.currentTarget.parentElement;

        console.log(event.currentTarget.checked);
        
        item.classList.add('animation-remove');
        
        const index = items.indexOf(item);

        this.#data.remove(index);
        //this.#storage.save(this.#data.list);

        setTimeout(() => {
            this.updateTasks();
        }, 500);
    }

    handleClearAll() {
        this.#data.clear();
        const items = this.#itemList.querySelectorAll('input.checkbox');

        items.forEach(item => {
            if (item.checked === true) {
                item.parentElement.classList.add('animation-remove');
            }
        })

        //this.#storage.save(this.#data.list);
        setTimeout(() => {
            this.updateTasks();
        }, 250);
    }
}

export default HandlerFunctions;