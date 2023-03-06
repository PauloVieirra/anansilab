import React,{useState} from 'react';
import { useHistory } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './style.css';



export default function Slidertop() {

    const history = useHistory();

    function handleClick() {
      history.push({
        pathname: '../Pageuserparc',
        state: { meuParametro:userparc }
      });
    }
    const [userparc,setUserparc]=useState(null);

    function selecionarObjeto(item) {
        setUserparc(item);
      }

    function limparObjeto(){
        setUserparc('')
    }

    const base= [
          {id:1,
            nome:'JRDK',
            sobrenome:'',
            funcao:'Raper',
            descricao:'Um músico é um artista que cria e toca músicase com pessoas em todo o mundo.',
            url: 'https://thumbs.dreamstime.com/z/monkey-o-raper-vestido-no-hoodie-d%C3%B3lar-da-colar-gravura-preta-do-vintage-112131809.jpg',

            discos:{
              albumu:{
                titulo:'Rezar e amar',
                tipo:'LP',
                ano:'2020',
                url:'https://i.pinimg.com/564x/f3/80/52/f380520f49ae8c22fd3ecf22610b8698.jpg',
                 
                urlimgmp1:'https://i.pinimg.com/564x/de/1b/31/de1b3142f61767f05d2806e0ee79fa95.jpg',
                musica1:'Chega mais',
                faixa1:'../Songs/Artits8/audio1.mp3',

                urlimgmp2:'https://i.pinimg.com/564x/63/13/8d/63138d4a0ac380ca8b8b0d27790ddd48.jpg',
                musica2:'Trap Bomba',
                faixa2:'../Songs/Artits8/audio2.mp3',

                urlimgmp3:'https://i.pinimg.com/564x/63/13/8d/63138d4a0ac380ca8b8b0d27790ddd48.jpg',
                musica3:'OMG',
                faixa3:'../Songs/Artits8/audio3.mp3',
              },
              albumd:{
                titulo:'Foco',
                ano:'2022',
                tipo:'LP',
                url:'https://i.pinimg.com/564x/8f/1f/06/8f1f06e8dafc34447c462a06294e71dc.jpg',

                urlimgmp1:'https://i.pinimg.com/736x/ae/aa/6d/aeaa6d5615c17855bbe1278af287ed8c.jpg',
                musica1:'Trap Bomba13',
                faixa1:'../Songs/Artits8/audio1.mp3',

                urlimgmp2:'https://i.pinimg.com/564x/8f/1f/06/8f1f06e8dafc34447c462a06294e71dc.jpg',
                musica2:'Chama Quente',
                faixa2:'../Songs/Artits8/audio3.mp3',

                urlimgmp3:'https://i.pinimg.com/564x/63/13/8d/63138d4a0ac380ca8b8b0d27790ddd48.jpg',
                musica3:'OMG',
                faixa3:'../Songs/Artits8/audio3.mp3',
              },
              albumt:{
                titulo:'Blacklandia',
                ano:'2022',
                tipo:'LP',
                url:'https://i.pinimg.com/564x/f9/4a/15/f94a15e63203d81c4a6362e72bc06693.jpg',

                urlimgmp1:'https://i.pinimg.com/564x/63/13/8d/63138d4a0ac380ca8b8b0d27790ddd48.jpg',
                musica1:'To you',
                faixa3:'../Songs/Artits8/audio4.mp3',

                urlimgmp2:'https://i.pinimg.com/564x/25/28/6c/25286caf9d585e8021d565731f2b1870.jpg',
                musica2:'JKD-PL',
                faixa3:'../Songs/Artits8/audio5.mp3',

                urlimgmp3:'https://i.pinimg.com/564x/b2/6e/9a/b26e9a421176ca34deb9bb9fb4d01985.jpg',
                musica3:'OMG',
                faixa3:'../Songs/Artits8/audio4.mp3',
              },
            },
          },
          
          {id:2,
            nome:'Marcos',
            sobrenome:'Brito',
            funcao:'Raper',
            descricao:'Um músico é um artista que cria e toca músicase com pessoas em todo o mundo.',
            url: 'http://cdn.shopify.com/s/files/1/0222/0104/0992/articles/Capa_-_A_Relacao_das_Joias___Ice__com_a_cena_do_Hip_Hop_Trap_e_Cultura_Street_ceba8d11-6166-4a34-bead-ee0417c9ebbb_1024x1024.png?v=1663347795', 
           
            discos:{
              albumu:{
                titulo:'Rezar e amar',
                tipo:'LP',
                ano:'2020',
                url:'https://i.pinimg.com/564x/f3/80/52/f380520f49ae8c22fd3ecf22610b8698.jpg',
                 
                urlimgmp1:'https://i.pinimg.com/564x/de/1b/31/de1b3142f61767f05d2806e0ee79fa95.jpg',
                musica1:'Chega mais',
                faixa1:'../Songs/Artits8/audio1.mp3',

                urlimgmp2:'https://i.pinimg.com/564x/63/13/8d/63138d4a0ac380ca8b8b0d27790ddd48.jpg',
                musica2:'Trap Bomba',
                faixa2:'../Songs/Artits8/audio2.mp3',

                urlimgmp3:'https://i.pinimg.com/564x/63/13/8d/63138d4a0ac380ca8b8b0d27790ddd48.jpg',
                musica3:'OMG',
                faixa3:'../Songs/Artits8/audio3.mp3',
              },
              albumd:{
                titulo:'Foco',
                ano:'2022',
                tipo:'LP',
                url:'https://i.pinimg.com/564x/8f/1f/06/8f1f06e8dafc34447c462a06294e71dc.jpg',

                urlimgmp1:'https://i.pinimg.com/736x/ae/aa/6d/aeaa6d5615c17855bbe1278af287ed8c.jpg',
                musica1:'Trap Bomba13',
                faixa1:'../Songs/Artits8/audio1.mp3',

                urlimgmp2:'https://i.pinimg.com/564x/8f/1f/06/8f1f06e8dafc34447c462a06294e71dc.jpg',
                musica2:'Chama Quente',
                faixa2:'../Songs/Artits8/audio3.mp3',

                urlimgmp3:'https://i.pinimg.com/564x/63/13/8d/63138d4a0ac380ca8b8b0d27790ddd48.jpg',
                musica3:'OMG',
                faixa3:'../Songs/Artits8/audio3.mp3',
              },
              albumt:{
                titulo:'Blacklandia',
                ano:'2022',
                tipo:'LP',
                url:'https://i.pinimg.com/564x/f9/4a/15/f94a15e63203d81c4a6362e72bc06693.jpg',

                urlimgmp1:'https://i.pinimg.com/564x/63/13/8d/63138d4a0ac380ca8b8b0d27790ddd48.jpg',
                musica1:'To you',
                faixa3:'../Songs/Artits8/audio4.mp3',

                urlimgmp2:'https://i.pinimg.com/564x/25/28/6c/25286caf9d585e8021d565731f2b1870.jpg',
                musica2:'JKD-PL',
                faixa3:'../Songs/Artits8/audio5.mp3',

                urlimgmp3:'https://i.pinimg.com/564x/b2/6e/9a/b26e9a421176ca34deb9bb9fb4d01985.jpg',
                musica3:'OMG',
                faixa3:'../Songs/Artits8/audio4.mp3',
              },
            },
            },
          {id:3,
             nome:'Andrea',
             sobrenome:'Lemos',
             funcao:'Cantora',
             descricao:'Um músico é um artista que cria e toca músicase com pessoas em todo o mundo.',
             url: 'https://images.pexels.com/photos/4315830/pexels-photo-4315830.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',

             discos:{
              albumu:{
                titulo:'Rezar e amar',
                tipo:'LP',
                ano:'2020',
                url:'https://i.pinimg.com/564x/f3/80/52/f380520f49ae8c22fd3ecf22610b8698.jpg',
                 
                urlimgmp1:'https://i.pinimg.com/564x/de/1b/31/de1b3142f61767f05d2806e0ee79fa95.jpg',
                musica1:'Chega mais',
                faixa1:'../Songs/Artits8/audio1.mp3',

                urlimgmp2:'https://i.pinimg.com/564x/63/13/8d/63138d4a0ac380ca8b8b0d27790ddd48.jpg',
                musica2:'Trap Bomba',
                faixa2:'../Songs/Artits8/audio2.mp3',

                urlimgmp3:'https://i.pinimg.com/564x/63/13/8d/63138d4a0ac380ca8b8b0d27790ddd48.jpg',
                musica3:'OMG',
                faixa3:'../Songs/Artits8/audio3.mp3',
              },
              albumd:{
                titulo:'Foco',
                ano:'2022',
                tipo:'LP',
                url:'https://i.pinimg.com/564x/8f/1f/06/8f1f06e8dafc34447c462a06294e71dc.jpg',

                urlimgmp1:'https://i.pinimg.com/736x/ae/aa/6d/aeaa6d5615c17855bbe1278af287ed8c.jpg',
                musica1:'Trap Bomba13',
                faixa1:'../Songs/Artits8/audio1.mp3',

                urlimgmp2:'https://i.pinimg.com/564x/8f/1f/06/8f1f06e8dafc34447c462a06294e71dc.jpg',
                musica2:'Chama Quente',
                faixa2:'../Songs/Artits8/audio3.mp3',

                urlimgmp3:'https://i.pinimg.com/564x/63/13/8d/63138d4a0ac380ca8b8b0d27790ddd48.jpg',
                musica3:'OMG',
                faixa3:'../Songs/Artits8/audio3.mp3',
              },
              albumt:{
                titulo:'Blacklandia',
                ano:'2022',
                tipo:'LP',
                url:'https://i.pinimg.com/564x/f9/4a/15/f94a15e63203d81c4a6362e72bc06693.jpg',

                urlimgmp1:'https://i.pinimg.com/564x/63/13/8d/63138d4a0ac380ca8b8b0d27790ddd48.jpg',
                musica1:'To you',
                faixa3:'../Songs/Artits8/audio4.mp3',

                urlimgmp2:'https://i.pinimg.com/564x/25/28/6c/25286caf9d585e8021d565731f2b1870.jpg',
                musica2:'JKD-PL',
                faixa3:'../Songs/Artits8/audio5.mp3',

                urlimgmp3:'https://i.pinimg.com/564x/b2/6e/9a/b26e9a421176ca34deb9bb9fb4d01985.jpg',
                musica3:'OMG',
                faixa3:'../Songs/Artits8/audio4.mp3',
              },
            },
            },
          {id:4, 
            nome:'Antonia',
            sobrenome:'Ga',
            funcao:'Produtora',
            descricao:'Um músico é um artista que cria e toca músicase com pessoas em todo o mundo.',
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDBhq8JSHYk1r7Om9dbPkOema5q7iy7-NKahI5ycilmjVwLsotFFHSMO-KmyI9cwEmuE8&usqp=CAU',
            
            discos:{
              albumu:{
                titulo:'Rezar e amar',
                tipo:'LP',
                ano:'2020',
                url:'https://i.pinimg.com/564x/f3/80/52/f380520f49ae8c22fd3ecf22610b8698.jpg',
                 
                urlimgmp1:'https://i.pinimg.com/564x/de/1b/31/de1b3142f61767f05d2806e0ee79fa95.jpg',
                musica1:'Chega mais',
                faixa1:'../Songs/Artits8/audio1.mp3',

                urlimgmp2:'https://i.pinimg.com/564x/63/13/8d/63138d4a0ac380ca8b8b0d27790ddd48.jpg',
                musica2:'Trap Bomba',
                faixa2:'../Songs/Artits8/audio2.mp3',

                urlimgmp3:'https://i.pinimg.com/564x/63/13/8d/63138d4a0ac380ca8b8b0d27790ddd48.jpg',
                musica3:'OMG',
                faixa3:'../Songs/Artits8/audio3.mp3',
              },
              albumd:{
                titulo:'Foco',
                ano:'2022',
                tipo:'LP',
                url:'https://i.pinimg.com/564x/8f/1f/06/8f1f06e8dafc34447c462a06294e71dc.jpg',

                urlimgmp1:'https://i.pinimg.com/736x/ae/aa/6d/aeaa6d5615c17855bbe1278af287ed8c.jpg',
                musica1:'Trap Bomba13',
                faixa1:'../Songs/Artits8/audio1.mp3',

                urlimgmp2:'https://i.pinimg.com/564x/8f/1f/06/8f1f06e8dafc34447c462a06294e71dc.jpg',
                musica2:'Chama Quente',
                faixa2:'../Songs/Artits8/audio3.mp3',

                urlimgmp3:'https://i.pinimg.com/564x/63/13/8d/63138d4a0ac380ca8b8b0d27790ddd48.jpg',
                musica3:'OMG',
                faixa3:'../Songs/Artits8/audio3.mp3',
              },
              albumt:{
                titulo:'Blacklandia',
                ano:'2022',
                tipo:'LP',
                url:'https://i.pinimg.com/564x/f9/4a/15/f94a15e63203d81c4a6362e72bc06693.jpg',

                urlimgmp1:'https://i.pinimg.com/564x/63/13/8d/63138d4a0ac380ca8b8b0d27790ddd48.jpg',
                musica1:'To you',
                faixa3:'../Songs/Artits8/audio4.mp3',

                urlimgmp2:'https://i.pinimg.com/564x/25/28/6c/25286caf9d585e8021d565731f2b1870.jpg',
                musica2:'JKD-PL',
                faixa3:'../Songs/Artits8/audio5.mp3',

                urlimgmp3:'https://i.pinimg.com/564x/b2/6e/9a/b26e9a421176ca34deb9bb9fb4d01985.jpg',
                musica3:'OMG',
                faixa3:'../Songs/Artits8/audio4.mp3',
              },
            },
          },
          {id:5,
             nome:'Jhon',
             sobrenome:'Santos',
             funcao:'DJ',
             descricao:'Um músico é um artista que cria e toca músicase com pessoas em todo o mundo.',
             url: 'https://i.scdn.co/image/ab6761610000e5eb95aa9ff29c207fb3691b66bd',
             
             discos:{
              albumu:{
                titulo:'Rezar e amar',
                tipo:'LP',
                ano:'2020',
                url:'https://i.pinimg.com/564x/f3/80/52/f380520f49ae8c22fd3ecf22610b8698.jpg',
                 
                urlimgmp1:'https://i.pinimg.com/564x/de/1b/31/de1b3142f61767f05d2806e0ee79fa95.jpg',
                musica1:'Chega mais',
                faixa1:'../Songs/Artits8/audio1.mp3',

                urlimgmp2:'https://i.pinimg.com/564x/63/13/8d/63138d4a0ac380ca8b8b0d27790ddd48.jpg',
                musica2:'Trap Bomba',
                faixa2:'../Songs/Artits8/audio2.mp3',

                urlimgmp3:'https://i.pinimg.com/564x/63/13/8d/63138d4a0ac380ca8b8b0d27790ddd48.jpg',
                musica3:'OMG',
                faixa3:'../Songs/Artits8/audio3.mp3',
              },
              albumd:{
                titulo:'Foco',
                ano:'2022',
                tipo:'LP',
                url:'https://i.pinimg.com/564x/8f/1f/06/8f1f06e8dafc34447c462a06294e71dc.jpg',

                urlimgmp1:'https://i.pinimg.com/736x/ae/aa/6d/aeaa6d5615c17855bbe1278af287ed8c.jpg',
                musica1:'Trap Bomba13',
                faixa1:'../Songs/Artits8/audio1.mp3',

                urlimgmp2:'https://i.pinimg.com/564x/8f/1f/06/8f1f06e8dafc34447c462a06294e71dc.jpg',
                musica2:'Chama Quente',
                faixa2:'../Songs/Artits8/audio3.mp3',

                urlimgmp3:'https://i.pinimg.com/564x/63/13/8d/63138d4a0ac380ca8b8b0d27790ddd48.jpg',
                musica3:'OMG',
                faixa3:'../Songs/Artits8/audio3.mp3',
              },
              albumt:{
                titulo:'Blacklandia',
                ano:'2022',
                tipo:'LP',
                url:'https://i.pinimg.com/564x/f9/4a/15/f94a15e63203d81c4a6362e72bc06693.jpg',

                urlimgmp1:'https://i.pinimg.com/564x/63/13/8d/63138d4a0ac380ca8b8b0d27790ddd48.jpg',
                musica1:'To you',
                faixa3:'../Songs/Artits8/audio4.mp3',

                urlimgmp2:'https://i.pinimg.com/564x/25/28/6c/25286caf9d585e8021d565731f2b1870.jpg',
                musica2:'JKD-PL',
                faixa3:'../Songs/Artits8/audio5.mp3',

                urlimgmp3:'https://i.pinimg.com/564x/b2/6e/9a/b26e9a421176ca34deb9bb9fb4d01985.jpg',
                musica3:'OMG',
                faixa3:'../Songs/Artits8/audio4.mp3',
              },
            },
            },
          {id:6, 
            nome:'Maria',
            sobrenome:'Brito',
            funcao:'DJ',
            descricao:'Um músico é um artista que cria e toca músicase com pessoas em todo o mundo.',
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQelRqdVgCOijnuN8ldXeW5E_KaOB2j-hMKMr243YbJgBQv-v3sa5lyEFatOgMRFe0NC-M&usqp=CAU',
           
            discos:{
              albumu:{
                titulo:'Rezar e amar',
                tipo:'LP',
                ano:'2020',
                url:'https://i.pinimg.com/564x/f3/80/52/f380520f49ae8c22fd3ecf22610b8698.jpg',
                 
                urlimgmp1:'https://i.pinimg.com/564x/de/1b/31/de1b3142f61767f05d2806e0ee79fa95.jpg',
                musica1:'Chega mais',
                faixa1:'../Songs/Artits8/audio1.mp3',

                urlimgmp2:'https://i.pinimg.com/564x/63/13/8d/63138d4a0ac380ca8b8b0d27790ddd48.jpg',
                musica2:'Trap Bomba',
                faixa2:'../Songs/Artits8/audio2.mp3',

                urlimgmp3:'https://i.pinimg.com/564x/63/13/8d/63138d4a0ac380ca8b8b0d27790ddd48.jpg',
                musica3:'OMG',
                faixa3:'../Songs/Artits8/audio3.mp3',
              },
              albumd:{
                titulo:'Foco',
                ano:'2022',
                tipo:'LP',
                url:'https://i.pinimg.com/564x/8f/1f/06/8f1f06e8dafc34447c462a06294e71dc.jpg',

                urlimgmp1:'https://i.pinimg.com/736x/ae/aa/6d/aeaa6d5615c17855bbe1278af287ed8c.jpg',
                musica1:'Trap Bomba13',
                faixa1:'../Songs/Artits8/audio1.mp3',

                urlimgmp2:'https://i.pinimg.com/564x/8f/1f/06/8f1f06e8dafc34447c462a06294e71dc.jpg',
                musica2:'Chama Quente',
                faixa2:'../Songs/Artits8/audio3.mp3',

                urlimgmp3:'https://i.pinimg.com/564x/63/13/8d/63138d4a0ac380ca8b8b0d27790ddd48.jpg',
                musica3:'OMG',
                faixa3:'../Songs/Artits8/audio3.mp3',
              },
              albumt:{
                titulo:'Blacklandia',
                ano:'2022',
                tipo:'LP',
                url:'https://i.pinimg.com/564x/f9/4a/15/f94a15e63203d81c4a6362e72bc06693.jpg',

                urlimgmp1:'https://i.pinimg.com/564x/63/13/8d/63138d4a0ac380ca8b8b0d27790ddd48.jpg',
                musica1:'To you',
                faixa3:'../Songs/Artits8/audio4.mp3',

                urlimgmp2:'https://i.pinimg.com/564x/25/28/6c/25286caf9d585e8021d565731f2b1870.jpg',
                musica2:'JKD-PL',
                faixa3:'../Songs/Artits8/audio5.mp3',

                urlimgmp3:'https://i.pinimg.com/564x/b2/6e/9a/b26e9a421176ca34deb9bb9fb4d01985.jpg',
                musica3:'OMG',
                faixa3:'../Songs/Artits8/audio4.mp3',
              },
            },
          },
          {id:7, 
            nome:'Andre',
            sobrenome:'Lemos',
            funcao:'Produtor',
            descricao:'Um músico é um artista que cria e toca músicase com pessoas em todo o mundo.',
            url: 'https://www.olharconceito.com.br/imgsite/noticias/018509/amp-WhatsApp-Image-2019-11-04-at-15.36.37-(1).jpeg',
          
            discos:{
              albumu:{
                titulo:'Rezar e amar',
                tipo:'LP',
                ano:'2020',
                url:'https://i.pinimg.com/564x/f3/80/52/f380520f49ae8c22fd3ecf22610b8698.jpg',
                 
                urlimgmp1:'https://i.pinimg.com/564x/de/1b/31/de1b3142f61767f05d2806e0ee79fa95.jpg',
                musica1:'Chega mais',
                faixa1:'../Songs/Artits8/audio1.mp3',

                urlimgmp2:'https://i.pinimg.com/564x/63/13/8d/63138d4a0ac380ca8b8b0d27790ddd48.jpg',
                musica2:'Trap Bomba',
                faixa2:'../Songs/Artits8/audio2.mp3',

                urlimgmp3:'https://i.pinimg.com/564x/63/13/8d/63138d4a0ac380ca8b8b0d27790ddd48.jpg',
                musica3:'OMG',
                faixa3:'../Songs/Artits8/audio3.mp3',
              },
              albumd:{
                titulo:'Foco',
                ano:'2022',
                tipo:'LP',
                url:'https://i.pinimg.com/564x/8f/1f/06/8f1f06e8dafc34447c462a06294e71dc.jpg',

                urlimgmp1:'https://i.pinimg.com/736x/ae/aa/6d/aeaa6d5615c17855bbe1278af287ed8c.jpg',
                musica1:'Trap Bomba13',
                faixa1:'../Songs/Artits8/audio1.mp3',

                urlimgmp2:'https://i.pinimg.com/564x/8f/1f/06/8f1f06e8dafc34447c462a06294e71dc.jpg',
                musica2:'Chama Quente',
                faixa2:'../Songs/Artits8/audio3.mp3',

                urlimgmp3:'https://i.pinimg.com/564x/63/13/8d/63138d4a0ac380ca8b8b0d27790ddd48.jpg',
                musica3:'OMG',
                faixa3:'../Songs/Artits8/audio3.mp3',
              },
              albumt:{
                titulo:'Blacklandia',
                ano:'2022',
                tipo:'LP',
                url:'https://i.pinimg.com/564x/f9/4a/15/f94a15e63203d81c4a6362e72bc06693.jpg',

                urlimgmp1:'https://i.pinimg.com/564x/63/13/8d/63138d4a0ac380ca8b8b0d27790ddd48.jpg',
                musica1:'To you',
                faixa3:'../Songs/Artits8/audio4.mp3',

                urlimgmp2:'https://i.pinimg.com/564x/25/28/6c/25286caf9d585e8021d565731f2b1870.jpg',
                musica2:'JKD-PL',
                faixa3:'../Songs/Artits8/audio5.mp3',

                urlimgmp3:'https://i.pinimg.com/564x/b2/6e/9a/b26e9a421176ca34deb9bb9fb4d01985.jpg',
                musica3:'OMG',
                faixa3:'../Songs/Artits8/audio4.mp3',
              },
            },
          },
          {id:8, 
            nome:'Antonia',
            sobrenome:'Ga',
            funcao:'Raper',
            descricao:'Um músico é um artista que cria e toca música paraocso de criatividas próprias músicas,. Alguns músicos se apresentam ao vivo para plateias.',
            url: 'https://imgsapp2.correiobraziliense.com.br/app/noticia_127983242361/2020/07/04/869251/20200703202533260840a.jpg',

             discos:{
              albumu:{
                titulo:'Rezar e amar',
                tipo:'LP',
                ano:'2020',
                url:'https://i.pinimg.com/564x/f3/80/52/f380520f49ae8c22fd3ecf22610b8698.jpg',
                 
                urlimgmp1:'https://i.pinimg.com/564x/de/1b/31/de1b3142f61767f05d2806e0ee79fa95.jpg',
                musica1:'Chega mais',
                faixa1:'../Songs/Artits8/audio1.mp3',

                urlimgmp2:'https://i.pinimg.com/564x/63/13/8d/63138d4a0ac380ca8b8b0d27790ddd48.jpg',
                musica2:'Trap Bomba',
                faixa2:'../Songs/Artits8/audio2.mp3',

                urlimgmp3:'https://i.pinimg.com/564x/63/13/8d/63138d4a0ac380ca8b8b0d27790ddd48.jpg',
                musica3:'OMG',
                faixa3:'../Songs/Artits8/audio3.mp3',
              },
              albumd:{
                titulo:'Foco',
                ano:'2022',
                tipo:'LP',
                url:'https://i.pinimg.com/564x/8f/1f/06/8f1f06e8dafc34447c462a06294e71dc.jpg',

                urlimgmp1:'https://i.pinimg.com/736x/ae/aa/6d/aeaa6d5615c17855bbe1278af287ed8c.jpg',
                musica1:'Trap Bomba13',
                faixa1:'../Songs/Artits8/audio1.mp3',

                urlimgmp2:'https://i.pinimg.com/564x/8f/1f/06/8f1f06e8dafc34447c462a06294e71dc.jpg',
                musica2:'Chama Quente',
                faixa2:'../Songs/Artits8/audio3.mp3',

                urlimgmp3:'https://i.pinimg.com/564x/63/13/8d/63138d4a0ac380ca8b8b0d27790ddd48.jpg',
                musica3:'OMG',
                faixa3:'../Songs/Artits8/audio3.mp3',
              },
              albumt:{
                titulo:'Blacklandia',
                ano:'2022',
                tipo:'LP',
                url:'https://i.pinimg.com/564x/f9/4a/15/f94a15e63203d81c4a6362e72bc06693.jpg',

                urlimgmp1:'https://i.pinimg.com/564x/63/13/8d/63138d4a0ac380ca8b8b0d27790ddd48.jpg',
                musica1:'To you',
                faixa3:'../Songs/Artits8/audio4.mp3',

                urlimgmp2:'https://i.pinimg.com/564x/25/28/6c/25286caf9d585e8021d565731f2b1870.jpg',
                musica2:'JKD-PL',
                faixa3:'../Songs/Artits8/audio5.mp3',

                urlimgmp3:'https://i.pinimg.com/564x/b2/6e/9a/b26e9a421176ca34deb9bb9fb4d01985.jpg',
                musica3:'OMG',
                faixa3:'../Songs/Artits8/audio4.mp3',
              },
            },
          },
            {id:9, 
            nome:'Ana',
            sobrenome:'Olivia',
            funcao:'Eventos',
            descricao:'Um músico é um artista que cria e toca músicase com pessoas em todo o mundo.',
            url: 'https://uploads.metropoles.com/wp-content/uploads/2017/11/05183135/051117-FM-Festa-Bondinho-035_.jpg',
           
            discos:{
              albumu:{
                titulo:'Rezar e amar',
                tipo:'LP',
                ano:'2020',
                url:'https://i.pinimg.com/564x/f3/80/52/f380520f49ae8c22fd3ecf22610b8698.jpg',
                 
                urlimgmp1:'https://i.pinimg.com/564x/de/1b/31/de1b3142f61767f05d2806e0ee79fa95.jpg',
                musica1:'Chega mais',
                faixa1:'../Songs/Artits8/audio1.mp3',

                urlimgmp2:'https://i.pinimg.com/564x/63/13/8d/63138d4a0ac380ca8b8b0d27790ddd48.jpg',
                musica2:'Trap Bomba',
                faixa2:'../Songs/Artits8/audio2.mp3',

                urlimgmp3:'https://i.pinimg.com/564x/63/13/8d/63138d4a0ac380ca8b8b0d27790ddd48.jpg',
                musica3:'OMG',
                faixa3:'../Songs/Artits8/audio3.mp3',
              },
              albumd:{
                titulo:'Foco',
                ano:'2022',
                tipo:'LP',
                url:'https://i.pinimg.com/564x/8f/1f/06/8f1f06e8dafc34447c462a06294e71dc.jpg',

                urlimgmp1:'https://i.pinimg.com/736x/ae/aa/6d/aeaa6d5615c17855bbe1278af287ed8c.jpg',
                musica1:'Trap Bomba13',
                faixa1:'../Songs/Artits8/audio1.mp3',

                urlimgmp2:'https://i.pinimg.com/564x/8f/1f/06/8f1f06e8dafc34447c462a06294e71dc.jpg',
                musica2:'Chama Quente',
                faixa2:'../Songs/Artits8/audio3.mp3',

                urlimgmp3:'https://i.pinimg.com/564x/63/13/8d/63138d4a0ac380ca8b8b0d27790ddd48.jpg',
                musica3:'OMG',
                faixa3:'../Songs/Artits8/audio3.mp3',
              },
              albumt:{
                titulo:'Blacklandia',
                ano:'2022',
                tipo:'LP',
                url:'https://i.pinimg.com/564x/f9/4a/15/f94a15e63203d81c4a6362e72bc06693.jpg',

                urlimgmp1:'https://i.pinimg.com/564x/63/13/8d/63138d4a0ac380ca8b8b0d27790ddd48.jpg',
                musica1:'To you',
                faixa3:'../Songs/Artits8/audio4.mp3',

                urlimgmp2:'https://i.pinimg.com/564x/25/28/6c/25286caf9d585e8021d565731f2b1870.jpg',
                musica2:'JKD-PL',
                faixa3:'../Songs/Artits8/audio5.mp3',

                urlimgmp3:'https://i.pinimg.com/564x/b2/6e/9a/b26e9a421176ca34deb9bb9fb4d01985.jpg',
                musica3:'OMG',
                faixa3:'../Songs/Artits8/audio4.mp3',
              },
            },
          },
          {id:10, 
            nome:'Maria',
            sobrenome:'Ga',
            funcao:'Eventos',
            descricao:'Um músico é um artista que cria e toca músicase com pessoas em todo o mundo.',
            url: 'https://i.pinimg.com/736x/c2/5e/23/c25e23e08eb50c1cd1cd2a903399e769.jpg',
           
            discos:{
              albumu:{
                titulo:'Rezar e amar',
                tipo:'LP',
                ano:'2020',
                url:'https://i.pinimg.com/564x/f3/80/52/f380520f49ae8c22fd3ecf22610b8698.jpg',
                 
                urlimgmp1:'https://i.pinimg.com/564x/de/1b/31/de1b3142f61767f05d2806e0ee79fa95.jpg',
                musica1:'Chega mais',
                faixa1:'../Songs/Artits8/audio1.mp3',

                urlimgmp2:'https://i.pinimg.com/564x/63/13/8d/63138d4a0ac380ca8b8b0d27790ddd48.jpg',
                musica2:'Trap Bomba',
                faixa2:'../Songs/Artits8/audio2.mp3',

                urlimgmp3:'https://i.pinimg.com/564x/63/13/8d/63138d4a0ac380ca8b8b0d27790ddd48.jpg',
                musica3:'OMG',
                faixa3:'../Songs/Artits8/audio3.mp3',
              },
              albumd:{
                titulo:'Foco',
                ano:'2022',
                tipo:'LP',
                url:'https://i.pinimg.com/564x/8f/1f/06/8f1f06e8dafc34447c462a06294e71dc.jpg',

                urlimgmp1:'https://i.pinimg.com/736x/ae/aa/6d/aeaa6d5615c17855bbe1278af287ed8c.jpg',
                musica1:'Trap Bomba13',
                faixa1:'../Songs/Artits8/audio1.mp3',

                urlimgmp2:'https://i.pinimg.com/564x/8f/1f/06/8f1f06e8dafc34447c462a06294e71dc.jpg',
                musica2:'Chama Quente',
                faixa2:'../Songs/Artits8/audio3.mp3',

                urlimgmp3:'https://i.pinimg.com/564x/63/13/8d/63138d4a0ac380ca8b8b0d27790ddd48.jpg',
                musica3:'OMG',
                faixa3:'../Songs/Artits8/audio3.mp3',
              },
              albumt:{
                titulo:'Blacklandia',
                ano:'2022',
                tipo:'LP',
                url:'https://i.pinimg.com/564x/f9/4a/15/f94a15e63203d81c4a6362e72bc06693.jpg',

                urlimgmp1:'https://i.pinimg.com/564x/63/13/8d/63138d4a0ac380ca8b8b0d27790ddd48.jpg',
                musica1:'To you',
                faixa3:'../Songs/Artits8/audio4.mp3',

                urlimgmp2:'https://i.pinimg.com/564x/25/28/6c/25286caf9d585e8021d565731f2b1870.jpg',
                musica2:'JKD-PL',
                faixa3:'../Songs/Artits8/audio5.mp3',

                urlimgmp3:'https://i.pinimg.com/564x/b2/6e/9a/b26e9a421176ca34deb9bb9fb4d01985.jpg',
                musica3:'OMG',
                faixa3:'../Songs/Artits8/audio4.mp3',
              },
            },
          },
          {id:11, 
            nome:'Maria',
            sobrenome:'Ga',
            funcao:'Eventos',
            descricao:'Um músico é um artista que cria e toca músicase com pessoas em todo o mundo.',
            url: 'https://i.pinimg.com/736x/c2/5e/23/c25e23e08eb50c1cd1cd2a903399e769.jpg',
           
            discos:{
              albumu:{
                titulo:'Rezar e amar',
                tipo:'LP',
                ano:'2020',
                url:'https://i.pinimg.com/564x/f3/80/52/f380520f49ae8c22fd3ecf22610b8698.jpg',
                 
                urlimgmp1:'https://i.pinimg.com/564x/de/1b/31/de1b3142f61767f05d2806e0ee79fa95.jpg',
                musica1:'Chega mais',
                faixa1:'../Songs/Artits8/audio1.mp3',

                urlimgmp2:'https://i.pinimg.com/564x/63/13/8d/63138d4a0ac380ca8b8b0d27790ddd48.jpg',
                musica2:'Trap Bomba',
                faixa2:'../Songs/Artits8/audio2.mp3',

                urlimgmp3:'https://i.pinimg.com/564x/63/13/8d/63138d4a0ac380ca8b8b0d27790ddd48.jpg',
                musica3:'OMG',
                faixa3:'../Songs/Artits8/audio3.mp3',
              },
              albumd:{
                titulo:'Foco',
                ano:'2022',
                tipo:'LP',
                url:'https://i.pinimg.com/564x/8f/1f/06/8f1f06e8dafc34447c462a06294e71dc.jpg',

                urlimgmp1:'https://i.pinimg.com/736x/ae/aa/6d/aeaa6d5615c17855bbe1278af287ed8c.jpg',
                musica1:'Trap Bomba13',
                faixa1:'../Songs/Artits8/audio1.mp3',

                urlimgmp2:'https://i.pinimg.com/564x/8f/1f/06/8f1f06e8dafc34447c462a06294e71dc.jpg',
                musica2:'Chama Quente',
                faixa2:'../Songs/Artits8/audio3.mp3',

                urlimgmp3:'https://i.pinimg.com/564x/63/13/8d/63138d4a0ac380ca8b8b0d27790ddd48.jpg',
                musica3:'OMG',
                faixa3:'../Songs/Artits8/audio3.mp3',
              },
              albumt:{
                titulo:'Blacklandia',
                ano:'2022',
                tipo:'LP',
                url:'https://i.pinimg.com/564x/f9/4a/15/f94a15e63203d81c4a6362e72bc06693.jpg',

                urlimgmp1:'https://i.pinimg.com/564x/63/13/8d/63138d4a0ac380ca8b8b0d27790ddd48.jpg',
                musica1:'To you',
                faixa3:'../Songs/Artits8/audio4.mp3',

                urlimgmp2:'https://i.pinimg.com/564x/25/28/6c/25286caf9d585e8021d565731f2b1870.jpg',
                musica2:'JKD-PL',
                faixa3:'../Songs/Artits8/audio5.mp3',

                urlimgmp3:'https://i.pinimg.com/564x/b2/6e/9a/b26e9a421176ca34deb9bb9fb4d01985.jpg',
                musica3:'OMG',
                faixa3:'../Songs/Artits8/audio4.mp3',
              },
            },
          },
       
        ];

      
      


    const itensRenderizados = base.map((item) => {
        return <div className='containuserparc' key={item.id}  onMouseEnter={() => selecionarObjeto(item)} onMouseLeave={() => limparObjeto('')}  >
            <div className='containimguserparceiros'>  <img src={item.url} alt={`Imagem ${item.id}`} className="containeruserbackimg" onClick={handleClick}/></div>
             <div className='containeruserfrontdata'>
                 {item.nome}{' '}
                 {item.sobrenome}
            </div>
            <div className='containersubtitlle'>
                {item.funcao}
            </div>
            </div>;
      });

      


 return (
   <div className='slidercontainer'>
       {itensRenderizados}
   </div>


  );
}