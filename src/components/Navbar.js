import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Accomodation from './Accomodation';
import Attractions from './Attractions';
import Facilities from './Facilities';
import Gallery from './Gallery';
import Home from './home/Home'
import NavComp from './home/NavComp';
import Host from './Host';
import StoryPage from './StoryPage';

export default function Navbar() {
    return (
        <Router>



            <Routes>
                <Route exact path="" element={[<NavComp showImage />, <Home />]} />
                <Route path="story" element={[<NavComp />, <StoryPage />]} />
                <Route path="host" element={[<NavComp />, <Host />]} />
                <Route path="gallery" element={[<NavComp />, <Gallery />]} />
                <Route path="facilities" element={[<NavComp />, < Facilities />]} />
                <Route path="accomodation" element={[<NavComp />, < Accomodation />]} />
                <Route path="attractions" element={[<NavComp />, < Attractions />]} />
            </Routes>
        </Router>
    )
}
