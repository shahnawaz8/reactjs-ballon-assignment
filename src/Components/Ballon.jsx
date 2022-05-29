import { useState } from 'react';
import './Ballon.css';
export const Ballons = ()=>{
    const [selected,setSelet] = useState(0);
    const [one,setOne]    = useState(false);
    const [two,setTwo]    = useState(false);
    const [three,setThree]= useState(false);
    const [four,setFour]  = useState(false);
    const [five,setFive]  = useState(false);

    const handleNumber = (s)=>{
        if(s == 1) one?setOne(false):setOne(true)
        else if(s == 2) two?setTwo(false):setTwo(true);
        else if(s == 3) three?setThree(false):setThree(true);
        else if(s == 4) four?setFour(false):setFour(true);
        else if(s == 5) five?setFive(false):setFive(true);
    }
    return(
        <>
            <h1>Ballons Assignment</h1>
            <div className="mainDiv">
                <div className='mainDivLeft'>

                    <div className='emptyDiv'>

                        {one?<div style={{'backgroundColor':'#d5e8d4'}} onClick={()=>one?setOne(false):setOne(true)}>1</div>:""}
                        {two?<div style={{"backgroundColor":'#ffe6cd'}} onClick={()=>two?setTwo(false):setTwo(true)} className="color color2">2</div>:""}
                        {three?<div style={{'backgroundColor':'#6a00ff'}} onClick={()=>three?setThree(false):setThree(true)} className="color color3">3</div>:""}
                        {four?<div style={{"backgroundColor":'#d9e8fb'}} onClick={()=>four?setFour(false):setFour(true)} className="color color4">4</div>:""}
                        {five?<div style={{"backgroundColor":'#e2d5e7'}} className="color color5" onClick={()=>five?setFive(false):setFive(true)}>5</div>:""}

                    </div>
                </div>
                <div className='mainDivMid'>


                        {!one?<div style={{'backgroundColor':'#d5e8d4'}} onClick={()=>one?setOne(false):setOne(true)}>1</div>:""}
                        {!two?<div style={{"backgroundColor":'#ffe6cd'}} onClick={()=>two?setTwo(false):setTwo(true)} className="color color2">2</div>:""}
                        {!three?<div style={{'backgroundColor':'#6a00ff'}} onClick={()=>three?setThree(false):setThree(true)} className="color color3">3</div>:""}
                        {!four?<div style={{"backgroundColor":'#d9e8fb'}} onClick={()=>four?setFour(false):setFour(true)} className="color color4">4</div>:""}
                        {!five?<div style={{"backgroundColor":'#e2d5e7'}} className="color color5" onClick={()=>five?setFive(false):setFive(true)}>5</div>:""}

                </div>
                <div className='mainDivRight'>

                    <input className='text-box' type="number" value={selected} onChange={(e)=>setSelet(e.target.value)}/>
                    <button onClick={()=>handleNumber(selected)}>shoot</button>
      
                </div>
            </div>
        </>
    )
}