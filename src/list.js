import HandlerFunctions from './handler';

class ListManager {
    #handler;

    constructor(itemlist, input) {
        this.#handler = new HandlerFunctions(itemlist, input);
    }

    update() {
        this.#handler.updateTasks();
    }
}

export default ListManager;