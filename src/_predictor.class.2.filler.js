class Filler {
    /**
     * @param {Navigator} navigator
     */
    constructor(navigator) {
        this.nav = navigator;
    }

    /**
     * @param {Predictor} predictor
     */
    fill(predictor) {
        predictor.subjects = this.getColumnValues(this.nav.subjectsCol, 2);
        predictor.actions = this.getColumnValues(this.nav.actionsCol, 2);
        predictor.objects = this.getColumnValues(this.nav.objectsCol, 2);
    }

    /**
     *
     * @param {int} column
     * @param {int} startRow
     * @returns {*[]}
     */
    getColumnValues(column, startRow) {
        let result = [];
        let row = startRow;
        while (true) {
            const cell = this.nav.wordsSheet.getRange(row, column);
            const value = cell.getValue();
            if (!value) {
                break;
            }

            result.push(value);
            row++;
        }

        return result;
    }
}
