class Predictor {
    /**
     * @param {Navigator} navigator
     */
    constructor(navigator) {
        this.nav = navigator;
        this.stylesNum = 14;
        this.idLength = 8;

        this.objects = [];
        this.actions = [];
        this.subjects = [];
        this.usedObjects = [];
        this.usedActions = [];
        this.usedSubjects = [];
    }

    addNewPrediction() {
        let cell = this.nav.getNewPredictionCell();
        this.updatePredictionForCell(cell);
    }

    updateLastPrediction() {
        let cell = this.nav.getLastPredictionCell();
        this.updatePredictionForCell(cell);
    }

    /**
     * @param {GoogleAppsScript.Spreadsheet.Range} cell
     */
    updatePredictionForCell(cell) {
        cell.setValue(this.getPredictionText());
        this.updateStyleForCell(cell);
        this.updateIdForCell(cell);
    }

    /**
     * @param {GoogleAppsScript.Spreadsheet.Range} cell
     */
    updateStyleForCell(cell) {
        let styleCell = this.nav.getStyleCellSameRow(cell);
        styleCell.setValue(this.getRandomStyle());
    }

    /**
     * @param {GoogleAppsScript.Spreadsheet.Range} cell
     */
    updateIdForCell(cell) {
        let idCell = this.nav.getIdCellSameRow(cell);
        idCell.setValue(this.generatePredictionId());
    }

    /**
     * @returns {string}
     */
    getPredictionText() {
        let parts = [];
        parts.push(this.getRandomElement(this.subjects, this.usedSubjects));
        parts.push(this.getRandomElement(this.actions, this.usedActions));
        parts.push(this.getRandomElement(this.objects, this.usedObjects));
        return parts.join(' ');
    }

    /**
     * @param {*[]} array
     * @param {*[]} usedArray
     * @returns {*}
     */
    getRandomElement(array, usedArray) {
        if (array.length === 0) {
            array.push(...usedArray);
            usedArray.length = 0;
        }

        const idx = Math.floor(Math.random() * array.length);
        const element = array[idx];
        usedArray.push(element);
        array.splice(idx, 1);

        return element;
    }

    /**
     * @returns {number}
     */
    getRandomStyle() {
        return Math.ceil(Math.random() * this.stylesNum);
    }

    /**
     * @link https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
     * @returns {string}
     */
    generatePredictionId() {
        let result = '';
        const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        for (let i = 0; i < this.idLength; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
}
