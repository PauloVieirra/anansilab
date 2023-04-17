import React, { useState, useEffect } from 'react';
import { GoogleMap, Marker, InfoWindow } from '@react-google-maps/api';
import firebase from 'firebase/app';
import 'firebase/database';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const mapContainerStyle = {
  width: '100%',
  height: '100vh',
};

const center = {
  lat: -23.550520,
  lng: -46.633308,
};

const options = {
  disableDefaultUI: true,
  zoomControl: true,
};

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const Conexoes = () => {
  const [markers, setMarkers] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [cityName, setCityName] = useState('');
  const [cityCoords, setCityCoords] = useState({});

  useEffect(() => {
    // Faz a busca no Firebase Realtime Database
    const fetchData = async () => {
      const dbRef = firebase.database().ref('cidades');
      dbRef.on('value', (snapshot) => {
        const data = snapshot.val();
        const markers = Object.keys(data || {}).map((key) => ({
          lat: data[key].latitude,
          lng: data[key].longitude,
          name: data[key].nome,
        }));
        setMarkers(markers);
      });
    };
    fetchData();
  }, []);

  const handleMarkerClick = (name, lat, lng) => {
    setCityName(name);
    setCityCoords({ lat, lng });
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={5}
        center={center}
        options={options}
      >
        {markers.map(({ lat, lng, name }) => (
          <Marker
            key={`${lat}-${lng}`}
            position={{ lat, lng }}
            onClick={() => handleMarkerClick(name, lat, lng)}
          />
        ))}
        <InfoWindow
          position={cityCoords}
          onCloseClick={handleCloseModal}
          visible={modalIsOpen}
        >
          <div>
            <h3>{cityName}</h3>
          </div>
        </InfoWindow>
      </GoogleMap>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
        style={customStyles}
        contentLabel="Detalhes da cidade"
      >
        <h2>{cityName}</h2>
        <p>Detalhes da cidade...</p>
        <button onClick={handleCloseModal}>Fechar</button>
      </Modal>
    </>
  );
};

export default Conexoes;