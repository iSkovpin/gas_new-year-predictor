function newPrediction() {
    predictor.newPrediction();
}

function updatePrediction() {
    predictor.updateLastPrediction();
}

function batchAddNewPredictions() {
    const ui = SpreadsheetApp.getUi();
    const count = Number(ui.prompt('How many predictions do you want to add?').getResponseText());
    Logger.log(count);

    for (let i = 0; i < count; i++) {
        newPrediction();
    }
}
