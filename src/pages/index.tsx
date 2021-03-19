import Head from 'next/head';
import { Header } from '../components/Header';
import { Menu } from '../components/Menu';
import { Footer } from '../components/Footer';
import styles from '../styles/pages/Home.module.css'
import { FormFunc } from '../components/FormFunc';

export default function Home() {
    return (

        <div className={styles.container}>

            <Head>
                    
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap" rel="stylesheet" />

            </Head>

            <Header />
            
            <Menu />

            <FormFunc />

            <Footer />


        </div>
          
    )
  }