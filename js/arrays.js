var fruits=["Banana","Orange","Apple","Mango"];
function display(){
    document.getElementById('test').innerHTML=fruits;
}
function addit()
{
    var x=prompt("Enter your favourite food to be added");
    fruits.push(x);
    document.getElementById('test').innerHTML=fruits;
}