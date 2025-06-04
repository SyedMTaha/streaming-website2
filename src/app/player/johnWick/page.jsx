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
            {/* <JohnWick/> */}
            <div className="flex justify-center items-center h-[70vh]">
                <p className="text-3xl font-bold">
                    Will be uploaded soon
                </p>
            </div>
            <Footer/>
      </>
    );
}
