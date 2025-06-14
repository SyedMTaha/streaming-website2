"use client"

import React from "react"
import Link from "next/link"
import Navbar from "../../../../components/navbarSearch";
import Footer from "../../../../components/footer";
import JamesBond from "../../../../components/moviesComponent/jamesBondPage";

export default function HomePage() {
    return (
      <>
            <Navbar />
            <JamesBond/>
            <Footer/>
      </>
    );
}
