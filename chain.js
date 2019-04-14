var Block = require("./block");
var Transaction = require("./transcation");

class BlockChain {
    
    constructor () {
        this.chain = [];
    }

    addBlock (data) {
        let index = this.chain.length;
        let prevHash = 0;
        if (index != 0) {
            prevHash = this.chain[index-1].hash;
        }
        let block = new Block(index, data, prevHash);

        this.chain[index] = block;
    }

    chainIsValid () {
        for (var i = 0; i < this.chain.length; i++) {
            if (this.chain[i].hash != this.chain[i].getHash()) {
                return false;
            }

            if (i > 0 && this.chain[i].prevHash != this.chain[i-1].hash) {
                return false;
            }
        }
        
        return true;
    }

    getLength () {
        return this.chain.length;
    }
}

module.exports = BlockChain;