"use client"

import React from "react"
import Link from "next/link"
import Navbar from "../../../../components/navbarSearch";
import Footer from "../../../../components/footer";
import StageCoach from "../../../../components/moviesComponent/action/stageCoachPage";

export default function HomePage() {
    return (
      <>
            <Navbar />
            <StageCoach/>
            <Footer/>
      </>
    );
}
