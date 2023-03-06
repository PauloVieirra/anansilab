import React,{useState} from 'react';
import UserList from '../Slider';
import { BsSpotify } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs"; 
import { BsFacebook } from "react-icons/bs";  
import { BsFillShareFill } from "react-icons/bs";  
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import Musicaone from '../Songs/Artits8/audio1.mp3'; 
import Musicaothow from '../Songs/Artits8/audio2.mp3';
import Musicatree from '../Songs/Artits8/audio3.mp3';
import Musicafour from '../Songs/Artits8/audio4.mp3';
import Musicafive from '../Songs/Artits8/audio5.mp3';
import './styles.css';





export default function Pageuserparc(props) {



  const [estilo, setEstilo] = useState({ 
    display:'flex', 
    width:'28px',
    heigth:'28px',
    backgroundColor:'transparent',
    color:'#fff',
    fontSize:'28px'
   });

   const [estil, setEstil] = useState({ 
    display:'flex', 
    width:'28px',
    heigth:'28px',
    backgroundColor:'transparent',
    color:'#fff',
    fontSize:'28px'
   });

   const [estilez, setEstilez] = useState({ 
    display:'flex', 
    width:'28px',
    heigth:'28px',
    backgroundColor:'transparent',
    color:'#fff',
    fontSize:'28px'
   });
 
  const { meuParametro } = props.location.state;

  const [turnmusic, setTurnmusic] = useState([''])
  
  const [ controlname,setControlname] = useState('');

  const [albumtree, setAlbumtree] = useState('albumtree');

  const mouseEnter = () => {
    setEstilo({
    display:'flex', 
    width:'42px',
    heigth:'42px',
    backgroundColor:'#1ED760',
    color:'#fff',
    fontSize:'28px',
    borderRadius: '12px',
     });
  };

  const mouseleave = () => {
      setEstilo({ 
        display:'flex', 
        width:'42px',
        heigth:'42px',
        backgroundColor:'transparent',
        color:'#fff',
        fontSize:'28px'
     });
  };

  const mouseEnterstill = () => {
    setEstil({
    display:'flex', 
    width:'42px',
    heigth:'42px',
    backgroundColor:' rgb(63, 73, 104)',
    color:'#fff',
    fontSize:'28px',
    borderRadius: '8px',
     });
  };

  const mouseLeavestill = () => {
    setEstil({
      display:'flex', 
      width:'42px',
      heigth:'42px',
      backgroundColor:'transparent',
      color:'#fff',
      fontSize:'28px'
     });
  };

  const mouseEnterStilez = () => {
    setEstilez({
      display:'flex', 
      width:'42px',
      heigth:'42px',
      backgroundColor:'#355AA0',
      color:'#fff',
      fontSize:'28px',
      borderRadius:'21px'
     });
  };
  const mouseLeaveStilez = () => {
    setEstilez({
      display:'flex', 
      width:'42px',
      heigth:'42px',
      backgroundColor:'transparent',
      color:'#fff',
      fontSize:'28px'
     });
  };

  const mouseClick = () => {
    setEstilo({ 
    display:'flex', 
    width:'100%',
    paddingLeft:'30px',
    color:'#fff',
    margin:'6px',
    paddingTop:'6px',
    paddingBottom:'6px',
    backgroundColor:'rgba(119, 119, 121, 0.9)'
   });
};

  function setalbumone(){
    setAlbumtree('albumone');
  }

  function setalbumthow(){
    setAlbumtree('albumthow');
  }

  function setalbumtree(){
    setAlbumtree('albumtree');
  }

  function faixa1(){
    setTurnmusic(Musicaone);
  }
  function faixa2(){
    setTurnmusic(Musicaothow);
  }
  function faixa3(){
    setTurnmusic(Musicatree);
  }
  function faixa4(){
    setTurnmusic(Musicafour);
  }
  function faixa5(){
    setTurnmusic(Musicafive);
  }

  function sharePage(){
    navigator.share({
      title: 'Título da página',
      text: 'Descrição da página',
      url: 'https://www.exemplo.com',
    })
      .then(() => console.log('Página compartilhada com sucesso!'))
      .catch((error) => console.error('Erro ao compartilhar página:', error));
  }

  return (
    <div className='containeruserpac'>
      
      <div className='userparcsup'>
          <div className='imgparams'>
            <div className='iconbackparams'></div>
            <img src={meuParametro.url} alt="" className='imgurlparams'/>
            </div>

            <div className='dadosparams'>
             
             <div className='dadostitleparansint'>
              {meuParametro.nome}{'  '}{meuParametro.sobrenome}
             </div>
            
             <div className='dadostextparansint'>
              {meuParametro.descricao}
             </div>
             <div >
                
             </div>
             <div className='dadosparansint'>
                    <div className='divimgrede'>
                     <BsSpotify style={estilo} onMouseEnter={mouseEnter} onMouseLeave={mouseleave} />
                    
                    </div>
                    <div className='divimgrede' >
                      <BsInstagram style={estil} onMouseEnter={mouseEnterstill} onMouseLeave={mouseLeavestill} />
                      </div>
                    <div className='divimgrede'>
                       <BsFacebook style={estilez} onMouseEnter={mouseEnterStilez} onMouseLeave={mouseLeaveStilez} />
                    </div>
                    <div className='contbtnshared' >
                          <div onClick={sharePage} >
                            <BsFillShareFill className='sharedbtn' />
                     </div>
              </div>

                          
             </div>
            
            </div>
      </div>
      <div className='userparcsub'>
      <div className='titleintgeral'>Discos</div>
         <div className='contlistadiscos'>

         <div className='disco'>
           <div style={{display:'flex',width:'100px'}}><img src={meuParametro.discos.albumu.url} alt="" className='imgalbum'/>
              <div className='playartist'>
                  <div className='play-button' onClick={setalbumone}></div>
              </div>
            </div>
           <div style={{display:'flex',width:'80px', fontSize:'14px', fontFamily:'inter',marginTop:'30px'}}>{meuParametro.discos.albumu.titulo}</div>
            <div style={{display:'flex',flexDirection:'column'}}>
                <div style={{display:'flex',width:'80px', fontSize:'11px', fontFamily:'inter',marginTop:'4px'}}>
                  {meuParametro.discos.albumu.ano} 
                 </div>
                <div style={{display:'flex',width:'80px', fontSize:'11px', fontFamily:'inter',marginTop:'4px'}}>
                  {meuParametro.discos.albumu.tipo}
                </div>
            </div> 
      </div>

            <div className='disco'>
           <div style={{display:'flex',width:'100px'}}><img src={meuParametro.discos.albumd.url} alt="" className='imgalbum'/>
              <div className='playartist'>
                  <div className='play-button' onClick={setalbumthow}></div>
              </div>
            </div>
           <div style={{display:'flex',width:'80px', fontSize:'14px', fontFamily:'inter',marginTop:'30px'}}>{meuParametro.discos.albumd.titulo}</div>
            <div style={{display:'flex',flexDirection:'column'}}>
                <div style={{display:'flex',width:'80px', fontSize:'11px', fontFamily:'inter',marginTop:'4px'}}>
                  {meuParametro.discos.albumd.ano} 
                 </div>
                <div style={{display:'flex',width:'80px', fontSize:'11px', fontFamily:'inter',marginTop:'4px'}}>
                  {meuParametro.discos.albumd.tipo}
                </div>
            </div> 
      </div>

       <div className='disco'>
           <div style={{display:'flex',width:'100px'}}><img src={meuParametro.discos.albumt.url} alt="" className='imgalbum'/>
              <div className='playartist'>
                  <div className='play-button' onClick={setalbumtree}></div>
              </div>
            </div>
           <div style={{display:'flex',width:'80px', fontSize:'14px', fontFamily:'inter',marginTop:'30px'}}>{meuParametro.discos.albumt.titulo}</div>
            <div style={{display:'flex',flexDirection:'column'}}>
                <div style={{display:'flex',width:'80px', fontSize:'11px', fontFamily:'inter',marginTop:'4px'}}>
                  {meuParametro.discos.albumt.ano} 
                 </div>
                <div style={{display:'flex',width:'80px', fontSize:'11px', fontFamily:'inter',marginTop:'4px'}}>
                  {meuParametro.discos.albumt.tipo}
                </div>
            </div> 
      </div>
         
     </div>
         <div>
          <div className='titleintgeral'>Faixas</div>

         { albumtree === 'albumone' &&
         <>

            <div className='linemusic' onClick={faixa4}>
              <div className='lines' onClick={() => setControlname([meuParametro.discos.albumu.musica1,("  - "),meuParametro.nome])}>
              <div><img src={meuParametro.discos.albumu.urlimgmp1} alt="" style={{width:'50px'}} /></div>
              <div className='contsubtitle'>
            <div className='titlemusic'>{meuParametro.discos.albumu.musica1}</div>
            <div className='titleartist' >{meuParametro.nome} {meuParametro.sobrenome}</div>
            </div>
            </div>
            </div>
           
          </>
         }
         
         { albumtree === 'albumthow' &&
         <>

              <div className='linemusic' onClick={faixa4}>
              <div className='lines' onClick={() => setControlname([meuParametro.discos.albumd.musica1,("  - "),meuParametro.nome])}>
              <div><img src={meuParametro.discos.albumd.urlimgmp1} alt="" style={{width:'50px'}} /></div>
              <div className='contsubtitle'>
            <div className='titlemusic'>{meuParametro.discos.albumd.musica1}</div>
            <div className='titleartist' >{meuParametro.nome} {meuParametro.sobrenome}</div>
            </div>
            </div>
            </div>
            <div className='linemusic' onClick={faixa5}>
              <div className='lines' onClick={() => setControlname([meuParametro.discos.albumd.musica2,("  - "),meuParametro.nome])}>
              <div><img src={meuParametro.discos.albumd.urlimgmp2} alt="" style={{width:'50px'}} /></div>
              <div className='contsubtitle'>
            <div className='titlemusic'>{meuParametro.discos.albumd.musica2}</div>
            <div className='titleartist' >{meuParametro.nome} {meuParametro.sobrenome}</div>
            </div>
            </div>
            </div>
            </>
         }
         
         { albumtree === 'albumtree' && 
         <>
            <div className='linemusic' onClick={faixa1}>
              <div className='lines' onClick={() => setControlname([<img src={meuParametro.discos.albumt.urlimgmp1} style={{width:'42px',marginRight:'6px'}}/>,(""),meuParametro.discos.albumt.musica1,("  - "),meuParametro.nome,])}>
              <div><img src={meuParametro.discos.albumt.urlimgmp1} alt="" style={{width:'50px'}} /></div>
              <div className='contsubtitle'>
            <div className='titlemusic'>{meuParametro.discos.albumt.musica1}</div>
            <div className='titleartist' >{meuParametro.nome} {meuParametro.sobrenome}</div>
            </div>
            </div> 
            </div>

            <div className='linemusic' onClick={faixa2}>
              <div className='lines' onClick={() => setControlname([meuParametro.discos.albumt.musica2,("  - "),meuParametro.nome])}>
              <div><img src={meuParametro.discos.albumt.urlimgmp2} alt="" style={{width:'50px'}} /></div>
              <div className='contsubtitle'>
            <div className='titlemusic'>{meuParametro.discos.albumt.musica2}</div>
            <div className='titleartist' >{meuParametro.nome} {meuParametro.sobrenome}</div>
            </div>
            </div>
            </div>

            <div className='linemusic' onClick={faixa3}>
              <div className='lines' onClick={() => setControlname([meuParametro.discos.albumt.musica3,("  - "),meuParametro.nome])}>
              <div><img src={meuParametro.discos.albumt.urlimgmp3} alt="" style={{width:'50px'}} /></div>
              <div className='contsubtitle'>
            <div className='titlemusic'>{meuParametro.discos.albumt.musica3}</div>
            <div className='titleartist' >{meuParametro.nome} {meuParametro.sobrenome}</div>
            </div>
            </div>
            </div>
               
            
            </>
         }

        <div  className='musicplayer'>
        <div className='contplayseg'>{controlname}</div>
            <AudioPlayer
                    autoPlay
                    src={turnmusic}
                    onPlay={e => console.log("onPlay")}
                    controls
                    className='playernative'
                 /> 
                   
        </div>
        
         </div>
      </div>
      <div className='userparclast'>
      <div className='titleintgeral'>conexões</div>
        <UserList/>
        
      </div>
      
      </div>
  );


}