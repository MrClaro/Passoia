import card1 from "../../assets/Card 1.png";
import card2 from "../../assets/Card 2.png";
import card3 from "../../assets/Card 3.png";
import card4 from "../../assets/Card 4.png";

import "./tip-grid.scss";

function TipGrid() {
  return (
    <section className="tip-grid" id="looks">
      <h2>LOOKS E DICAS DE MAQUIAGEM</h2>
      <div>
        <img src={card1} alt="" />
        <img src={card2} alt="" />
        <img src={card3} alt="" />
        <img src={card4} alt="" />
      </div>
    </section>
  );
}

export default TipGrid;
