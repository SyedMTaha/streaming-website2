"use client"

import React from "react"
import Link from "next/link"
import Navbar from "../../../../components/navbarSearch";
import Footer from "../../../../components/footer";
import TheSleepingAngel from "../../../../components/moviesComponent/theSleepingAngelPage";

export default function HomePage() {
    return (
      <>
            <Navbar />
            <TheSleepingAngel/>
            <Footer/>
      </>
    );
}
