import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#fffaf2] px-4 text-center">
      <h1 className="text-6xl font-bold text-[#a06322] mb-4">404</h1>
      <p className="text-xl text-[#4a3b28] mb-6">Page not found</p>
      <Link
        to="/"
        className="bg-[#7f4a18] text-white px-6 py-2 rounded hover:bg-[#5e3411] transition"
      >
        Go to Home
      </Link>
    </div>
  );
}
