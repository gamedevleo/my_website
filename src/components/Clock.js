import React,{useRef,useEffect} from 'react';
import "./css/Clock.css";

export const Clock = () => {

  const deg=6;
  const hr = useRef(null);
  const mn = useRef(null);
  const sc = useRef(null);
  useEffect(()=>{
     var clockInterval=setInterval(()=>{
      let day = new Date();
      let hh= day.getHours()*30;
      let mm= day.getMinutes()*deg;
      let ss= day.getSeconds()*deg;
      hr.current.style.transform=`rotateZ(${hh+(mm/12)}deg)`;
      mn.current.style.transform=`rotateZ(${mm}deg)`;
      sc.current.style.transform=`rotateZ(${ss}deg)`;
    },1000);
    return ()=> clearInterval(clockInterval);
  },[])




  return (
    <div className='clock'>
      <div className="hour">
        <div className="hr" id="hr" ref={hr}></div>
      </div>
      <div className="min">
        <div className="mn" id="mn" ref={mn}></div>
      </div>
      <div className="sec">
        <div className="sc" id="sc" ref={sc}></div>
      </div>
    </div>
  )
}
