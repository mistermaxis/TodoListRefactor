class StorageManager {
    #storage;

    constructor() {
        this.#storage = window.localStorage;
    }

    save(data) {
        this.#storage.setItem('data', JSON.stringify(data));
    }

    load() {
       const data = JSON.parse(this.#storage.getItem('data'));
       return data;
    }
}

export default StorageManager;