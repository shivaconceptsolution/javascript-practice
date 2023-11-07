var mobile = "98712334445";
var msg="valid mobile";
if(mobile.length!=10)
{
    msg = "mobile no should be 10 digit";
}
else
{
for(var i=0;i<mobile.length;i++)
{
    var asc = mobile.charCodeAt();
    if(asc<48 || asc>57)
    {
        msg = "mobile no contains only numeric character";
        break;
    }
}
}
console.log(msg);