"use client"

import React from "react"
import Link from "next/link"
import Navbar from "../../../../components/navbarSearch";
import Footer from "../../../../components/footer";
import SpaceX from "../../../../components/dealComponent/spaceXPage";

export default function HomePage() {
    return (
      <>
            <Navbar />
            <SpaceX/>
            <Footer/>
      </>
    );
}
