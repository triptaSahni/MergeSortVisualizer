import React, { useEffect, useState } from "react";
import getAnimations from "./getAnimations";
const Visualizer=()=>{
    const width=Math.floor(window.innerWidth/5);
    const height=Math.floor(window.innerHeight-90);

   
    useEffect(()=>{
        resetArray();
    },[]);
    const [arr,setArr]=useState([])
   function resetArray()//function to RESET the array on button click
{
    const array1=[];
    for(var i=0;i<width;i++)
    array1.push(Math.floor(Math.random()*(height-5+1)+5));
   
    setArr(array1);
}



function mergeSort()//function to be called on "MERGE" button click
{
const gotAnimations=getAnimations(arr)
console.log(gotAnimations)
for(let i=0;i<gotAnimations.length;i++)
{
    const bars=document.getElementsByClassName("myClass");
    const RevertColor=(i%3!==2);
    if(RevertColor)
    //true when i=0,1,3,4,6,7,9,...... i.e ,
    //when i=0,3,6...we have to 
    //fix the color of bar1Index and bar2Index to a certain value to show that
    // those are the bars which are being compared at that time.
    //when i=1,4,7,... we have to revert back the color of the bars which were compared in the previous step
    //back to the original color. 

    {

        const[bar1Index,bar2Index]=gotAnimations[i];
        const bar1=bars[bar1Index].style;
        const bar2=bars[bar2Index].style;
        const color=i%3===0?"blue":"rgb(95, 197, 231)";
        setTimeout(()=>{
            bar1.backgroundColor=color;
            bar2.backgroundColor=color;
        },i*5);
        
    }
    else//this condition is true when i=2,5,8,..i.e when we want to set the Kth bar with the new height.
    {
        setTimeout(()=>{
            const[barIndx,newheight]=gotAnimations[i];
            const bar=bars[barIndx].style;
            bar.height=`${newheight}px`;
          },i*5);
    }

}
}   
return(
<>
    <div className="top">
        <div><h3 className="box">MergeSort Visualizer</h3></div>
    <div className="content">
     {arr.map((v,i)=>{
        return <div className="myClass" key={i} style={{height:`${v}px`}}></div>   
     })}
     </div>
     <div className="buttons">
     <button id="button1" onClick={mergeSort}>Merge sort</button>
     <button id="button2" onClick={resetArray}>Reset</button>
     </div>
     </div>
    </>)
}
export default Visualizer;