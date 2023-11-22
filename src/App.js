import React from "react";
import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Activites from "./components/Activites";
import Bookings from "./components/Bookings";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
    <TopBar/>
    <Navbar/>
    <Hero/>
    <Activites/>
    <Bookings/>
    <Gallery/>
    <Contact/>
    <Footer/>
     </div>
  );
}

export default App;
