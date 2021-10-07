import HTMLManager from "./html";

class DisplayManager {
    #html;
    #root;

    constructor() {
        this.#root = document.getElementById('root');
        this.#html = new HTMLManager();
    }

    display() {
        this.#root.appendChild(this.#html.textInput);
        this.#root.appendChild(this.#html.itemList);
        this.#root.appendChild(this.#html.clearAllButton);
    }
}

export default DisplayManager;