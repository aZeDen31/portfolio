import "../CSS/style.css";

function LegalModal({ onClose }) {
    return (
        <div className="legal-modal-overlay" onClick={onClose}>
            <div className="legal-modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="legal-modal-close" onClick={onClose}>&times;</button>
                <h3>Mentions Légales</h3>
                <div className="legal-modal-body">
                    <div className="legal-section">
                        <h4>Éditeur du site</h4>
                        <p>Lucas Gosselin<br />Contact : lucas.gosselin.dev@gmail.com</p>
                    </div>
                    <div className="legal-section">
                        <h4>Hébergeur</h4>
                        <p>
                            GitHub Inc.<br />
                            Adresse : 88 Colin P Kelly Jr St, San Francisco, CA 94107, États-Unis<br />
                            Téléphone : +1 877-448-4820<br />
                            Support : https://support.github.com
                        </p>
                    </div>
                    <div className="legal-section">
                        <h4>Propriété intellectuelle</h4>
                        <p>L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LegalModal;
