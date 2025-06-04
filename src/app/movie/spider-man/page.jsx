"use client"

import React from "react"
import Link from "next/link"
import Navbar from "../../../../components/navbarSearch";
import Footer from "../../../../components/footer";
import SpiderMan from "../../../../components/spiderManPage";

export default function HomePage() {
    return (
      <>
            <Navbar />
            <SpiderMan/>
            <Footer/>
      </>
    );
}
