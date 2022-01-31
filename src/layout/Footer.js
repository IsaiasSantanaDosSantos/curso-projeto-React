import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import styles from './Footer.module.css'

function Footer() {

    return(
        <footer>
            <ul className={styles.socialList} >
                <li><FaFacebook /></li>
                <li><FaInstagram /></li>
                <li><FaLinkedin /></li>
                <li><FaWhatsapp /></li>
            </ul>
            <p>Nossso rodapé</p>
        </footer>
    )
}

export default Footer