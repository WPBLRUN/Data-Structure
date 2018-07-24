// List
//  getElement()
//  insert()
//  front()
//  end()
//  prev()
//  next()
//  currPos()
//  moveTo()
class List  {
    constructor () {
        this._init();
    }

    _init () {
        this._list = [];
        this.listSize = 0;
        this.pos = 0;
    }

    append (element) {
        this._list[this.listSize++] = element;
    }

    remove (element) {
        let len = this.listSize;
        for (let i = 0; i < len; i++) {
            if (this._equal(this._list[i], element)) {
                this._list.splice(i,1);
                --this.listSize;
                return true;
            }
        }
        return false;
    }

    clear () {
        this._init();
    }

    toString () {
        return this._list.toString();
    }

    length () {
        return  this.listSize;
    }

    _equal (x, y) {
        //TODO: Util deep equal.
        return x === y;
    }
}
