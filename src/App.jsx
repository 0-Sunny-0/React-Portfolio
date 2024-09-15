// We have to bring in the required import from the react-router-dom
import Nav from './components/Nav';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <>
    <Nav />
    <Outlet />
    <Footer />
    </>
  );
}

export default App
