"use client"

import React from "react"
import Link from "next/link"
import Navbar from "../../../../components/navbarSearch";
import Footer from "../../../../components/footer";
import TheGreatEmpire from "../../../../components/moviesComponent/theGreatEmpirePage";

export default function HomePage() {
    return (
      <>
            <Navbar />
            <TheGreatEmpire/>
            <Footer/>
      </>
    );
}
