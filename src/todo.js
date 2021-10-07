import './style.css';
import DisplayManager from './display';

class TodoList {
    #displayManager;

    constructor() {
        
        this.#displayManager = new DisplayManager();
    }

    init() {
        this.#displayManager.display();
    }
}

export default TodoList;
