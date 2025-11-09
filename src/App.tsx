// App.js
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; 
import Contacto from './pages/Contacto';

const App = () => {
   return (
      <>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Contacto" element={<Contacto />} />
         </Routes>
      </>
   );
};
 
export default App;
