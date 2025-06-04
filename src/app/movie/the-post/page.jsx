"use client"

import React from "react"
import Link from "next/link"
import Navbar from "../../../../components/navbar";
import Footer from "../../../../components/footer";
import ThePost from "../../../../components/thePostPage";

export default function HomePage() {
    return (
      <>
            <Navbar />
            <ThePost/>
            <Footer/>
      </>
    );
}
