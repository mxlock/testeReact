import React from 'react';
import Tabela from './Components/Tabela/Tabela';
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';


export default function App() {
  const [dados, setDados] = React.useState();
  const [valor, setValor] = React.useState();

  React.useEffect(() => {
    const apiEscola = async () => {
      const req = await fetch(
        'https://hom-escolaaberta.sme.prefeitura.sp.gov.br/api/diretorias/',
      );
      const json = await req.json();
      setDados(json);
    };

    apiEscola();
  }, []);

  return (
    <>
    <Header />
    <div className="App">
      <select onChange={(e) => setValor(e.target.value)}>

        {dados?.results.map((content, index) => (
          <option key={index} value={content.dre} >
            {content.diretoria}
            
          </option>
        ))}
      </select>
    
      <Tabela tableContent={ valor } />
      </div>
      <Footer />
    </>
  );
}
