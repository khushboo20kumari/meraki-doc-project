import logo from './logo.svg';
import './App.css';
import Home from "./Home"
import Learn from './Learn';
import Scratch from "./Scratch"
import Sreach from "./Sreach"
import Navbar from "./Navbar"

import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Navbar />}>
            <Navbar />
          </Route>
          <Route index element={<Home />}>
            <Home />
          </Route>
          <Route path='learn'>
            <Learn />
          </Route>
          <Route path="scratch">
            <Scratch />
          </Route>
          <Route path='sreach'>
            <Sreach />
          </Route>
        </Routes>

      </BrowserRouter>
    </div>

  );
}

export default App;
