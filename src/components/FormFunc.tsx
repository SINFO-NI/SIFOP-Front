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
                    <input type="text" id="nome" />
                </div>
                <div>
                    <label for="nasc">Data de nascimento:</label>
                    <input type="text" id="nasc" />
                </div>
                <div>
                    <label for="cpf">CPF:</label>
                    <input type="text" id="cpf" />
                </div>
                <div>
                    <label for="rg">RG:</label>
                    <input type="text" id="rg" />
                </div>
                <div>
                    <label for="email">E-mail:</label>
                    <input type="email" id="email" />
                </div>
                <div>
                    <label for="telResid">Telefone Residencial:</label>
                    <input type="text" id="telResid" />
                </div>
                <div>
                    <label for="telCel">Telefone Celular:</label>
                    <input type="text" id="telCel" />
                </div>
                <div>
                    <label for="endereco">Endereço:</label>
                    <textarea id="endereco"></textarea>
                </div>
                <div>
                    <label for="siape">SIAPE:</label>
                    <input type="text" id="siape" />
                </div>
                <div>
                <label for="cargo">Cargo:</label>

                    <select name="cargo" id="cargo">
                    <option value="Motorista">Motorista</option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                    </select>
                </div>
            </form>

        </div>

    );

}