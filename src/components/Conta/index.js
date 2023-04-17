import React, { useState, useRef, useEffect } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/database';

function ContaPage({ userId }) {
  const [audioFile, setAudioFile] = useState(null);
  const [audioUrl, setAudioUrl] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [author, setAuthor] = useState('');
  const [year, setYear] = useState('');
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [loadingAudio, setLoadingAudio] = useState(false);

  const audioPlayerRef = useRef(null);

  const handleAudioFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setAudioFile(file);
      setLoadingAudio(true);
      setAudioUrl('');
    }
  };

  useEffect(() => {
    if (audioFile) {
      const reader = new FileReader();
      reader.readAsDataURL(audioFile);
      reader.onload = () => {
        setAudioUrl(reader.result);
        setLoadingAudio(false);
      };
    }
  }, [audioFile]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setUploading(true);

    // Use o Firebase Realtime Database para enviar os dados do formulário
    const databaseRef = firebase.database().ref('publications');
    const newPublicationRef = databaseRef.push();
    const publication = {
      title,
      description,
      author,
      year,
      audioUrl,
      imageUrl: null, // Será atualizado quando a imagem for carregada
    };

    // Adicione o arquivo de áudio, se existir
    if (audioFile) {
      const storageRef = firebase.storage().ref();
      const audioRef = storageRef.child(`publications/${newPublicationRef.key}.mp3`);
      await audioRef.put(audioFile);
      publication.audioUrl = await audioRef.getDownloadURL();
    }

    await newPublicationRef.set(publication);

    // Use o Firebase Storage para enviar a imagem selecionada
    if (image) {
      const storageRef = firebase.storage().ref();
      const imageRef = storageRef.child(`publications/${newPublicationRef.key}.jpg`);
      await imageRef.put(image);

      // Obtenha a URL da imagem armazenada no Firebase Storage
      const url = await imageRef.getDownloadURL();

      // Atualize a publicação com a URL da imagem
      await newPublicationRef.update({ imageUrl: url });
    }

    // Redirecione o usuário para a página de detalhes da publicação
    window.location.href = `/account`;
  };

  return (
    <div>
      <h1>Criar publicação</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Título:</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="description">Descrição:</label>
          <textarea
            id="description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
           </div>
    <div>
      <label htmlFor="author">Autor:</label>
      <input
        id="author"
        type="text"
        value={author}
        onChange={(event) => setAuthor(event.target.value)}
      />
    </div>
    <div>
      <label htmlFor="year">Ano:</label>
      <input
        id="year"
        type="text"
        value={year}
        onChange={(event) => setYear(event.target.value)}
      />
    </div>
    <div>
      <label htmlFor="image">Imagem:</label>
      <input
        id="image"
        type="file"
        onChange={(event) => setImage(event.target.files[0])}
      />
    </div>
    <div style={{marginTop:'50px'}}>
      <label htmlFor="audio">Áudio:</label>
      <input
        id="audio"
        type="file"
        accept="audio/*"
        onChange={(event) => setAudioFile(event.target.files[0])}
      />
    </div>

    {audioFile && (
      <div>
        {uploading && <p>Carregando áudio...</p>}
        <AudioPlayer
          src={audioUrl}
          onPlay={() => console.log("onPlay")}
          style={{ marginBottom: "1px" }}
        />
      </div>
    )}

    {image && (
      <div>
        {uploading && <p>Carregando imagem...</p>}
        <img src={URL.createObjectURL(image)} alt="Imagem selecionada" />
      </div>
    )}

{uploading && <p>Carregando...</p>}
<button type="submit" disabled={!title || !description || !author || !year}>
Publicar
</button>
</form>
 
</div>
);
}

export default ContaPage;

