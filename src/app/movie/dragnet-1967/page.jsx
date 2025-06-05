"use client"

import React from "react"
import Link from "next/link"
import Navbar from "../../../../components/navbarSearch";
import Footer from "../../../../components/footer";
import Dragnet from "../../../../components/dragnetPage";

export default function HomePage() {
    return (
      <>
            <Navbar />
            <Dragnet/>
            <Footer/>
      </>
    );
}
