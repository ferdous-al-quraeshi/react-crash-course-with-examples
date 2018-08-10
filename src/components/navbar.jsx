import React from "react";

// Stateless Functional Component
const NavBar = ({ totalCounters }) => {
  // 'Object destructuring' applied
  return (
    <nav className="navbar navbar-light bg-light">
      <span className="navbar-brand">
        Total Counters{" "}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </span>
    </nav>
  );
};

export default NavBar;
