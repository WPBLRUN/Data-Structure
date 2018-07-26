// Stack
// TODO: 数制转换
// TODO: 判断回文
// TODO: 模仿递归
// TODO: 匹配括号
// TODO: 逆波兰表达式

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