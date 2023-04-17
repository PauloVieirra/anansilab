import React,{useState} from 'react';
import './style.css';


export default function ImageUpload() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setSelectedImage(reader.result);
      };
    } else {
      setSelectedImage(null);
    }
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
  };

  return (
    <div className="image-upload">
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <button type="button" onClick={() => document.querySelector('.image-upload input[type=file]').click()}>Selecionar imagem</button>
      
      {selectedImage && (
        <div className="image-preview">
          <img src={selectedImage} alt="Imagem selecionada" />
          <button type="button" onClick={handleRemoveImage}>Remover imagem</button>
        </div>
      )}
    </div>
  );
}