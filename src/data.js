class DataManager {
    #list;

    constructor(storage) {
        this.#list = storage || [];
    }

    add(item) {
        this.#list.push(item);
        console.log(this.#list);
    }

    remove (idx) {
        this.#list = this.#list.filter((item, index) => idx !== index);
    }

    get list() {
        return this.#list;
    }
}

export default DataManager;