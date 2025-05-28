"use client"

import React from "react"
import Link from "next/link"
import Navbar from "../../../../components/navbar";
import Footer from "../../../../components/footer";
import Loveinsky from "../../../../components/loveInSkyPage";

export default function HomePage() {
    return (
      <>
            <Navbar />
            <Loveinsky/>
            <Footer/>
      </>
    );
}
