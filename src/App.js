import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { GraphComponent } from './components/Graph';  

import './App.css';

function App() {
  return (
    <div>
      <div className='App'>
        <h1 style={{ marginBottom: '1rem', marginTop: '1rem' }}>Shortest Path</h1>
        <p style={{ width: '60%', minWidth: '300px', maxWidth: '55rem', marginBottom: '1rem' }}>
          O propósito da aplicação é demonstrar visualmente a atuação do algoritmo de 
          Dijkstra num grafo direcionado com arestas ponderadas. O usuário pode escolher
          a origem e o destino do caminho e após um duplo clique no fundo branco do 
          container o programa irá destacar o trajeto mais otimizado dentre os possíveis.
        </p>
      </div>
      <GraphComponent />
      <ToastContainer />
    </div>
  );
}

export default App;
