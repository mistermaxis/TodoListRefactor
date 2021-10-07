class UpdateManager {
    #list;

    constructor (list) {
        this.#list = list;
    }

    load() {
        this.#list.update();
    }

    
}

export default UpdateManager;