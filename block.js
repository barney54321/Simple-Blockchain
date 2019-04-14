var sha = require("sha256");

class Block {

    constructor (index, data, prev) {
        this.index = index;
        this.data = data;
        this.prevHash = prev;
        this.timestamp = Math.floor(Date.now() / 1000);
        this.hash = this.getHash();
    }

    getHash () {
        return sha(JSON.stringify(this.data) + this.prevHash + this.index + this.timestamp);
    }
}

module.exports = Block;
