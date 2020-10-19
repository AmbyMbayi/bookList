import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";

const Navbar = () => {
  const { books } = useContext(BookContext);
  return (
    <div className="navbar">
      <h1>Amby Library</h1>
      <p>You have {books.length} in your list</p>
    </div>
  );
};

export default Navbar;
