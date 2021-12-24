class Navigator {
    constructor() {
        this.predictionsSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('predictions');
        this.wordsSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('words');

        this.subjectsCol = 1;
        this.actionsCol = 2;
        this.objectsCol = 3;

        this.predictionNumCol = 1;
        this.predictionIdCol = 2;
        this.predictionRecipientCol = 3;
        this.predictionTextCol = 4;
        this.predictionTranslateCol = 5;
        this.predictionStyleCol = 6;
        this.predictionFilenameCol = 7;
        this.predictionFileUrlCol = 8;
    }

    /**
     * @returns {GoogleAppsScript.Spreadsheet.Range}
     */
    getLastPredictionCell() {
        let sheet = this.predictionsSheet;
        let firstPredictionCell = sheet.getRange(2, this.predictionTextCol);
        let lastPredictionCell = firstPredictionCell;

        if (firstPredictionCell.getValue()) {
            let headerPredictionCell = sheet.getRange(1, this.predictionTextCol);
            lastPredictionCell = headerPredictionCell.getNextDataCell(SpreadsheetApp.Direction.DOWN);
        }

        return lastPredictionCell;
    }

    /**
     * @returns {GoogleAppsScript.Spreadsheet.Range}
     */
    getNewPredictionCell() {
        let lastPredictionCell = this.getLastPredictionCell();
        if (!lastPredictionCell.getValue()) {
            return lastPredictionCell;
        }

        return lastPredictionCell.getSheet().getRange(lastPredictionCell.getRow() + 1, lastPredictionCell.getColumn());
    }

    /**
     * @param {GoogleAppsScript.Spreadsheet.Range} cell
     * @returns {GoogleAppsScript.Spreadsheet.Range}
     */
    getStyleCellSameRow(cell) {
        return this.predictionsSheet.getRange(cell.getRow(), this.predictionStyleCol);
    }

    /**
     * @param {GoogleAppsScript.Spreadsheet.Range} cell
     * @returns {GoogleAppsScript.Spreadsheet.Range}
     */
    getIdCellSameRow(cell) {
        return this.predictionsSheet.getRange(cell.getRow(), this.predictionIdCol);
    }
}
