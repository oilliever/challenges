import { Route, Routes } from 'react-router-dom';
import './App.scss';
import { Home } from './pages/Home';
import { Info } from './pages/Info';

function App() {
    return (
        <Routes>
            <Route
                path='info/:id'
                element={<Info />}
            />
            <Route
                path=''
                element={<Home />}
            />
        </Routes>
    );
}

export default App;
