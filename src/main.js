function run() {
    let predictor = new Predictor();
    let filler = new Filler();
    filler.fill(predictor);
    Logger.log(predictor.getPrediction());
}
