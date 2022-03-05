const getAnimations=(mainArray)=>{
    var animations=[];
    const tempArray=mainArray.slice();
mergeHelper(mainArray,0,mainArray.length-1,tempArray,animations);
function mergeHelper(mainArray,start,end,tempArray,animations)
{
    if(start===end)
    return;
var mid=Math.floor((start+end)/2);
mergeHelper(tempArray,start,mid,mainArray,animations);
mergeHelper(tempArray,mid+1,end,mainArray,animations);
mergeBoth(mainArray,start,mid,end,tempArray,animations);
}
function mergeBoth(mainArray,start,mid,end,tempArray,animations)
{
    var i=start;
    var j=mid+1;
    var k=start;
    while(i<=mid&& j<=end)
    {
        animations.push([i,j]);//we put them first time to change the color of bars which are compared
        animations.push([i,j]);//2nd time  yo revert back the color to the original one
        if(tempArray[i]<=tempArray[j])
            {
                animations.push([k,tempArray[i]])
                mainArray[k++]=tempArray[i++];

            }
            else
            {
                animations.push([k,tempArray[j]])
                mainArray[k++]=tempArray[j++];
            }
    }

    while(i<=mid)
    {
        animations.push([i,i]);
        animations.push([i,i]);
        animations.push([k,tempArray[i]])
        mainArray[k++]=tempArray[i++];
    }
    while(j<=end)
    {
        animations.push([j,j]);
        animations.push([j,j]);
        animations.push([k,tempArray[j]])
        mainArray[k++]=tempArray[j++];
    }
}
return animations;
}
export default getAnimations;
