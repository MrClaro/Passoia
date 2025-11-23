import banner from "../../assets/Banner 2.png";

import "./news.scss";

function News() {
  return (
    <section className="news-section" id="news">
      <h2>NOVIDADES PARA VOCÊ</h2>
      <img src={banner} alt="" />
    </section>
  );
}

export default News;
