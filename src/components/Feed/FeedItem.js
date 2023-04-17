import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { AiFillHeart } from "react-icons/ai";
import './style.css';
import firebase from 'firebase/app';
import 'firebase/firestore';

function FeedItem({ feedItem }) {
  const history = useHistory();

  function handleClick() {
    history.push({
      pathname: '../Feedpage',
      state: { userfeed: openuserFeed },
    });
  }

  const [openuserFeed, setOpenuserFeed] = useState(null);
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0); // novo estado para controlar o número de curtidas
  const db = firebase.firestore(); // inicializa o objeto firestore

  function selecionarObjeto(feedItem) {
    setOpenuserFeed(feedItem);
  }

  function limparObjeto() {
    setOpenuserFeed('');
  }

  function handleLikeClick() {
    setIsLiked(!isLiked);
    setLikeCount((prevCount) => prevCount + 1); // atualiza o estado de likeCount ao clicar no botão
  }

  // efeito colateral para atualizar o número de curtidas no Firebase sempre que houver uma alteração em likeCount
  useEffect(() => {
    if (openuserFeed) { // verifica se openuserFeed está definido antes de atualizar o Firebase
      const docRef = db.collection('posts').doc(openuserFeed.id); // define a referência do documento no Firebase
      docRef.update({ likeCount: likeCount }).catch((error) => {
        console.error('Error updating like count: ', error);
      });
    }
  }, [likeCount, openuserFeed, db]);

  return (
    <div className='feedplaygeral'
      onMouseEnter={() => selecionarObjeto(feedItem)}
      onMouseLeave={() => limparObjeto('')}
      onClick={handleClick}
    >
    <div>
            <img className='imgfeed' src={feedItem.imageUrl} />
    </div>
    <div className='contcollum'>
            <div className='feedtexteplay'>{feedItem.title}</div>
            <div className='feedtextauthor'>{feedItem.author}</div>
            <div>{feedItem.year}</div>
    </div> 
    
      
    </div>
  );
}

export default FeedItem;
