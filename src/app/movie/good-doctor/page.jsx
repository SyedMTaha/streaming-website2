"use client"

import React from "react"
import Link from "next/link"
import Navbar from "../../../../components/navbarSearch";
import Footer from "../../../../components/footer";
import GoodDoctor from "../../../../components/moviesComponent/goodDoctorPage";

export default function HomePage() {
    return (
      <>
            <Navbar />
            <GoodDoctor/>
            <Footer/>
      </>
    );
}
