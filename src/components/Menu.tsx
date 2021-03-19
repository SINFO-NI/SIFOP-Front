//CSS Único para o Componente ExperienceBar (Não afeta outros componentes)
import { useContext } from 'react';
import styles from '../styles/components/Menu.module.css';

//Componente ExperienceBar
export function Menu() {

    //const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext);
    //const percentToNextLevel = Math.round((currentExperience * 100) / experienceToNextLevel);

    function myFunction() {
        var x = document.getElementById("myTopnav");
        if (x.className === styles.topnav) {
          x.className += " "+styles.responsive;
        } else {
          x.className = styles.topnav;
        }
    }

    return (

        <div className={styles.topnav} id="myTopnav">
            <a href="#" className="active">Home</a>
            <a href="#">News</a>
            <a href="#">Contact</a>
            <div className={styles.dropdown}>
                <button className={styles.dropbtn}>Dropdown
                    <i className="fa fa-caret-down"></i>
                </button>
                <div className={styles.dropdowncontent}>
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                </div>
            </div>
            <a href="#about">About</a>
            <a href="javascript:void(0);" className={styles.icon} onClick={myFunction}>&#9776;</a>
        </div>

    );

}