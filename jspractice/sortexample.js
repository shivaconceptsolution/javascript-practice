var arr = [12,56,67,78,89,11]
// [11,12,67,78,89,56]
for(var i=0;i<arr.length;i++)  //2
{
    for(var j=i+1;j<arr.length;j++) // 3 to last
    {
        if(arr[i]>arr[j])   // arr[1]>arr[5]
        {
            var temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    console.log(arr[i]); // 11
}