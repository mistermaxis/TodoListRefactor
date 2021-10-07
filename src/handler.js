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

        todoItem.appendChild(description);
        this.#itemList.appendChild(todoItem);
        this.#itemList.appendChild(this.#input.removeButton);
    }

    updateTasks() {
        this.#itemList.innerHTML = '';

        if (this.#data.list && this.#data.list.length > 0) {

            this.#data.list.forEach(task => {
                this.generateTask(task);
            });
        }
        else {
            const message = document.createElement('p');
            message.classList.add('empty-text');
            message.innerText = 'No tasks have been added';
            this.#itemList.appendChild(message);
       }
    }

    handleTextInput(event) {
        const text = event.currentTarget;

        console.log(text.value);

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
                console.log(this.#data.list);
            }
        }
    }

    // #handleRemoveTask(event) {
        // const items = Array.from(event.currentTarget.parentElement.parentElement.children);
        // const item = event.currentTarget.parentElement;
        // item.classList.add('animation-remove');
        // const index = items.indexOf(item);
// 
        // this.#removeHandler.removeItem(index, this.#storage, this.#data);
        // setTimeout(() => {
            // this.#list.updateTasks();
        // }, 500);
        // console.log(index);
    // }
}

export default HandlerFunctions;