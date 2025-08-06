import React from "react";

export default function Footer() {
  const currYear = new Date().getFullYear();

  return (
    <footer>
      <p>&copy; Copyright {currYear}</p>
    </footer>
  );
}
