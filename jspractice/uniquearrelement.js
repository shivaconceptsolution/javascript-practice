//find unique element in array
var x = [12,34,67,78,89,2,2,12]
for(var i=0;i<x.length;i++)
{
  flag=true;
   for(var j=0;j<x.length;j++)
   {
    if(x[i]==x[j] && i!=j)
    {
        flag=false;
        break;
    }
   }
   if(flag)
   {
       console.log(x[i]);
   }
}