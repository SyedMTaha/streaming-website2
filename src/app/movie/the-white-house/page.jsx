"use client"

import React from "react"
import Link from "next/link"
import Navbar from "../../../../components/navbarSearch";
import Footer from "../../../../components/footer";
import TheWhiteHouse from "../../../../components/theWhiteHousePage";

export default function HomePage() {
    return (
      <>
            <Navbar />
            <TheWhiteHouse/>
            <Footer/>
      </>
    );
}
