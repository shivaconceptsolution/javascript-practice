var s = "welcome in kkkkkkk madam ssssssss pppp";
var arr = s.split(" ")
var max=0;
var maxpall="";
for(var i=0;i<arr.length;i++)
{
     var item = arr[i]; //
     var s1 ="";
     for(var j=item.length-1;j>=0;j--)
     {
            s1+=item[j];
     }
     if(item==s1)
     {
        if(max<item.length)
        {
             max=item.length;
             maxpall=item;
        }
          console.log(item);
     }
}

console.log("max pallindrom is "+maxpall);