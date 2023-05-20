import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from './pages/Home';
import { Job } from './pages/Job';

function App({ LinkTo }) {
    return (
        <Routes>
            <Route
                path='job/:id'
                element={<Job />}
            />
            <Route
                path=''
                element={<Home />}
            />
        </Routes>
    );
}

export default App;
