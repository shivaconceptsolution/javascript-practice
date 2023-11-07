let arr = [12,56,67,78,12,23,45,12,89,12,78,67,89]
let size1 = parseInt(arr.length/3)
let size2 = parseInt(arr.length/3)
let size3 = arr.length- (size1+size2)
let arr1=[];
let arr2=[];
let arr3=[];
for(var i=0;i<arr.length;i++)
{
   if(i<size1)
   {
       arr1.push(arr[i]);
   }
   else if(i<size1+size2)
   {
    arr2.push(arr[i]);
   }
   else
   {
    arr3.push(arr[i]);
   }
}
console.log(arr1);
console.log(arr2);
console.log(arr3);