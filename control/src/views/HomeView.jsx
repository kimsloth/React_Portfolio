import React from "react";
import Skip from "../components/Skip";
import Header from "../components/Header";
import Port from "../components/Port";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Skill from "../components/Skill";
import Site from "../components/Site";
import Main from "../components/Main";
import Intro from "../components/Intro";


const HomeView=() =>{
    return(
        <div>
            <Skip />
            <Header />
            <Main>
                <Intro />
                <Skill />
                <Site />
                <Port />
                <Contact />
            </Main>
            <Footer />

        </div>
    )
}

export  default  HomeView