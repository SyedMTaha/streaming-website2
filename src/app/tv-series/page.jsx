"use client"

import React from "react"
import Link from "next/link"
import Navbar from "../../../components/navbarTwo";
import Footer from "../../../components/footer";
import TvSeries from "../../../components/tvSeries";

export default function HomePage() {
    return (
      <>
            <Navbar />
            <TvSeries/>
            <Footer/>
      </>
    );
}
