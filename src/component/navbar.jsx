import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import Shop from "../shop";

export default function Navbar({ cartCount }) {
  return (
    <>
      <header className="bg-primary w-full mx-auto text-white fixed z-50">
        <div className=""></div>
        <div className="border-inherit border-b-2 w-full py-3">
          <p className="text-white text-sm font-light text-center">
            EXPERTS IN SEASONING SINCE 1919 | FREE SHIPPING ON ORDERS OVER $80
          </p>
        </div>
        <div className="flex items-center justify-between py-6 relative px-6">
          <div className="mx-auto flex items-center">
            <h1 className="text-center text-3xl font-light tracking-widest absolute">
              AFTER.NOON
            </h1>
          </div>
          <div>
            <nav>
              <ul className="flex gap-5">
                <li>
                  <Link to="/account">Account</Link>
                </li>
                <li>
                  <a href="../shop">Search</a>
                </li>
                <li>
                  <Link to="/basket">Basket ({cartCount})</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
