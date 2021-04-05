import React, { useState } from 'react';
import Modal from 'react-modal';
import styles from '../styles/components/FormCargoModal.module.css';

export function FormCargo() {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    return (
        <div className={styles.overlay}>
            <div className={styles.formContainer}>
                <Modal isOpen={modalIsOpen}>
                    <html>
                        <br />
                        <form action="" method="post">
                            <br />
                            <div>
                                <input className={styles.formInput2} type="text" id="novoCargo" placeholder="Cargo novo" />
                            </div>
                            <br /> <br /> <br />
                            <div>
                                <button className={styles.formBtn} type="submit">Salvar</button>
                            </div>
                            <button className={styles.button} type="button" onClick={() => setModalIsOpen(false)}>
                                <img src="close.svg" alt="Fechar modal"/>
                            </button>
                        </form>
                    </html>
                </Modal>
            </div>
        </div>
    );

}

export default FormCargo;