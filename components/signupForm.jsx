"use client"

import {auth, db } from '../firebase';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import React, { useState } from "react";
import { useRouter } from 'next/navigation';
import Link from "next/link";


export default function SignupForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [termCondition, setTermCodition] = useState(false);
  
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate terms and conditions FIRST
    if (!termCondition) {
      setError("Please accept the terms and conditions to continue");
      return;
    }
    
    try {
      // Create user in Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
  
      // Store additional user data in Firestore
      await setDoc(doc(db, "users", user.uid), {
        name,
        email,
        createdAt: new Date().toISOString()
      });
  
      // Redirect to home page or dashboard
      router.push('/login');
    } 
    catch (error) 
    {
      setError(error.message);
      console.error("Error during signup:", error);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Store user data in Firestore
      await setDoc(doc(db, "users", user.uid), {
        name: user.displayName,
        email: user.email,
        createdAt: new Date().toISOString()
      });

      router.push('/home');
    } catch (error) {
      setError(error.message);
      console.error("Error during Google sign in:", error);
    }
  };

  return (
    <div className="flex items-start">
      <div
        className="bg-[#191C33] rounded-[10px] p-4 sm:p-8 flex items-center justify-start shadow-2xl w-full max-w-[600px]"
        style={{ height: "650px", minHeight: "500px", width: '500px' }}
      >
        <div className="p-4 sm:p-8 rounded-xl w-full">
          <div className="text-center mb-6">
            <h1 className="text-white text-3xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text">
              Sign Up
            </h1>
            <p className="text-gray-300 text-m leading-relaxed">Create your account to get started</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="space-y-5">
              <div className="space-y-3">
                <div>
                  <label htmlFor="name" className="text-white block text-sm font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full bg-gradient-to-r from-[#A1AABF] to-[#B5BED0] border-0 text-gray-800 placeholder:text-gray-500 h-12 rounded-lg px-4 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300 shadow-inner"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="text-white block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full bg-gradient-to-r from-[#A1AABF] to-[#B5BED0] border-0 text-gray-800 placeholder:text-gray-500 h-12 rounded-lg px-4 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300 shadow-inner"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="text-white block text-sm font-medium mb-2">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full bg-gradient-to-r from-[#A1AABF] to-[#B5BED0] border-0 text-gray-800 placeholder:text-gray-500 h-12 rounded-lg px-4 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300 shadow-inner"
                  placeholder="Create a strong password"
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="terms"
                    checked={termCondition}
                    onChange={(e) => {
                      setTermCodition(e.target.checked)
                      // Clear error when user checks the box
                      if (errors.terms) {
                        setErrors((prev) => ({
                          ...prev,
                          terms: "",
                        }))
                      }
                    }}
                    className={`rounded border-gray-400 ${error.terms ? "ring-2 ring-red-500" : ""}`}
                  />
                  <label htmlFor="terms" className="ml-2 text-sm font-medium text-gray-300">
                    I agree to terms & conditions
                  </label>
                </div>
                {error.terms && <p className="text-red-400 text-xs mt-1 ml-6">{errors.terms}</p>}
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-[#1D50A3] text-white hover:bg-blue-900 h-12 font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                >
                  Create Account
                </button>
              </div>

              <div className="my-4 flex items-center">
                <div className="flex-1 border-t border-gray-600"></div>
                <span className="mx-4 text-gray-400">or</span>
                <div className="flex-1 border-t border-gray-600"></div>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleGoogleSignIn}
                  className="w-full bg-white text-gray-800 hover:bg-gray-100 h-12 font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-500/50 flex items-center justify-center"
                >
                  <img 
                    src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" 
                    alt="Google logo" 
                    className="w-5 h-5 mr-2"
                  />
                  Sign up with Google
                </button>
              </div>

              <div className="text-center text-gray-300 text-sm mt-4">
                Already have an account?{" "}
                <Link
                  href="/auth/login"
                  className="text-[#1D50A3] font-medium hover:underline transition-colors duration-200"
                >
                  Login
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}