"use client"

import React from "react"
import Link from "next/link"
import Navbar from "../../../../components/navbarSearch";
import Footer from "../../../../components/footer";
import Pursued from "../../../../components/moviesComponent/pursuedPage";

export default function HomePage() {
    return (
      <>
            <Navbar />
            <Pursued/>
            <Footer/>
      </>
    );
}
