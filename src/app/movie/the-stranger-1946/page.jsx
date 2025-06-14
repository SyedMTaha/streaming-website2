"use client"

import React from "react"
import Link from "next/link"
import Navbar from "../../../../components/navbarSearch";
import Footer from "../../../../components/footer";
import LaLaLand from "../../../../components/moviesComponent/laLaLandPage";

export default function HomePage() {
    return (
      <>
            <Navbar />
            <LaLaLand/>
            <Footer/>
      </>
    );
}
