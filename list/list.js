// List
class List  {
    constructor () {
        this._init();
    }

    _init () {
        this._list = [];
        this._listSize = 0;
        this._pos = 0;
    }

    append (element) {
        this._list[this._listSize++] = element;
    }

    insert (element, after) {
        let position = this._find(after);
        if (position > -1) {
            this._list.splice(position + 1, 0, element);
            return true;
        }
        return false;
    }

    remove (element) {
        let position = this._find(element);
        if (position > -1) {
            this._list.splice(position, 1);
            --this._listSize;
            return true;
        }
        return false;
    }

    clear () {
        this._init();
    }

    front () {
        this._pos = 0;
    }

    end () {
        this._pos = this._listSize - 1;
    }

    next () {
        if (this._pos < this._listSize - 1 ) {
            ++this._pos;
        }
    }

    currPos () {
        return this._pos;
    }

    moveTo (position) {
        if (position > -1 && position < this._listSize) {
            this._pos = position;
            return true;
        }
        return false;
    }

    getElement () {
        return this._list[this._pos];
    }

    hasNext () {
        return this._pos < this._listSize - 1;
    }

    hasPrev () {
        return this._pos > 0;
    }

    contains (element) {
        return this._find(element) !== -1;
    }

    toString () {
        return this._list.toString();
    }

    length () {
        return  this._listSize;
    }

    _find (element) {
        for (let i = 0; i < this._listSize; i++) {
            if (_equal(this._list[i], element)) {
                return i;
            }
        }
        return -1;
    }

}

//TODO: Util deep equal.
function  _equal (x, y) {
    return x === y;
}