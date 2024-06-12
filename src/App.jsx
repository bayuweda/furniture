import "./App.css";
import "./index.css";
import BestSeller from "./component/best_seller";
import Exeptional from "./component/exeptional";
import HeroSection from "./component/hero";
import Navbar from "./component/navbar";
import OurStroy from "./component/age_company";
import ShopLook from "./component/shop_thelook";
import SignUp from "./component/sign-up";
import Footer from "./component/footer";
// import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <div className="mx-auto bg-background font-inter ">
        <Navbar />
        <HeroSection />
        <BestSeller />
        <Exeptional />
        <OurStroy />
        <ShopLook />
        <SignUp />
        <Footer />
      </div>
    </>
  );
}

export default App;
