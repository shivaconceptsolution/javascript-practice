x=[[2,3],[4,5]]
y=[[1,2],[6,7]]
for(var i=0;i<2;i++)
{
    for(var j=0;j<2;j++)
    {
        var s=0;
        for(var k=0;k<2;k++)
        {
           s = s + x[i][k]*y[k][j];
        }
        console.log(s);
    }
}