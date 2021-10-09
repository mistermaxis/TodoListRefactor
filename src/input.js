class InputManager {
    #add;
    #clear;
    
    constructor() {
        this.#add = document.createElement('input');
        this.#add.type = 'text';
        this.#add.placeholder = 'Add a task';
        this.#add.classList.add('add-text');

        this.#clear = document.createElement('button');
        this.#clear.innerText = 'Clear Completed';
        this.#clear.classList.add('clear-button');
    }
    
    get addInput() {
        return this.#add;
    }

    get clearButton() {
        return this.#clear;
    }

    checkBox() {
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.classList.add('checkbox');

        return checkbox;
    }

    removeButton() {
        const remove = document.createElement('button');
        remove.type = 'button';
        remove.innerText = 'remove';
        remove.classList.add('remove-button');

        return remove;
    }
}

export default InputManager;