//CSS Único para o Componente ExperienceBar (Não afeta outros componentes)
import { useContext } from 'react';
import styles from '../styles/components/FormFunc.module.css';

//Componente ExperienceBar
export function FormFunc() {

    //const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext);
    //const percentToNextLevel = Math.round((currentExperience * 100) / experienceToNextLevel);

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
                        <button className={styles.formBtnCadastrar} type="submit">Cadastrar novo cargo</button>
                        <br /> <br /> <br />
                        <button className={styles.formBtnCadastrar} type="submit">Cadastrar novo setor</button>
                    </div>
                </form>
            </html>
        </div>

    );

}
