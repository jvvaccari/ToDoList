import * as React from 'react';
import styles from './Modal.module.css';
import CloseIcon from '@mui/icons-material/Close';

export interface IModalProps {
  children: React.ReactNode

}

const Modal = (({children} : IModalProps) => {
    
  const closeModal = ((e: React.MouseEvent): void => {
    const modal = document.querySelector("#modal");
    modal!.classList.add("hide");
  }); 
  
  return (
    <div id="modal">
      <div className={styles.fade} onClick={closeModal}></div>
      <div className={styles.modal}>
        <div>
          <CloseIcon className={styles.close_icon} onClick={closeModal}/>
        </div>
        <h2>
            Editar tarefa
        </h2>
        {children}
      </div>
    </div>
  );
});

export default Modal;
