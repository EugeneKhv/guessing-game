class GuessingGame {
    constructor() {
        this.lowNum = 0;
        this.uppNum = 0;
        this.current = 0;
    }

    setRange(min, max) {
        this.lowNum = min;
        this.uppNum = max;
    }

    guess() {
        this.current = Math.round(this.lowNum + (this.uppNum - this.lowNum) / 2);
        return this.current;
    }

    lower() {
        this.uppNum = this.current;
    }

    greater() {
        this.lowNum = this.current;
    }
}

module.exports = GuessingGame;
