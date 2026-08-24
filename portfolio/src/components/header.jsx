import "../CSS/style.css";
import cvPDF from '../assets/CV Stage Web.pdf'

function Header({ onNavigate }) {
    const handleLinkClick = (e, targetHash) => {
        if (onNavigate) {
            e.preventDefault();
            window.location.hash = targetHash;
            onNavigate(targetHash);
        }
    };

    return (
        <header>
            <nav className="navbar">
                <a href="#" onClick={(e) => handleLinkClick(e, '')}>&lt;Lucas Gosselin /&gt;</a>
                <a href="#projets" onClick={(e) => handleLinkClick(e, '#projets')}>Projets</a>
                <a href="#parcours" onClick={(e) => handleLinkClick(e, '#parcours')}>Parcours</a>
                <a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')}>Contact</a>
                <a href={cvPDF} className="btn-cv" target="_blank">Mon CV</a>
            </nav>
        </header>
    )
}

export default Header