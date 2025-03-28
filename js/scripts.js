var canvas_tres = document.getElementById("lienzo-tres");
var canvas_cuatro =document.getElementById("lienzo-cuatro");
var canvas_cinco =document.getElementById("lienzo-cinco");

if(canvas_tres.getContext){
    console.log("si se soporta la propiedas getContext");

    var ctx_3 = canvas_tres.getContext("2d");

    ctx_3.fillStyle = "rgb(111, 122, 243)";
    ctx_3.fillRect(10,10,55,50);

    ctx_3.fillStyle = "rgba(27, 27, 255, 0.5)";
    ctx_3.fillRect(30,30,55,50);

    ctx_3.fillStyle = "rgba(57, 232, 57, 0.76)";
    ctx_3.fillRect(50,50,55,50);

}else{
    console.log("no soporta la propiedad getContext");
}

if(canvas_cuatro.getContext){
    console.log("si se soporta la propiedad getContext");

    var ctx_4 = canvas_cuatro.getContext("2d");

    ctx_4.beginPath();
    ctx_4.moveTo(5,5);
    ctx_4.lineTo(125,125);
    ctx_4.strokeStyle = "#ffffff"
    ctx_4.stroke();

}else{
    console.log("no se soporta la propiedad getContext");
}

if(canvas_cinco.getContext){
    console.log("Si se soporta la propiedad getContext")

    var ctx_5 = canvas_cinco.getContext("2d");

    ctx_5.beginPath();
    ctx_5.setLineDash([5,15]);
    ctx_5.moveTo(0,40);
    ctx_5.lineTo(150,40);
    ctx_5.strokeStyle = "#ffffff"
    ctx_5.stroke();

    ctx_5.beginPath();
    ctx_5.setLineDash([]);
    ctx_5.moveTo(0,120);
    ctx_5.lineTo(150,120);
    ctx_5.strokeStyle = "#ffffff"
    ctx_5.stroke();
}else{
    console.log();
}