"use client"

import React from "react"
import Link from "next/link"
import Navbar from "../../../../components/navbarSearch";
import Footer from "../../../../components/footer";
import Loveinthesky from "../../../../components/dealComponent/loveinSkyPage";

export default function HomePage() {
    return (
      <>
            <Navbar />
            <Loveinthesky/>
            <Footer/>
      </>
    );
}
