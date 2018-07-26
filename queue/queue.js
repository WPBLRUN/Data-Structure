// Queue
// TODO: Dique.
// TODO: Practice.

class Queue {
    constructor () {
        this._init();
    }

    _init() {
        this._dataStore = [];
    }

    enqueue (element) {
        this._dataStore.push(element);
    }

    dequeue (element) {
        return this._dataStore.shift();
    }

    front () {
        return this._dataStore[0];
    }

    back () {
        return this._dataStore[this._dataStore.length -1 ];
    }

    toString () {
        return this._dataStore.toSource();
    }

    isEmpty () {
        return this._dataStore.length === 0;
    }
}

