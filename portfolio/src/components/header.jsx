import "../CSS/style.css";
import cvPDF from '../assets/CV Stage Web.pdf'

function Header() {
    return (
        <header>
            <nav class="navbar">
                <a href="#">&lt;Lucas Gosselin /&gt;</a>
                <a href="#projets">Projets</a>
                <a href="#parcours">Parcours</a>
                <a href="#contact">Contact</a>
                <a href={cvPDF} class="btn-cv" target="_blank">Mon CV</a>
            </nav>
        </header>
    )
}

export default Header