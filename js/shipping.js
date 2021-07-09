function billing()
{
    if(document.getElementById('check').checked)
    {
        document.getElementById('Name').value=document.getElementById('names').value;
        document.getElementById('Code').value=document.getElementById('code').value;
    }
   else
   {
       document.getElementById('Name').value="";
       document.getElementById('Code').value="";
   }
       
}