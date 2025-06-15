"use client"

import React from "react"
import Link from "next/link"
import Navbar from "../../../../components/navbarSearch";
import Footer from "../../../../components/footer";
import BadandtheBeatiful from "../../../../components/moviesComponent/action/badBeautifulPage";

export default function HomePage() {
    return (
      <>
            <Navbar />
            <BadandtheBeatiful/>
            <Footer/>
      </>
    );
}
