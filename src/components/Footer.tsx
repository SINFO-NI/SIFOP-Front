//CSS Único para o Componente ExperienceBar (Não afeta outros componentes)
import { useContext } from 'react';
import styles from '../styles/components/Footer.module.css';

//Componente ExperienceBar
export function Footer() {

    //const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext);
    //const percentToNextLevel = Math.round((currentExperience * 100) / experienceToNextLevel);

    return (
        
        <footer className={styles.footerContainer}>
            
            <span>
                FOOTER
            </span>
            
        </footer>

    );

}