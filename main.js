function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/85-WQ9wwM/model.json', modelReady);  
}

function modelReady(){
    classifier.clasify(gotResult);
}