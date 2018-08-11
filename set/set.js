class Set {
    constructor () {
        this._data = [];
    }

    add (data) {
        if (this._data.indexOf(data) === -1) {
            this._data.push(data);
            return true;
        }
        return false;
    }

    remove (data) {
        let index = this._data.indexOf(data);
        if (index == -1 ) {
            return false;
        }

        this._data.splice(index, 1);
        return true;
    }

    contains (data) {
        return this._data.indexOf(data) !== -1;
    }

    size () {
        return this._data.length;
    }

    data () {
        return this._data;
    }

    // 并集
    union (newSet) {
        let tempSet = new Set();
        for (let i = 0; i< this._data.length; i++) {
            tempSet.add(this._data[i]);
        }
        let len = newSet.size();
        let newSetData = newSet.data();
        for (let i = 0; i< len; i++) {
            tempSet.add(newSetData[i]);
        }
        return tempSet;
    }

    // 交集
    intersect (newSet) {
        let tempSet = new Set();
        let len = this.size();
        for (let i = 0; i < len; i++) {
            newSet.contains(this._data[i]) && tempSet.add(this._data[i]);
        }
        return tempSet;
    }

    // 判断子集
    subset (newSet) {
        if (this.size() > newSet.size()) {
            return false;
        }

        let newSetData = newSet.data();
        let len = this.size();
        for (let i = 0; i < len; i++) {
            if (!newSetData.contains(this._data[i])) {
                return false;
            }
        }

        return true;
    }

    // 相对补集
    difference (newSet) {
        let tempSet = new Set();
        let len = this.size();
        for (let i = 0; i < len; i++) {
            if (!newSet.contains(this._data[i])) {
                tempSet.add(this._data[i]);
            }
        }
        return tempSet;
    }
}