// Stack
class Stack {
    constructor () {
        this._init();
    }

    _init () {
        this._dataStore = [];
        this.top = 0;
    }

    push (element) {
        this._dataStore[this.top++] = element;
    }

    pop (element) {
        --this.top;
        return this._dataStore.pop();
    }

    peek () {
        return this._dataStore[this.top - 1];
    }

    length () {
        return this.top;
    }

    clear () {
        this._init();
    }
}