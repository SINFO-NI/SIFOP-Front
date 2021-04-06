import { useContext } from 'react';
import styles from '../styles/components/FormFunc.module.css';
import Modal from 'react-modal';
import React, { useState } from 'react';
import styles1 from '../styles/components/FormCargoModal.module.css';

export function FormCargo() {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    return (
        <div className={styles.overlay}>
            <div className={styles1.formContainer}>
                <Modal isOpen={modalIsOpen}>
                    <html>
                        <br />
                        <form action="" method="post">
                            <br />
                            <div>
                                <input className={styles1.formInput2} type="text" id="novoCargo" placeholder="Cargo novo" />
                            </div>
                            <br /> <br /> <br />
                            <div>
                                <button className={styles1.formBtn} type="submit">Salvar</button>
                            </div>
                            <button className={styles1.button} type="button" onClick={() => setModalIsOpen(false)}>
                                <img src="close.svg" alt="Fechar modal"/>
                            </button>
                        </form>
                    </html>
                </Modal>
            </div>
        </div>
    );

}

export function FormFunc() {

    return (
        
        <div className={styles.formContainer}>
            <html>
                <br />

                <form action="" method="post">
                    <br />
                    <div>
                        <input className={styles.formInput2} type="text" id="nome" placeholder="Nome" />
                    </div>
                    <br /> <br /> <br />
                    <div>
                        <input className={styles.formInput2} type="text" id="nasc" placeholder="Data de nascimento" />
                    </div>
                    <br /> <br /> <br />
                    <div>
                        <input className={styles.formInput2} type="text" id="cpf" placeholder="CPF" />
                    </div>
                    <br /> <br /> <br />
                    <div>
                        <input className={styles.formInput2} type="text" id="rg" placeholder="RG" />
                    </div>
                    <br /> <br /> <br />
                    <div>
                        <input className={styles.formInput2} type="email" id="email" placeholder="E-mail" />
                    </div>
                    <br /> <br /> <br />
                    <div>
                        <input className={styles.formInput2} type="text" id="telResid" placeholder="Telefone Residencial" />
                    </div>
                    <br /> <br /> <br />
                    <div>
                        <input className={styles.formInput2} type="text" id="telCel" placeholder="Telefone Celular" />
                    </div>
                    <br /> <br /> <br />
                    <div>
                        <textarea className={styles.formInput2} id="endereco" placeholder="Endereço"></textarea>
                    </div>
                    <br /> <br /> <br />
                    <div>
                        <input className={styles.formInput2} type="text" id="siape" placeholder="SIAPE" />
                    </div>
                    <br /> <br /> <br />
                    <div>
                        <select className={styles.formSelect} name="cargo" id="cargo" placeholder="">
                        <option value="">Cargo</option>
                        <option value="motorista">Motorista</option>
                        <option value="assistenteSocial">Assistente Social</option>
                        <option value="auxAdmin">Auxiliar Administrativo</option>
                        <option value="nutricionista">Nutricionista</option>
                        </select>
                    </div>
                    <br /> <br /> <br />
                    <div>
                        <select className={styles.formSelect} name="setor" id="setor">
                        <option value="">Setor</option>
                        <option value="disciplina">Setor de disciplina</option>
                        <option value="admin">Gerência Administrativa</option>
                        <option value="patrimonio">Seção de Patrimônio</option>
                        <option value="biblioteca">Biblioteca</option>
                        </select>
                    </div>
                    <br /> <br /> <br />
                    <div>
                        <button className={styles.formBtnEnviar} type="submit">Enviar</button>
                    </div>
                    <br />
                    <div>
                        <button onClick={FormCargo} className={styles.formBtnCadastrar} type="button">Cadastrar novo cargo</button>
                        <br /> <br />
                        <button className={styles.formBtnCadastrar} type="button">Cadastrar novo setor</button>
                        <br /> <br /> <br />
                    </div>
                </form>
            </html>
        </div>

    );
}
