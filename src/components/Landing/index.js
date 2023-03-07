import React from 'react';
import './style.css';
import Footer from '../Foot';
import ScrollBar from '../Slider/ScrollBar';
import Banner1 from '../img/imgbanner1.png';
import DeezerSearch from '../Termos';

export default function Landing() {
 return (
  <>
   <div className='container'>
   <div className='imagelandingback'/>
    <div className='textlandininitial'>
      <div className='anansilab'><div>Anansi</div><div style={{color:'orange'}}>Lab</div></div>
    Cante suas histórias <br/>seja nossa<br/>voz!
    </div>
    <div className='landincontaincenter'>
      
      
        <div className='banneanasiinto'>
         <div className='bannermusicaltitle'>
          <div className='musicaltitle'><div className='anansilab'>Anansi<div style={{color:'#FE7C38'}}>Lab</div></div></div>
          <div className='subtitlemusical'>Coletivo de produção, publicação e divulgação musical</div>
          <div className='musicaltext'>Bem-vindo a nossa rede, uma plataforme profissional para
           músicos, cantores,<br/> compositores, produtores, beat makers e outros profissionais da música.<br/>
            Nosso objetivo é manter uma base onde esses profissionais possam se conectar,<br/>
             colaborar e compartilhar conhecimentos para ajudar a impulsionar a indústria musical.
          </div>
         </div>
        </div>
        <div className='titlelanding' style={{paddingLeft:'30px',marginTop:'32px'}}>Base de colaboradores</div>
        <div className='dicscrolllanding'><ScrollBar/></div>
        <div className='musicaltextsubti'>
        Bem-vindo a nossa rede, uma plataforme profissional para músicos, cantores,
compositores, produtores, beat makers e outros profissionais da música.
Nosso objetivo é manter uma base onde esses profissionais possam se conectar,
colaborar e compartilhar conhecimentos para ajudar a impulsionar a indústria musical.
    </div>
       
       
    <div className='divexplaned'>
       <div className='titlelanding'>
      Como funciona nossa rede? 
    </div>
      <div className='bannerexplanedone' style={{display:'flex',flexDirection:'row',justifyContent:'flex-end'}}>
       <div style={{display:'flex',flexDirection:'column', alignItems:'start', width:'60%', height:'100%'}}>
        <div> Titulo exemplo </div>
        <div>Texto exemplo</div>
       </div>
       <div style={{display:'flex',width:'40%',height:'100%',backgroundColor:'white'}}>

       </div>
      </div>
      <div className='bannerexplanedone'>
        Explicar sobre a troca entre profissionais do mercado e quem esat entrando
      </div>
      <div className='bannerexplanedone'>
        Explicar sobre a publicacao das musicas e/ou videos
        </div>


       
    </div>

     <Footer className="divfooterlanding"/>
    </div>

    
    </div>

      
    
    </>
  );
}