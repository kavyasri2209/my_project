import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


function Header() {
  return (
//     <div>
//         <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
//   <div class="container-fluid">
//     <a class="navbar-brand" href="#">Navbar</a>
//     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
//       <span class="navbar-toggler-icon"></span>
//     </button>
//     <div class="collapse navbar-collapse" id="navbarNavDropdown">
//       <ul class="navbar-nav">
//         <li class="nav-item">
//           <a class="nav-link active" aria-current="page" href="#">Home</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href="#">Features</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href="#">Pricing</a>
//         </li>
//         <li class="nav-item dropdown">
//           <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//             Dropdown link
//           </a>
//           <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
//             <li><a class="dropdown-item" href="#">Action</a></li>
//             <li><a class="dropdown-item" href="#">Another action</a></li>
//             <li><a class="dropdown-item" href="#">Something else here</a></li>
//           </ul>
//         </li>
//       </ul>
//     </div>
//   </div>
// </nav>
//     </div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
          <div className="container-fluid container">
            <Link className="navbar-brand fw-bold" to="/">My Portfolio</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item"><Link className="nav-link" to="/intro">Intro</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/skills">Skills</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/grades">Grades</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/projects">Projects</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/form">Contact</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/cards">Cards</Link></li>
              </ul>
            </div>
          </div>
        </nav>
  )
}

export default Header
