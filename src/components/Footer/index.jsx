import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import youtube from "../../assets/youtube.png";
import twitter from "../../assets/twitter.png";

import mastercard from "../../assets/mastercard.png";
import visa from "../../assets/visa.png";
import boleto from "../../assets/boleto.png";
import pix from "../../assets/pix.png";

import "./footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="links">
        <h4>ATENDIMENTO</h4>
        <ul>
          <li>
            <a href="">Fale Conosco</a>
          </li>
          <li>
            <a href="">Perguntas Frequentes</a>
          </li>
          <li>
            <a href="">Meus Pedidos</a>
          </li>
          <li>
            <a href="">Nossas Lojas</a>
          </li>
        </ul>
      </div>
      <div className="payment-methods">
        <h4>FORMAS DE PAGAMENTO</h4>
        <div className="icons">
          <img src={mastercard} alt="mastercard" />
          <img src={visa} alt="visa" />
          <img src={pix} alt="pix" />
          <img src={boleto} alt="boleto" />
        </div>
      </div>
      <div className="social-media">
        <h4>SIGA-NOS NAS REDES SOCIAIS</h4>
        <div className="icons">
          <a href="">
            <img src={facebook} alt="facebook" />
          </a>
          <a href="">
            <img src={instagram} alt="instagram" />
          </a>
          <a href="">
            <img src={youtube} alt="youtube" />
          </a>
          <a href="">
            <img src={twitter} alt="twitter" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
