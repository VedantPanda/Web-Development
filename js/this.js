function update(element){
    document.getElementById('id-1').innerHTML=element.alt;
    document.getElementById('id-1').style.backgroundImage="url('"+element.src+"')";
}
function undo(){
    document.getElementById('id-1').innerHTML="Hover over an image";
    document.getElementById('id-1').style.backgroundImage="url('')";
}