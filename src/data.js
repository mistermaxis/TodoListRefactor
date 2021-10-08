class DataManager {
    #list;

    constructor(storage) {
        this.#list = storage || [];
    }

    add(item) {
        this.#list.unshift(item);
    }

    remove(idx) {
        this.#list = this.#list.filter((item, index) => idx !== index);
    }

    clear() {
        this.#list = this.#list.filter(item => item.completed === false);
    }

    setCompleted(index, completed) {
        this.#list[index].completed = completed;
    }

    get list() {
        return this.#list;
    }
}

export default DataManager;