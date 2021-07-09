function check()
{
    if(document.getElementById('nick').checked)
    {
        document.getElementById('name').style.display="inline";
        document.getElementById('nickname').setAttribute('required',true);
    }
    else
    {
        document.getElementById('nickname').removeAttribute('required');
        document.getElementById('name').style.display="none";
    }
}