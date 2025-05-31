"use client"

import React from "react"
import Link from "next/link"
import Navbar from "../../../../components/navbar";
import Footer from "../../../../components/footer";
import JohnWick from "../../../../components/johnWickPage";

export default function HomePage() {
    return (
      <>
            <Navbar />
            <JohnWick/>
            <Footer/>
      </>
    );
}
