function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = m15.soundClassifier(https://teachablemachine.withgoogle.com/models/[...], modelReady); 
}

 function modelReady(){
     classifier.classify(gotResults);
 }

 function gotResults(error, results)
 {
    if (error){
        console.error(error);
    } else {

        document.getElementById("result_label").innerHTML = results[0].label;

        if (results[0].label == "Clap") {
            img.src = '3bmV.gif';
           
        }else{
            img.src = '929ca8b51b2a0e3df8887bec41baa334.png';
        }   