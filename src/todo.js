import './style.css';
import HTMLManager from './html';
import StorageManager from './storage';
import DataManager from './data';

class TodoList {
    #root;
    #storage;
    #data;
    #html;

    constructor() {
        this.#root = document.getElementById('root');
        this.#storage = new StorageManager();
        this.#data = new DataManager(this.#storage.load());
        this.#html = new HTMLManager(this.#data, this.#root);
    }

    init() {
        this.#html.display();
    }
}

export default TodoList;
