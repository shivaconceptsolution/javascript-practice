var s = "madamji";
var s1 = "";
for(var i=s.length-1;i>=0;i--)  //2
{
    s1 = s1 + s[i]; //olleh
}

if(s==s1)
{
    console.log("pallindrom");
}
else
{
    console.log("not pallindrom");
}