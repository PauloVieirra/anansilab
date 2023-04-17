import React,{useRef ,useEffect} from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import * as ROLES from '../../constants/roles';
import './style.css';



export default function Feedpage(props) {
    const { userfeed } = props.location.state;

    const ref = useRef();

  

return (
   <div className='contfeedplay'>
    
    <div className='feedplaytop'>
    
    </div>
    <div className='feedplayimg'>
       <img className='imgplayfeed' src={userfeed.imageUrl}/> 
    </div>
    
    <div className='feeddatatexts'>
  <div className='feeddatatitle'>{userfeed.title}</div>
  <div className='feeddataautor'>{userfeed.author}</div>
  <div className='feeddataprod'>Produtor:
   <div className='fontprod'>
   {userfeed.year} 
   </div>
  </div>
  <div className='feeddatadescription'>
    {userfeed.description}
  </div>
   </div>

  <div className='playerfedd'>
  <AudioPlayer
      src={userfeed.audioUrl}
      className='playerfedd'
      onPlay={() => console.log('onPlay')}
      style={{ marginBottom: '1px' }}
      
    />
    </div>

  </div>
  );
}