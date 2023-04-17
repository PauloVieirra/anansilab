import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/database';
import './style.css';
import FeedItem from './FeedItem';

const config = {
  // Your Firebase config object goes here
};

const Feed = () => {
  const [publications, setPublications] = useState([]);

  useEffect(() => {
    const publicationsRef = firebase.database().ref('publications');

    publicationsRef.on('value', (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const publicationList = Object.keys(data).map((key) => ({
          ...data[key],
          uid: key,
        }));

        // Ordenar publicações por data e hora
        const compareDates = (a, b) => {
          const dateA = new Date(a.date + ' ' + a.time);
          const dateB = new Date(b.date + ' ' + b.time);
          return dateA - dateB;
        };
        publicationList.sort(compareDates).reverse();

        setPublications(publicationList);
      }
    });

    return () => {
      publicationsRef.off();
    };
  }, []);

  return (
    <div >
       <div>
      {publications.map((publication, index) => (
        <FeedItem key={index} feedItem={publication}/>
      ))}
    </div>
     
    </div>
  );
};

export default Feed;
