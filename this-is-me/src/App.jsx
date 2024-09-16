import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cardinput from './components/Cardinput';
import Card from './components/Card';
import Index from './components/Index';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/cardinput" element={<Cardinput />} />
                <Route path="/card" element={<Card />} />

            </Routes>
        </Router>
    );
}

export default App;
