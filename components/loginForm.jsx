"use client"

import React, { useState } from "react";
import Link from "next/link";
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { Eye, EyeOff } from 'lucide-react';

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors
    
    try {
      // Attempt to sign in with Firebase
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      if (user) {
        // Successful login
        console.log("Login successful");
        router.push('/home');
      }
    } catch (error) {
      // Handle specific error cases
      switch (error.code) {
        case 'auth/invalid-email':
          setError('Please enter a valid email address.');
          break;
        case 'auth/user-not-found':
          setError('No account found with this email.');
          break;
        case 'auth/wrong-password':
          setError('Incorrect password.');
          break;
        default:
          setError('Failed to login. Please try again.');
          break;
      }
      console.error("Login error:", error);
    }
  };

  return (
    <div
      className="bg-[#191C33] ml-2 sm:ml-4 rounded-[10px] p-4 sm:p-6 flex items-center justify-start shadow-2xl w-full max-w-[500px]"
      style={{ height: "560px", minHeight: "550px" }}
    >
      <div className="p-6 sm:p-8 rounded-lg w-full max-w-md">
        <div className="mt-4">
          <h1 className="text-white text-3xl font-bold text-center mb-3">Login</h1>
          <p className="text-gray-300 text-center mb-4">Enter your credentials to access your account</p>

          {error && (
            <div className="mb-4 p-3 bg-red-500/10 border border-red-500/50 rounded-lg">
              <p className="text-red-500 text-sm text-center">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-2">
            <div className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="email" className="text-white block">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-gradient-to-r from-[#A1AABF] to-[#B5BED0] border-0 text-gray-800 placeholder:text-gray-500 h-12 rounded-lg px-4 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300 shadow-inner"
                  placeholder="Enter your email"
                  style={{ borderRadius: "8px" }}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="password" className="text-white block">
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full bg-gradient-to-r from-[#A1AABF] to-[#B5BED0] border-0 text-gray-800 placeholder:text-gray-500 h-12 rounded-lg px-4 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300 shadow-inner"
                    placeholder="Enter your password"
                    style={{ borderRadius: "8px" }}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-800 focus:outline-none"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>

              <div className="flex items-center mt-2">
                <input
                  type="checkbox"
                  id="remember"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="rounded border-gray-400"
                />
                <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-300">
                  Remember me
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-[#1D50A3] text-white h-12 font-semibold rounded hover:bg-blue-900 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                style={{ borderRadius: "8px" }}
              >
                Login
              </button>

              <div className="mt-1 text-center text-gray-300 text-sm">
                Not a member?{" "}
                <Link href="/auth/signup" className="text-[#1D50A3] hover:underline transition-colors duration-200">
                  Create an account
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}