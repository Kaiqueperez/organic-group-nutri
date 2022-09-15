
import { useState } from 'react';
import './App.css';
import Banner from './componentes/Banner/';
import Footer from './componentes/Footter';


import Formulario from './componentes/Formulario/Formulario';

import Squad from './componentes/Time';

function App() {

  const times = [
    {
      nome:'Materno infantil',
      corPrima:'#82CFFA',
      corSegun: '#E8F8FF'
    },
    {
      nome:'Nutrição esportiva',
      corPrima:'#57C278',
      corSegun: '#D9F7E9'
    },
    {
      nome:'Bioquimica',
      corPrima:'#A6D157',
      corSegun: '#F0F8E2'
    },
    {
      nome:'Interação Droga-Nutriente',
      corPrima:'#E06B69',
      corSegun: '#FDE7E8'
    },
    {
      nome:'Vitaminas',
      corPrima:'#DB6EBF',
      corSegun: '#FAE9F5'
    },
    {
      nome:'Fisiopatologia da obesidade',
      corPrima:'#FFBA05',
      corSegun: '#FFF5D9'
    },
    {
      nome:'Nutrição Comportamental',
      corPrima:'#FF8A29',
      corSegun: '#FFEEDF'
    },
    
    
  ]

  const [colaboradores, setColaboradores] = useState([])

  const colaboradorAdd = (colaborador) =>{
    setColaboradores([...colaboradores, colaborador])
    console.log(colaborador);
  }

  return (
    <div className="App">
      <header className="App-header">

        <Banner/>

        <Formulario
        
         nomedosTimes = {times.map(time => time.nome)}

         colaboradorCadastrado={colaborador => colaboradorAdd(colaborador)}/>
        
        {times.map (time  => 
        <Squad 
          key={time.nome}
          nomeTime={time.nome}
          corfundo={time.corSegun}
          corprincipal={time.corPrima}
          colaboradores = {colaboradores.filter(colaborador => colaborador.squad === time.nome)}
          
         />)}

  
      </header>

      <Footer/>
    </div>
  )
}

export default App;
