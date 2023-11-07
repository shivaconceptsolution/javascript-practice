//Repeated Element Display
var arr = [1,2,3,6,7,8,2,3,2,5,2]
for(var i=0;i<arr.length;i++)
{
    check=true;
    for(var k=0;k<i;k++)
    {
        if(arr[i]==arr[k])
        {
           check=false;
           break;
        }
    }
    if(check)
    {
    for(var j=i+1;j<arr.length;j++)
    {
        if(arr[i]==arr[j])
        {
            console.log(arr[i]);
            break;
        }
    }
   }
}
