"use client"

import React from "react"
import Link from "next/link"
import Navbar from "../../../../components/navbar";
import Footer from "../../../../components/footer";
import Riverdale from "../../../../components/riverdalePage";

export default function HomePage() {
    return (
      <>
            <Navbar />
            <Riverdale/>
            <Footer/>
      </>
    );
}
