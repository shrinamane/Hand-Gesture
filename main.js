prediction1=""
prediction2=""
Webcam.set({
    width:350,height:350,image_format:'png', png_quality:90
}) 
camera = document.getElementById ("camera") 
Webcam.attach('#camera')
function takesnapshot() {
    Webcam.snap(function(data_uri){
        document.getElementById ("result").innerHTML='<img id="capturedimage" src="'+data_uri+'"/>';
    })
}
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/70q3d4fsO/model.json",modelloaded) 
function modelloaded(){
    console.log("model is loaded")
}
function speak () {
    var synth = window.speechSynthesis;
    speakdata1 = "The first prediction is" + prediction1
    speakdata2 = "The second prediction is" + prediction2
    var utter_this = new SpeechSynthesisUtterance(speakdata1 + speakdata2)
    synth.speak(utter_this)
} function check () {
    img= document.getElementById ("capturedimage")
    classifier.classify(img,gotresult)
}
function gotresult (error,results){
    if (error) {
        console.log(error)
    } else {
        console.log(results)
        document.getElementById("result_emotion_name").innerHTML= results[0].label 
        document.getElementById("result_emotion_name_2").innerHTML= results[1].label
        if (results[0].label=="Happy") {
            document.getElementById ("update_emoji").innerHTML="&#128522;"}
            if (results[0].label=="Sad") {
                document.getElementById ("update_emoji").innerHTML="&#128546;"}
                if (results[0].label=="Angry") {
                    document.getElementById ("update_emoji").innerHTML="&#128545;"}
                    if (results[0].label=="Normal") {
                        document.getElementById ("update_emoji").innerHTML="&#128528;"}

                        if (results[1].label=="Happy") {
                            document.getElementById ("update_emoji_2").innerHTML="&#128522;"}
                            if (results[1].label=="Sad") {
                                document.getElementById ("update_emoji_2").innerHTML="&#128546;"}
                                if (results[1].label=="Angry") {
                                    document.getElementById ("update_emoji_2").innerHTML="&#128545;"}
                                    if (results[1].label=="Normal") {
                                        document.getElementById ("update_emoji_2").innerHTML="&#128528;"}
                
        
                                        prediction1=results[0].label
                                        prediction2=results[1].label
                                        speak()
    }
}