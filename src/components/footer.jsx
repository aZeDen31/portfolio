import { useState } from 'react';
import "../CSS/style.css";

function Footer() {
    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');
        
        const formData = new FormData(e.target);
        
        try {
            const response = await fetch("https://formspree.io/f/xrpzvwza", {
                method: "POST",
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setStatus('success');
                e.target.reset();
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <footer id="contact" className="footer">
            <div className="footer-content">
                <div className="footer-info">
                    <h2>Me Contacter</h2>
                    <p>Étudiant en développement informatique, je suis à la recherche de nouvelles opportunités. N'hésitez pas à utiliser le formulaire ou à me contacter directement sur mes réseaux !</p>

                    <div className="footer-contact-links">
                        <a href="mailto:lucas.gosselin.dev@gmail.com" className="contact-link">
                            <i className="fa-solid fa-envelope"></i>
                            <span>lucas.gosselin.dev@gmail.com</span>
                        </a>
                        <a href="https://www.linkedin.com/in/lucas-gosselin-28a32731a?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="contact-link">
                            <i className="fa-brands fa-linkedin"></i>
                            <span>LinkedIn</span>
                        </a>
                        <a href="https://github.com/aZeDen31" target="_blank" rel="noopener noreferrer" className="contact-link">
                            <i className="fa-brands fa-github"></i>
                            <span>GitHub</span>
                        </a>
                    </div>
                </div>

                <div className="footer-form-container">
                    <form className="footer-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input type="text" name="name" placeholder="Votre nom" required />
                        </div>
                        <div className="form-group">
                            <input type="email" name="email" placeholder="Votre adresse email" required />
                        </div>
                        <div className="form-group">
                            <textarea name="message" placeholder="Votre message" rows="4" required></textarea>
                        </div>
                        <button type="submit" className="btn-submit" disabled={status === 'sending'}>
                            {status === 'sending' ? 'Envoi en cours...' : 'Envoyer'}
                        </button>
                        {status === 'success' && (
                            <p className="form-success-msg">Message envoyé avec succès ! Merci.</p>
                        )}
                        {status === 'error' && (
                            <p className="form-error-msg">Une erreur est survenue lors de l'envoi. Veuillez réessayer.</p>
                        )}
                    </form>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Lucas Gosselin. Tous droits réservés.</p>
            </div>
        </footer>
    );
}

export default Footer;
