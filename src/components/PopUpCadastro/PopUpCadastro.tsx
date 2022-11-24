import Modal from 'react-modal';
import { useState } from 'react';
import img from "../../../public/CatPopUp.png";
import './index.css';


Modal.setAppElement('#root');

function PopupCadastro() {
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
            Concordo
          </a>
          <Modal className='modal'
            isOpen={modalIsOpen}
            onRequestClose={handleCloseModal}
          >
            <a onClick={handleCloseModal}></a>
            <div className='modal-content'>
            <img className='img-cat' src={img} alt="cat-popup" />
              <div className='popup-texto'> Seu cadastro foi realizado com sucesso!</div>
            </div>
          </Modal>
          
        </div>
    
      );
}

export default PopupCadastro;