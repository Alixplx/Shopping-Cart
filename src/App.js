import { Container } from 'react-bootstrap';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Store from './Components/Store';
import About from './Components/About';
import Navbar from './Components/Navbar';
import ShoppingCartProvider from './Context/ShoppingCartContext';

function App() {

  return (

    <ShoppingCartProvider>

      <Navbar />

      <Container className='mb-4'>

        <Routes>

          <Route path='/' element={ <Home /> } />
          <Route path='/store' element={ <Store /> } />
          <Route path='/about' element={ <About /> } />
        </Routes>

      </Container>

    </ShoppingCartProvider>
    
  );
}

export default App;