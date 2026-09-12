import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 px-2 sm:px-4 sticky top-0 z-50 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown max-[1370px]:block hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <span>Menu</span>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[100] mt-3 w-64 sm:w-72 p-2 shadow-xl border border-slate-200"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about-us">About Us</Link>
            </li>
            <li>
              <details>
                <summary>Committee</summary>
                <ul>
                  <li>
                    <Link to="/committee/governance">
                      Governance and Academic Leadership
                    </Link>
                  </li>
                  <li>
                    <Link to="/committee/advisory">Advisory Committee</Link>
                  </li>
                  <li>
                    <Link to="/committee/technical">Technical Committee</Link>
                  </li>
                  <li>
                    <Link to="/committee/organizer">Organizing Committee</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link to="/call-for-papers">Call for Papers</Link>
            </li>
            <li>
              <Link to="/publication">Publication</Link>
            </li>
            <li>
              <Link to="/submission">Submission</Link>
            </li>
            <li>
              <Link to="/important-dates">Important Dates</Link>
            </li>
            <li>
              <Link to="/registration">Registration</Link>
            </li>
            <li>
              <Link to="/accommodation">Accommodation</Link>
            </li>
            <li>
              <Link to="/downloads">Downloads</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden min-[1371px]:flex">
        <ul className="flex flex-wrap justify-center gap-3 sm:gap-6 text-sm sm:text-base">
          <li>
            <Link to="/" className="hover:opacity-70 transition-opacity">
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about-us"
              className="hover:opacity-70 transition-opacity"
            >
              About Us
            </Link>
          </li>
          {/* <li>
            <Link
              to="/committee"
              className="hover:opacity-70 transition-opacity"
            >
              Committee
            </Link>
          </li> */}
          <li className="relative group">
            <span className="hover:opacity-70 transition-opacity cursor-pointer">
              Committee
            </span>

            {/* dropdown: use opacity and transform for smooth GPU reveal */}
            <ul className="absolute left-0 mt-0 w-72 bg-base-100 rounded-md z-20 shadow-lg py-2 transition-opacity transition-transform duration-150 ease-out transform -translate-y-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 pointer-events-none group-hover:pointer-events-auto">
              <li>
                <Link to="/committee/governance" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 rounded">
                  Governance and Academic Leadership
                </Link>
              </li>
              <li>
                <Link to="/committee/advisory" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 rounded">
                  Advisory Committee
                </Link>
              </li>
              <li>
                <Link to="/committee/technical" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 rounded">
                  Technical Committee
                </Link>
              </li>
              <li>
                <Link to="/committee/organizer" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 rounded">
                  Organizing Committee
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link
              to="/call-for-papers"
              className="hover:opacity-70 transition-opacity"
            >
              Call for Papers
            </Link>
          </li>
          <li>
            <Link
              to="/publication"
              className="hover:opacity-70 transition-opacity"
            >
              Publication
            </Link>
          </li>
          <li>
            <Link
              to="/submission"
              className="hover:opacity-70 transition-opacity"
            >
              Submission
            </Link>
          </li>
          <li>
            <Link
              to="/important-dates"
              className="hover:opacity-70 transition-opacity"
            >
              Important Dates
            </Link>
          </li>
          <li>
            <Link
              to="/registration"
              className="hover:opacity-70 transition-opacity"
            >
              Registration
            </Link>
          </li>
          <li>
            <Link
              to="/accommodation"
              className="hover:opacity-70 transition-opacity"
            >
              Accommodation
            </Link>
          </li>
          <li>
            <Link
              to="/downloads"
              className="hover:opacity-70 transition-opacity"
            >
              Downloads
            </Link>
          </li>
          <li>
            <Link to="/gallery" className="hover:opacity-70 transition-opacity">
              Gallery
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:opacity-70 transition-opacity">
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end"></div>
    </div>
  );
};

export default Navbar;
