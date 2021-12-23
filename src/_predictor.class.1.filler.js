class Filler {
    constructor() {
        this.sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('src');
    }

    /**
     * @param {Predictor} predictor
     */
    fill(predictor) {
        predictor.subjects = this.getColumnValues(1, 2);
        predictor.actions = this.getColumnValues(2, 2);
        predictor.objects = this.getColumnValues(3, 2);
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
            const cell = this.sheet.getRange(row, column);
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
