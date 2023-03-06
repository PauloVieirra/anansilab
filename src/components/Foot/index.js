import React from 'react';
import './styled.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__logo">
        <img src="/logo.png" alt="Logo da Rede Social" />
      </div>
      <nav className="footer__navigation">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">Sobre</a></li>
          <li><a href="/terms">Termos de Uso</a></li>
          <li><a href="/privacy">Política de Privacidade</a></li>
          <li><a href="/contact">Contato</a></li>
        </ul>
      </nav>
      <div className="footer__info">
        <p>Endereço: Rua Exemplo, 1234</p>
        <p>E-mail: contato@redesocial.com</p>
        <p>Telefone: (11) 1234-5678</p>
      </div>
    </footer>
  );
}

export default Footer;

