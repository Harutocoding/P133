status="";

function preload() {
    img = loadImage("IMG_1135.jpg");

    if(status !="" )
    {
        for (i = 0; i < object.length; i++)
        {
            document.getElementById("status").innerHTML = "Status : Object is Detected";

            fill("#FF0000");
            percent = floor(object[i].confidence * 100);
            text(object[i].label + " " + percent + "%", object[i].x, object[i].y);
            noFill();
            stroke("#FF0000");
            rect(object[i].x, object[i].y, object[i].width, object[i].height);
        }
}
}

function setup() {
    canvas = createCanvas(400, 400);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detectig Object";
}

function modelLoaded(){
    console.log("Model Loaded!")
    status = true;
    objectDetector.detect(img, gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
}