//CSS Único para o Componente ExperienceBar (Não afeta outros componentes)
import { useContext } from 'react';
import styles from '../styles/components/FormFunc.module.css';

//Componente ExperienceBar
export function FormFunc() {

    //const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext);
    //const percentToNextLevel = Math.round((currentExperience * 100) / experienceToNextLevel);

    return (
        
        <div className={styles.formContainer}>

            <form action="" method="post">
                <div>
                    <label for="nome">Nome:</label>
                    <input className={styles.formInput} type="text" id="nome" />
                </div>
                <div>
                    <label for="nasc">Data de nascimento:</label>
                    <input className={styles.formInput} type="text" id="nasc" />
                </div>
                <div>
                    <label for="cpf">CPF:</label>
                    <input className={styles.formInput} type="text" id="cpf" />
                </div>
                <div>
                    <label for="rg">RG:</label>
                    <input className={styles.formInput} type="text" id="rg" />
                </div>
                <div>
                    <label for="email">E-mail:</label>
                    <input className={styles.formInput} type="email" id="email" />
                </div>
                <div>
                    <label for="telResid">Telefone Residencial:</label>
                    <input className={styles.formInput} type="text" id="telResid" />
                </div>
                <div>
                    <label for="telCel">Telefone Celular:</label>
                    <input className={styles.formInput} type="text" id="telCel" />
                </div>
                <div>
                    <label for="endereco">Endereço:</label>
                    <textarea className={styles.formInput} id="endereco"></textarea>
                </div>
                <div>
                    <label for="siape">SIAPE:</label>
                    <input className={styles.formInput} type="text" id="siape" />
                </div>
                <div>
                <label for="cargo">Cargo:</label>

                    <select className={styles.formSelect} name="cargo" id="cargo">
                    <option value="motorista">Motorista</option>
                    <option value="assistenteSocial">Assistente Social</option>
                    <option value="auxAdmin">Auxiliar Administrativo</option>
                    <option value="nutricionista">Nutricionista</option>
                    </select>
                </div>
                <div>
                <label for="setor">Setor:</label>

                    <select className={styles.formSelect} name="setor" id="setor">
                    <option value="disciplina">Setor de disciplina</option>
                    <option value="admin">Gerência Administrativa</option>
                    <option value="patrimonio">Seção de Patrimônio</option>
                    <option value="biblioteca">Biblioteca</option>
                    </select>
                </div>
                <div>
                    <button className={styles.formBtnEnviar} type="submit">Enviar</button>
                </div>
                <div>
                    <button className={styles.formBtnCadastrar} type="submit">Cadastrar novo cargo</button>
                </div>
                <div>
                    <button className={styles.formBtnCadastrar} type="submit">Cadastrar novo setor</button>
                </div>
            </form>

        </div>

    );

}
