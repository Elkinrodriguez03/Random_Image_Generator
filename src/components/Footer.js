import React from "react";

export default function Footer() {
    return (
        
    // <!-- Footer -->
    
    <footer className="footer">
        <a href="mailto:elkinrodriguez03@gmail.com" className="footer__link">elkinrodriguez03@gmail.com</a>
        <ul className="social-list">
            <li className="social-list__item">
                <a className="social-list__link" href="https://github.com/Elkinrodriguez03">
                <i className="fa-brands fa-github"></i>
            </a>
        </li>
            <li className="social-list__item">
                <a className="social-list__link" href="https://www.linkedin.com/in/elkin-rodriguez-287431248/">
                <i className="fa-brands fa-linkedin"></i>

            </a>
        </li>
            <li className="social-list__item">
                <a className="social-list__link" href="https://web.whatsapp.com/">
                <i className="fa-brands fa-whatsapp"></i>
            </a>
        </li>
        </ul>
    </footer>

    )
}