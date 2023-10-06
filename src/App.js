import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'; 

import Navbar from "./Navbar"
import Home from "./Home";

import Learn from "./Learn";
import Dashboard from "./Dashboard";

import Scratch from "./Scratch";
import Sreach from "./Sreach"
import About from "./About";
import GetInvolved from "./GetInvolved";
import OurStory from "./OurStory";
import MerakiTeam from "./MerakiTeam";
function App() {
    return (

        <div className="App">

            <BrowserRouter>

                <Routes>

                    <Route path="/" element={<Navbar />}>

                        <Route path="home" element={<Home />} />

                        <Route path="learn" element={<Learn />}/>

                        <Route path="about" element={<About/>} />

                        <Route path="dashboard" element={<Dashboard/>}/>

                        <Route path="scratch" element={<Scratch/>}/>

                        <Route path="sreach" element={<Sreach/>}/>

                        <Route path="ourstory" element={<OurStory/>}/>
                        
                        <Route path="merakiteam" element={<MerakiTeam/>}></Route>
                        
                    </Route>

                </Routes>

            </BrowserRouter>
               <GetInvolved/>
        </div>
    )
}
export default App