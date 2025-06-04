"use client"

import React from "react"
import Link from "next/link"
import Navbar from "../../../../components/navbar";
import Footer from "../../../../components/footer";
import BestFriend from "../../../../components/bestFriendPage";

export default function HomePage() {
    return (
      <>
            <Navbar />
            <BestFriend/>
            <Footer/>
      </>
    );
}
