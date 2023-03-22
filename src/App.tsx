import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import './App.css';
import Board from './components/Board';
import About from './components/About';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Nav />}>
            <Route path="/chess" element={<Home />} />
            <Route path="/chess/board" element={<Board />} />
            <Route path="/chess/about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
