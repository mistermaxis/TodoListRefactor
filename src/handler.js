import StorageManager from "./storage";
import DataManager from "./data";

class HandlerFunctions {
    #storage;
    #data;
    #itemList;
    #input;

    constructor(itemlist, input) {
        this.#storage = new StorageManager();
        this.#data = new DataManager(this.#storage.load());
        this.#itemList = itemlist;
        this.#input = input;
        
        this.#input.addInput.addEventListener('keyup', (e) => this.handleTextInput(e));
    }

    generateTask(task) {
        const todoItem = document.createElement('div');
        todoItem.classList.add('item');
        
        const description = document.createElement('span');
        description.innerText = task.description;
        description.classList.add('text');

        const removeButton = this.#input.removeButton();

        removeButton.addEventListener('click', (e) => this.handleRemoveTask(e));

        todoItem.appendChild(description);
        todoItem.appendChild(removeButton);
        this.#itemList.appendChild(todoItem);
    }

    updateTasks() {
        this.#itemList.innerHTML = '';

        if (this.#data.list && this.#data.list.length > 0) {

            this.#data.list.forEach(task => {
                this.generateTask(task);
            });
        }
        else {
            const emptyListMessage = document.createElement('div');
            emptyListMessage.classList.add('animation-add');

            const message = document.createElement('span');
            message.classList.add('empty-text');
            message.innerText = 'No tasks have been added';
            
            emptyListMessage.appendChild(message);
            this.#itemList.appendChild(emptyListMessage);
       }
    }

    handleTextInput(event) {
        const text = event.currentTarget;

        if (event.key === 'Enter') {            
            if (text.value.length > 0) {
                const newItem = {
                    description: text.value,
                    completed: false
                }
               
                text.value = '';

                this.#data.add(newItem);
                this.#storage.save(this.#data.list);
                this.updateTasks();
            }
        }
    }

    handleRemoveTask(event) {
        const items = Array.from(event.currentTarget.parentElement.parentElement.children);
        console.log(items);
        console.log(this.#data.list)
        const item = event.currentTarget.parentElement;
        console.log(item);
        item.classList.add('animation-remove');
        const index = items.indexOf(item);
        console.log(index);

        this.#data.remove(index);
        this.#storage.save(this.#data.list);

        setTimeout(() => {
            this.updateTasks();
        }, 500);
    }
}

export default HandlerFunctions;