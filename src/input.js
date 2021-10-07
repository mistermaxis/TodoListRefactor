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

    removeButton() {
        const remove = document.createElement('button');
        remove.type = 'button';
        remove.innerText = 'remove';
        remove.classList.add('remove-button');

        return remove;
    }
}

export default InputManager;