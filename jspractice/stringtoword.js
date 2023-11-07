var s1 = "welcome in javascript , it is interpretar based language";
var s = s1 + " ";
var space=0;
for(var i=0;i<s.length;i++)
{
    if(s[i]=' ')
    {
        space++;
    }
}
var word =[];
var data = '';
for(var i=0;i<space;i++)
{
    if(s[i]!=' ')
    {
       data = data + s[i];
    }
    else
    {
        word.push(data);
        data = '';
    }
}
console.log(word);
var max=0;
var maxvalue="";
for(var i=0;i<word.length;i++)
{
    if(max<word[i].length)
    {
        max=word[i].length;
        maxvalue=word[i];
    }
}
console.log("maximum word is "+maxvalue);

