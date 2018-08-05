//TODO: Hash table article
//TODO: 碰撞处理
class HashTable {
    constructor () {
        // Array length strategies
        // 1. Why prime number ?
        // 2. Why pow of 2 ?
        this.tableLength = 127;
        this.table = new Array(this.tableLength);
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

    put (data) {
        this.table[this.hash(data)] = data;
    }

    get (key) {
        return this.table[this.hash(key)];
    }

    showDistro () {
        for (let i = 0; i < this.tableLength; i++) {
            if (this.table[i] !== undefined) {
                console.log(i , ' : ', this.table[i]);
            }
        }
    }
}
