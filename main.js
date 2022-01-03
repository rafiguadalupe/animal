https://teachablemachine.withgoogle.com/models/oY_6wEX-K/
function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/Lvxp_lKC4/model.json',modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error,results){}
if(error){
    console.error(error);
}
else{
    console.log(results);
    random_number_r=Math.floor(Math.random()*255)+1;
    random_number_g=Math.floor(Math.random()*255)+1;
    random_number_b=Math.floor(Math.random()*255)+1;
    document.getElementById("result_label").innerHTML="I can hear-"+results[0].label;
    document.getElementById("result_confidence").innerHTML="accuracy-"+(results[0].confidence*100).toFixed(2)+"%";
    document.getElementById("result_label").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
    document.getElementById("result_confidence").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
       img=document.getElementById("DOG");
       img1=document.getElementById("CAT");
       img2=document.getElementById("COW");
       img3=document.getElementById("LION"); 
       
if(results[0].label=="clap")
{
 img.src="https://www.akcpetinsurance.com/res/akc/images/icons/home/home_dog.png";
 img1.src="https://i.kym-cdn.com/entries/icons/original/000/026/638/cat.jpg";
 img2.src="https://i.kym-cdn.com/entries/icons/original/000/028/626/cover3.jpg";
 img3.src="https://images-cdn.9gag.com/photo/ayBEwQr_700b.jpg";


}

else if(results[0].label=="bell")
{
 img.src="aliens-01.png";
 img1.src="aliens-02.gif";
 img2.src="aliens-03.png";
 img3.src="aliens-04.png";


}
else if(results[0].label=="boo")
{
 img.src="aliens-01.png";
 img1.src="aliens-02.png";
 img2.src="aliens-03.gif";
 img3.src="aliens-04.png";


}
else
{
 img.src="aliens-01.png";
 img1.src="aliens-02.png";
 img2.src="aliens-03.png";
 img3.src="aliens-04.gif";


}

}
}
