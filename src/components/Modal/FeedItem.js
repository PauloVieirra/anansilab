import React, { useState, useEffect } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import firebase from 'firebase/app';
import 'firebase/database';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useForm } from 'react-hook-form';

const ConexoesPage = (props) => {
  const [markers, setMarkers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [cityName, setCityName] = useState('');
  const [cityCoords, setCityCoords] = useState(null);
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    // Faz a busca no Firebase Realtime Database
    const fetchData = async () => {
      const dbRef = firebase.database().ref('cidades');
      dbRef.on('value', (snapshot) => {
        const data = snapshot.val();
        const markers = Object.keys(data).map((key) => ({
          lat: data[key].latitude,
          lng: data[key].longitude,
          name: data[key].nome,
        }));
        setMarkers(markers);
      });
    };
    fetchData();
  }, []);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const onSubmit = async (data) => {
    const { name, cep } = data;
    // Faz a geocodificação do CEP usando a API do OpenStreetMap
    const url = `https://nominatim.openstreetmap.org/search.php?q=${cep}&format=jsonv2`;
    const response = await fetch(url);
    const [result] = await response.json();
    if (result) {
      const { lat, lon } = result;
      const dbRef = firebase.database().ref('cidades');
      dbRef.push({ nome: name, cep, latitude: lat, longitude: lon });
      setCityName(name);
      setCityCoords({ lat, lng: lon });
      handleCloseModal();
    } else {
      alert('Não foi possível encontrar a localização da cidade com o CEP informado.');
    }
  };

  // Configurações do mapa
  const mapStyles = {
    width: '100%',
    height: '100%',
  };
  const defaultCenter = {
    lat: -23.5505,
    lng: -46.6333,
  };

  return (
    <>
      <Map google={props.google} style={mapStyles} zoom={10} initialCenter={defaultCenter}>
        {markers.map((marker) => (
          <Marker key={marker.name} position={marker} />
        ))}
      </Map>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Cadastro de cidade</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group controlId="formCityName">
              <Form.Label>Nome da cidade</Form.Label>
              <Form.Control type="text" placeholder="Digite o nome da cidade" {...register('name')} required />
            </Form.Group>

            <Form.Group controlId="formCityCEP">
              <Form.Label>CEP</Form.Label>
              <Form.Control type="text" placeholder="Digite o CEP da cidade" {...register('cep')} required />
</Form.Group>
        <Button variant="secondary" onClick={handleCloseModal}>
          Cancelar
        </Button>
        <Button variant="primary" type="submit">
          Salvar
        </Button>
      </Form>
    </Modal.Body>
  </Modal>

  {cityCoords && (
    <Marker key={cityName} position={cityCoords}>
      <InfoWindow>
        <div>{cityName}</div>
      </InfoWindow>
    </Marker>
  )}

  <Button variant="primary" onClick={handleShowModal}>
    Adicionar cidade
  </Button>
</>
);
};

export default GoogleApiWrapper({
apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
})(ConexoesPage);
