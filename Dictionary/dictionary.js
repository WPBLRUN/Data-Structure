class Dictionary {
    constructor () {
        this._data = [];
    }

    add (key, value) {
        this._data[key] = value;
    }

    find (key) {
        return this._data[key];
    }

    remove (key) {
        delete this._data[key];
    }

    showAll () {
        Object.keys(this._data).forEach(function (key) {
            console.log(key + ': ' + this._data[key]);
        }, this);
    }

    count () {
        let count  = 0;
        Object.keys(this._data).forEach(function () {
            count++;
        }, this);
        return count;
    }

    clear () {
        Object.keys(this._data).forEach(function (key) {
            delete this._data[key];
        }, this);
    }
}

// TODO: Sort