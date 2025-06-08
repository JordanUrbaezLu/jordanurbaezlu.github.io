import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 shadow-lg">
      <div className="container mx-auto px-6 py-4 flex justify-center">
        <p className="text-white text-sm">
          © {new Date().getFullYear()} Jordan Urbaez. All rights reserved.
        </p>
      </div>
    </footer>
  );
}