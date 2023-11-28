import './App.css';
import Navbar from './component/Navbar';
import Accueil from './component/Accueil';
import General from './component/General';
import Connexion from './component/Connexion';
import{ BrowserRouter, Route, Routes} from 'react-router-dom';
import Inscription from './component/Inscription';
import Layout from './component/Layout';
function App() {
    return ( <
        >
        
        <BrowserRouter>
        <Routes>
        <Route element={<Layout/>}>
        <Route path="/" element={<Accueil/>}/>
        <Route path="/Connexion" element={<Connexion/>}/>
        <Route path="/Inscription" element={<Inscription/>}/>
        

        </Route>
        
        </Routes>
        </BrowserRouter> 
         
        </>
    );
}

export default App;