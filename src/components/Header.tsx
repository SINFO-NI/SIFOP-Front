//CSS Único para o Componente ExperienceBar (Não afeta outros componentes)
import { useContext } from 'react';
import styles from '../styles/components/Header.module.css';

//Componente ExperienceBar
export function Header() {

    //const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext);
    //const percentToNextLevel = Math.round((currentExperience * 100) / experienceToNextLevel);

    return (
        
        <header className={styles.headerContainer}>

            <div>
                <img src="logo.png" alt="Logo"/>
            </div>
            
            <div>
                <span>
                    <b>Sistema de Folhas de Ponto</b><br/>
                    Centro de Educação Tecnológica Celso Suckow da Fonseca<br/>
                    <i>Campus</i> Nova Iguaçu
                </span>
            </div>

        </header>

    );

}