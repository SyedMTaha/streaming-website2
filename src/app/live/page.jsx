"use client"

import React from "react"
import Link from "next/link"
import Navbar from "../../../components/navbarTwo";
import Footer from "../../../components/footer";
import Live from "../../../components/livetvPage";

export default function HomePage() {
    return (
      <>
            <Navbar />
            <Live/>
            <Footer/>
      </>
    );
}
