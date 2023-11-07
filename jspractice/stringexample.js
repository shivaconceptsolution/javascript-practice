var s = "MANISH";
var s1 ="";
for(var i=0;i<s.length;i++)
{
 var asc = s[i].charCodeAt();
 s1 = s1  + String.fromCharCode(asc+32);
}
console.log(s1)