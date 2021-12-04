function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/85-WQ9wwM/model.json', modelReady);  
}

function modelReady(){
    classifier.clasify(gotResult);
}

function gotResult(error, results){
    if (error) {
        console.error(error);
    }else{
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;
     
        document.getElementById("result_label").innerHTML = 'I can hear - '+
        results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy - '+
        (result[0].confidence*100).toFixed(2)+"%";
document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_g+","+random_number_b+")";
document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_g+","+random_number_b+")";

img = document.getElementById('aliens1');
img1 = document.getElementById('aliens2');
img2= document.getElementById('aliens3');
img3 = document.getElementById('aliens4');

if(results[0].label =="clap") {
    img.src = ''
}

    }
    function gotResults(error, results) {
        if (error) {
            console.error(error);
        }else{
            console.log(results);
            random_number_r = Math.floor(Math.random()*255)+ 1;
            random_number_g = Math.floor(Math.random( 255)+ 1);
            random_number_b = Math.floor(Math.random( 255)+ 1);

            document.getElementById("result_label").innerHTML = 'I can hear - '+ result[0].label;
            document.getElementById("result_confidence").innerHTML = 'Accuracy - '+(result[0].confidence*100).toFixed(2)+" %";
            document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_nnumber_b;

        img = document.getElementById('cow.jpg');
        img = document.getElementById('download jpg');
        img = document.getElementById('download.png');
        img =  document.getElementById('images.jpg');

        if (results[0].label =="cat") {
            img.src = 'cat.gif';
            img.src = 'download.jpg';
            img.src = 'images.jpg';
            img.src = 'cow.jpg';
        } else if(results[0].label == "dog") {
            img.src = 'dog.gif';
            img1.src = 'download.jpg';
            img2.src = 'download.png';
            img3.src = 'images.jpg';
        }else if(results[0].label == "roar") {
            img.src = '';tigger.gif
            img1.src = 'cown.jpg';
          img2.src = 'download.png';
            img3.src = 'download.jpg';
      
        }
        }
    }
        }
    