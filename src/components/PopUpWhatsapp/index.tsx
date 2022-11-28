import Modal from 'react-modal';
import { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import img from "../../../public/DogPopUp.png";
import './index.css';


Modal.setAppElement('#root');

function PopupWhats() {
  const [modalIsOpen, setIsOpen] = useState(false)

  function handleOpenModal() {
    setIsOpen(true)
  }

  function handleCloseModal() {
    setIsOpen(false)
  }

  return (
    <div className='container'>
      <a className='modal-button' onClick={handleOpenModal}>
        Agendar Consulta
      </a>
      <Modal className='modal'
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}

      >
        <a onClick={handleCloseModal}></a>
        <div className='modal-content'>
          <img className='img-dog' src={img} alt="dog-popup" />
          <div className='popup-texto'> Vamos te encaminhar para o WhatsApp. Agora é<br /> só agendar a consulta do seu pet!  </div>
          <div className='botao-zap'>
          Aguardar Consulta
          <FaWhatsapp className='IconeWhats'/> 
          </div>
          
        </div >
        
      </Modal>
      
    </div>

  );
}

export default PopupWhats;

