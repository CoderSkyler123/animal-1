function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio : true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/SzanNAXYP/model.json', 
    modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}

function gotResults(error,result)
{
    console.log("Got Result!");
}