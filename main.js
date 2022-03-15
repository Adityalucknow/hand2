Webcam.set({
    width:300,
    height:300,
    image_format:'png',
    png_quality:90
});
camera = document.getElementById("camera");
Webcam.attch('#camera');


 function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="capture_image" src="'+data_uri+'"/>';
    });

}

function speak(){
    var synth = window.speechSynthesis;
    speak_data_1 ="The first predction is"+predction_1;
    speak_data_2 ="And the second predction is"+predction_2; 
    var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterThis);
}


console.log('ml5 version:', ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/PupFheEJp/', modelLoaded);

function modelLoaded(){
    console.log('Model Loaded!');
}