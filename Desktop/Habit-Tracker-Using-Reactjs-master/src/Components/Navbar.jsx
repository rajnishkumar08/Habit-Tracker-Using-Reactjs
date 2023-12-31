import React from "react";

const Navbar = () => {
  return (
    <div className="Navbar-container">
      <img
        className="habit-tracker-logo"
        src="https://cdn-icons-png.flaticon.com/512/5074/5074967.png"
        alt=""
      />
      <ul>
        <li>Home</li>
        <li>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/rajnish-kumar-8204341a8/"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/1377/1377213.png"
              alt=""
            />
          </a>
        </li>
        <li>
          <a target="_blank" href="https://github.com/rajnishkumar08">
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733609.png "
              alt=""
            />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
