function addPrediction() {
    predictor.addNewPrediction();
}

function updateLastPrediction() {
    predictor.updateLastPrediction();
}

function batchAddNewPredictions() {
    const ui = SpreadsheetApp.getUi();
    const count = Number(ui.prompt('How many predictions do you want to add?').getResponseText());

    for (let i = 0; i < count; i++) {
        predictor.addNewPrediction();
    }
}
