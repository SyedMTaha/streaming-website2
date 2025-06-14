"use client"

import React from "react"
import Link from "next/link"
import Navbar from "../../../../components/navbarSearch";
import Footer from "../../../../components/footer";
import CityHunter from "../../../../components/dealComponent/cityHunterPage";

export default function HomePage() {
    return (
      <>
            <Navbar />
            <CityHunter/>
            <Footer/>
      </>
    );
}
