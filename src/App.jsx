import { HelmetProvider, Helmet } from 'react-helmet-async';
import './App.css'
import Home from './pages/Home'

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Erdi Pratama | Web Developer</title>
        <meta name="description" content="Portofolio Erdi Pratama, Web Developer dengan React.js" />
      </Helmet>
      < Home />
    </HelmetProvider>
  );
}

export default App;