import React from 'react'
import footerStyles from '../components/Footer.module.css';

const Footer = () => (
    <footer className = {footerStyles.footer} >
        <div className = "Container">
            <span className="text-muted">Bootstrap 2019 test</span>
        </div>
    </footer>
);

export default Footer;