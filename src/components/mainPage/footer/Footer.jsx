import './Footer.css';

import github from '../../../assets/icons/github.png';

function Footer() {
    return (
        <footer className="footer">
            <h2>Stas Klepikov</h2>
            <a href="https://github.com/StasKlepikov" target='__blanc'>
                <img src={github} alt="github" />
            </a>
        </footer>
    );
}

export default Footer;