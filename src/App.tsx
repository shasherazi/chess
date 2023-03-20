import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import './App.css';
import Board from './components/Board';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Nav />}>
            <Route path="/" element={<Home />} />
            <Route path="/board" element={<Board />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
