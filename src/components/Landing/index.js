import React from 'react';
import './style.css';
import Footer from '../Foot';
import ScrollBar from '../Slider/ScrollBar';
import Banner1 from '../img/capa-face.png';
import DeezerSearch from '../Termos';

 //<Footer className="divfooterlanding"/>

export default function Landing() {
 return (
  <>
   <div className='container'>
   <div className='imagelandingback'/>
    <div className='textlandininitial'>
      <div className='anansilab'><div>Anansi</div><div style={{color:'orange'}}>Lab</div></div>
    </div>
    <div className='landincontaincenter'>
        <div className='banneanasiinto'>
           <img className='bannermusicaltitle' src={Banner1} alt=""/>
        </div>
        <div className='titlelanding' style={{paddingLeft:'30px',marginTop:'32px'}}>Pesquisa </div>
        
        <div className='musicaltextsubti'>
        <iframe width="100%" height="900px" src="https://trancasnomapa.ushahidi.io/posts/create/15" frameborder="0" allowfullscreen></iframe>
        </div>
    </div>
    </div>
    </>
  );
}