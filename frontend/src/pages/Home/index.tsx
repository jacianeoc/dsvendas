import { Footer } from "components/Footer";
import { NavBar } from "components/NavBar";
import { Link } from "react-router-dom";

//o link é o que permite a navegação entre as paginas
export function Home() {
  return(
    <>
    <Link to= "/">
      <NavBar/>
    </Link>
    
    <div className="container">
    <div className="jumbotron">
        <h1 className="display-4">DSVendas</h1>
        <p className="lead">Analise o desempenho das suas vendas por diferentes perspectivas</p>
        <hr/>
        <p>Esta aplicação consiste em exibir um dashboard a partir de dados fornecidos por um back end construído com Spring Boot.</p>
        
        <Link className="btn btn-primary btn-lg"to="dashboard">Acessar o dashboard</Link>
    </div>
    </div>
    <Footer/>
    </>
  );
}