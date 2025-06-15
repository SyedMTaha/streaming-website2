"use client"

import React from "react"
import Link from "next/link"
import Navbar from "../../../../components/navbarSearch";
import Footer from "../../../../components/footer";
import AtomicSubmarine from "../../../../components/moviesComponent/action/atomicSubmarinePage";

export default function HomePage() {
    return (
      <>
            <Navbar />
            <AtomicSubmarine/>
            <Footer/>
      </>
    );
}
