//CSS Único para o Componente ExperienceBar (Não afeta outros componentes)
import { useContext } from 'react';
import styles from '../styles/components/FormFunc.module.css';

//Componente ExperienceBar
export function FormFunc() {

    //const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext);
    //const percentToNextLevel = Math.round((currentExperience * 100) / experienceToNextLevel);

    return (
        
        <div className={styles.formContainer}>

            <form action="" method="POST">
                <label htmlFor="nome">Nome: </label>
                <input type="text" id="nome"/>

            </form>

        </div>

    );

}