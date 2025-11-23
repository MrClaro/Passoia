import { useState } from "react";
import vermelho from "../../assets/vermelho.png";
import azul from "../../assets/azul.png";
import marrom from "../../assets/marrom.png";
import base from "../../assets/base.png";
import thumbnail1 from "../../assets/thumbnail 1.png";
import thumbnail2 from "../../assets/thumbnail 2.png";
import thumbnail3 from "../../assets/thumbnail 3.png";
import estrelas from "../../assets/estrelas-avaliacao.png";
import ellipse1 from "../../assets/Ellipse 1.png";
import ellipse2 from "../../assets/Ellipse 2.png";
import ellipse3 from "../../assets/Ellipse 3.png";
import ellipse4 from "../../assets/Ellipse 4.png";
import "./releases.scss";

function Releases() {
  const [color, setColor] = useState(base);
  const [selectedThumbnail, setSelectedThumbnail] = useState(0);

  const thumbnails = [thumbnail1, thumbnail2, thumbnail3];

  const handleThumbnailClick = (index) => {
    setSelectedThumbnail(index);
  };

  return (
    <section className="releases" id="releases">
      <h2>APROVEITE OS LANÇAMENTOS</h2>
      <div className="releases-content">
        <div className="images-section">
          <div className="thumbnails">
            {thumbnails.map((thumb, index) => (
              <img
                key={index}
                src={thumb}
                alt={`Thumbnail ${index + 1}`}
                onClick={() => handleThumbnailClick(index)}
                style={{
                  opacity: selectedThumbnail === index ? 1 : 0.6,
                  border:
                    selectedThumbnail === index
                      ? "2px solid #2d2d2d"
                      : "2px solid transparent",
                }}
              />
            ))}
          </div>
          <div className="main-image">
            <img src={color} alt="Produto principal" />
          </div>
        </div>

        <div className="info-section">
          <div className="rating">
            <img src={estrelas} alt="Avaliação 5 estrelas" />
          </div>

          <div className="releases-info">
            <h3>Matte Premium</h3>
            <p>Cores disponíveis</p>
          </div>

          <div className="buttons">
            <button onClick={() => setColor(azul)} aria-label="Cor azul">
              <img src={ellipse1} alt="Azul" />
            </button>
            <button
              onClick={() => setColor(vermelho)}
              aria-label="Cor vermelho"
            >
              <img src={ellipse2} alt="Vermelho" />
            </button>
            <button onClick={() => setColor(marrom)} aria-label="Cor marrom">
              <img src={ellipse3} alt="Marrom" />
            </button>
            <button onClick={() => setColor(base)} aria-label="Cor base">
              <img src={ellipse4} alt="Base" />
            </button>
          </div>

          <div className="description">
            <h4>Descrição</h4>
            <p>
              O Batom Matte possui uma fórmula inovadora desenvolvida para
              entregar o máximo de cor na primeira aplicação com um deslize
              suave e macio. Tem acabamento matte aveludado e manteiga de manga
              que ajuda a hidratar e a proteger os lábios contra ressecamento.
              Ajuda na hidratação dos lábios, textura fina e macia que não pesa
              nos lábios.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Releases;
