import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const link = links.map((linkItem) => {
    return (
      <li key={linkItem}>
        <a href={`#${linkItem}`}>{linkItem}</a>
      </li>
    );
  });
  return (
    <nav>
      <ol style={{ display: "flex", listStyle: "none" }}>{link}</ol>
    </nav>
  );
}

export default NavBar;
