//TODO: Hash table article
// 开链法处理碰撞
class HashTable {
    constructor () {
        // Array length strategies
        // 1. Why prime number ?
        // 2. Why pow of 2 ?
        this.tableLength = 127;
        this.table = new Array(this.tableLength);

        // 碰撞处理: 开链法
        for (let i = 0; i < this.tableLength; i++) {
            this.table[i] = [];
        }
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
        let index = 0;
        while (this.table[this.hash(data)][index] !== undefined) {
            index += 2;
        }
        this.table[this.hash(data)][index] = key;
        this.table[this.hash(data)][index + 1] = data;
    }

    get (key) {
        let index = 0;
        let pos = this.hash(key);
        let len = this.table[pos].length;
        while (this.table[pos][index] !== key && index < len) {
            index += 2;
        }
        return this.table[pos][index + 1];
    }

    showDistro () {
        for (let i = 0; i < this.tableLength; i++) {
            if (this.table[i][0] !== undefined) {
                console.log(i , ' : ', this.table[i]);
            }
        }
    }
}
