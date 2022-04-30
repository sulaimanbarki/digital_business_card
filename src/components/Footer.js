import React from "react";

export default function Footer() {
    return (
        <footer className="footer">
            {/* bootstrap social media icon group */}
            <div className="social-media-icons">
                <a href="https://web.facebook.com/muhammad.suliman.7543" target="_blank" rel="noopener noreferrer">
                    <button className="btn btn-outline-light"><i className="bi bi-facebook"></i></button>
                </a>
                <a href="https://www.linkedin.com/in/sulaiman-barki-a7029b137/" target="_blank" rel="noopener noreferrer">
                    <button className="btn btn-outline-light"><i className="bi bi-linkedin"></i></button>
                </a>
                <a href="https://github.com/sulaimanbarki" target="_blank" rel="noopener noreferrer">
                    <button className="btn btn-outline-light"><i className="bi bi-github"></i></button>
                </a>
                <a href="asdfsdf" target="_blank" rel="noopener noreferrer">
                    <button className="btn btn-outline-light"><i className="bi bi-instagram"></i></button>
                </a>
            </div>
        </footer>
    );
}