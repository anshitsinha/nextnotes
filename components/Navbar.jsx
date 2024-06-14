import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-red-100 px-8 py-3" >
      <Link className="font-bold" href={"/"}> Notes. </Link>
      <Link className="bg-red-300 text-white p-2" href={"/addNote"}> Add Note </Link>
    </nav>
  );
};

export default Navbar;
