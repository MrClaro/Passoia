// aqui importamos os arquivos
import Banner from "./components/Banner";
import Header from "./components/Header";
import Releases from "./components/Releases";
import "./App.scss";
import TipGrid from "./components/TipGrid";
import News from "./components/News";
import Footer from "./components/Footer";

// Arquivo principal
//para escrita do nome do componente funcional usamos sempre a primeira letra maiuscula, PascalCase
function App() {
  return (
    <>
      <Header />
      <Banner />
      <TipGrid />
      <Releases />
      <News />
      <Footer />
    </>
  );
}
export default App;
