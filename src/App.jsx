import { Helmet } from 'react-helmet-async';
import './App.css';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Helmet>
        <title>Erdi Pratama | Web Developer</title>
        <meta name="description" content="Portofolio Erdi Pratama, Web Developer dengan React.js" />
      </Helmet>
      <Home />
    </>
  );
}

export default App;