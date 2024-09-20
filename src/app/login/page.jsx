"use client";
import React from "react";
import Link from "next/link";
import { FaGithub, FaGoogle } from "react-icons/fa";


const page = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Login to DevQuery</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Login
          </button>
        </form>

        <div className="mt-6">
          <p className="text-center text-sm">Or log in with:</p>
          <div className="flex justify-between mt-4">
            <button className="flex-1 bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-700 transition duration-200 mx-1 flex items-center justify-center">
              <FaGithub className="mr-2" /> GitHub
            </button>
            <button className="flex-1 bg-red-600 text-white py-2 rounded-lg hover:bg-red-500 transition duration-200 mx-1 flex items-center justify-center">
              <FaGoogle className="mr-2" /> Google
            </button>
          </div>
        </div>

        <p className="mt-4 text-center text-sm">
        Don&apos;t have an account?{" "}
          <Link href="/register" className="text-blue-500 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default page;