"use client"

import React from "react"
import Link from "next/link"
import Navbar from "../../../../components/navbarSearch";
import Footer from "../../../../components/footer";
import SwampThing from "../../../../components/moviesComponent/swampThingPage";

export default function HomePage() {
    return (
      <>
            <Navbar />
            <SwampThing/>
            <Footer/>
      </>
    );
}
