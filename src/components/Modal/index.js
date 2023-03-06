import React,{useState} from 'react';
import { Modal } from '@mui/material';



export default function Modalcomponent() {

    const [modalAberto, setModalAberto] = useState(false);

    function abrirModal() {
      setModalAberto(true);
    }
  
    function fecharModal() {
      setModalAberto(false);
    }
 


 return (
    <div>
    <button onClick={abrirModal}>Abrir Modal</button>

    <Modal
      open={modalAberto}
      onClose={fecharModal}
    >
      <div>
        <h2>Meu Modal</h2>
        <p>Este é o conteúdo do meu modal.</p>
      </div>
    </Modal>
  </div>
  );
}