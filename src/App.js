import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css'; 

import Navbar from "./Navbar"
import Home from "./Home";

import RondomQuoteRow from "./RandomQuote/RandomQuoteRow";
import MovieRow from "./MovieSreach/MovieRow"

import Learn from "./Learn";

import About from "./About";
import PhoneForm from "./PhoneBookForm/PhoneForm";

import Item from "./TodoList/Item";

import OurStory from "./OurStory";

import OurPartners from "./OurPartners"
import PostMethod from "./PostMethod";

import Product from "./E-commerce/Product";
import MainPage from "./Login-Signup-Page/MainPage";

function App() {
    return (

        <div className="App">

            <BrowserRouter>

                <Routes>

                    <Route path="/" element={<Navbar />}>

                        <Route path="movie" element={<MovieRow/>}></Route>

                        <Route path="randomquote" element={<RondomQuoteRow/>}/>

                        <Route path="phonebookform" element={<PhoneForm/>}></Route>

                        <Route path="home" element={<Home />} />

                        <Route path="learn" element={<Learn />}/>

                        <Route path="movie" element={<MovieRow/>}></Route>

                        <Route path="todolist" element={<Item/>}></Route>

                        

                        <Route path="about" element={<About/>} />

                        <Route path="ourstory" element={<OurStory/>}/>
                        
                        <Route path="ourPartners" element={<OurPartners/>}/>
                        
                        <Route path="postmethod" element={<PostMethod/>}></Route>

                        <Route path="ecommerce" element={<Product/>}></Route>

                        <Route path="loginsignup" element={<MainPage/>}></Route>
                                                
                    </Route>

                </Routes>

            </BrowserRouter>
               
        </div>
    )
}
export default App