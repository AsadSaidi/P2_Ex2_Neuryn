// App.js
import { Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage'; 
import Contacto from './pages/ContactPage';
import Explorar from './pages/ExplorePage';
import ComunitiesPage from './pages/ComunitiesPage';
import SobreNosotros from './pages/SobreNosotros';

const App = () => {
   return (
      <>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Contacto" element={<Contacto />} />
            <Route path="/Explorar" element={<Explorar/>} />
            <Route path='/Comunidades' element={<ComunitiesPage/>} />
            <Route path='/SobreNosotros' element={<SobreNosotros/>} />
         </Routes>
      </>
   );
};
 
export default App;
