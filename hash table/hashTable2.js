//TODO: Hash table article
// 线性探测法法处理碰撞
class HashTable {
    constructor () {
        // Array length strategies
        // 1. Why prime number ?
        // 2. Why pow of 2 ?
        this.tableLength = 127;
        this.table = new Array(this.tableLength);
        this.values = [];
    }

    hash (string) {
        // 秦九韶/霍纳 算法
        // How to chose H.
        const H = 37; // 31?
        let total = 0;
        for (let i = 0; i < string.length; i++) {
            total += H * total + string.charCodeAt(i);
        }
        total = total % this.tableLength;
        return parseInt(total);
    }

    put (key, data) {
        let pos = this.hash(key);
        while (this.table[pos] !== undefined) {
            pos++;
        }
        this.table[pos] = key;
        this.values[pos] = data;
    }

    get (key) {
        let pos = this.hash(key);
        let len = this.table[pos].length;
        while (this.table[pos]!== key && pos < len) {
            pos++;
        }
        return this.values[pos];
    }

    showDistro () {
        for (let i = 0; i < this.tableLength; i++) {
            if (this.table[i] !== undefined) {
                console.log(i , ' : ', this.table[i], this.values[i]);
            }
        }
    }
}
