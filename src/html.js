import ListManager from "./list";
import InputManager from "./input";

class HTMLManager {
    #list;
    #input;
    #itemList;

    constructor() {
        this.#itemList = document.createElement('div');
        this.#itemList.classList.add('item-list');

        this.#input = new InputManager();

        this.#list = new ListManager(this.#itemList, this.#input);

        this.#list.update();
    }

    get textInput() {
        return this.#input.addInput;
    }
   
    get itemList () {
        return this.#itemList;
    }

    get clearAllButton() {
        return this.#input.clearButton;
    }
}

export default HTMLManager;