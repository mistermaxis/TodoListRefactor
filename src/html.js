import InputManager from "./input";
import Task from "./task";

class HTMLManager {
    #input;
    #root;
    #items;
    #itemList;
    #task;

    constructor(data, root) {
        this.#root = root;
        this.#items = data.list;
        this.#itemList = document.createElement('div');
        this.#itemList.classList.add('item-list');
        this.#task = new Task(this.#itemList);
        this.#input = new InputManager(data, this.#task);
    }

    generateList() {

        this.#itemList.innerHTML = '';

        if (this.#items && this.#items.length > 0) {

            this.#items.forEach(task => {
                this.#task.generateTask(task);
            });
            return this.#itemList;
        }
        else {
            const message = document.createElement('p');
            message.classList.add('empty-text');
            message.innerText = 'No tasks have been added';
            this.#itemList.appendChild(message);
            return this.#itemList;
        }
    }

    generateClearButton() {
        const button = document.createElement('button');
        button.innerText = 'Clear Completed';
        return button;
    }

    display() {
        this.#root.appendChild(this.#input.generateInput());
        this.#root.appendChild(this.generateList());
        this.#root.appendChild(this.generateClearButton());
    }
}

export default HTMLManager;