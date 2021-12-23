class Predictor {
    constructor() {
        this.objects = [];
        this.actions = [];
        this.subjects = [];
    }

    /**
     * @returns {string}
     */
    getPrediction() {
        let parts = [];
        parts.push(this.getRandomElement(this.subjects));
        parts.push(this.getRandomElement(this.actions));
        parts.push(this.getRandomElement(this.objects));
        return parts.join(' ');
    }

    /**
     * @param {*[]} array
     * @returns {*}
     */
    getRandomElement(array) {
        return array[Math.floor(Math.random() * array.length)];
    }
}
