class InputManager {
    #data;
    #task;
    constructor(data, task) {
        this.#data = data;
        this.#task = task;
    }

    #handleInput(event, data) {
        const text = event.currentTarget.value;

        if (event.key === 'Enter' || event.charCode === 13) {
            if (text.length > 0) {
                const newItem = {
                    description: text,
                    completed: false
                }
                data.add(newItem);
                this.#task.generateTask(newItem);
            }
        }
    }

    generateInput() {
        const input = document.createElement('input');
        input.type = 'text';

        input.addEventListener('keyup', (e) => this.#handleInput(e, this.#data));

        return input;
    }

    generateClear() {

    }
}

export default InputManager;