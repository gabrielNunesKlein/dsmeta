import logo from '../../assets/img/logo.svg'
import './styles.css'

export default function Header(){
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="DSMeta" />
                <h1>DSMeta</h1>
                <p>
                Desenvolvido por
                <a href="https://github.com/gabrielNunesKlein/dsmeta"> Gabriel Klein</a>
                </p>
            </div>
        </header>
    )
} 