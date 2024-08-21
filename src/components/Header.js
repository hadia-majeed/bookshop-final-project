import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => (
  <header className="bg-white">
    <div className="bg-danger text-white text-center">
      Free shipping on all Pakistan orders above Rs 2000
    </div>

    <div className="container-fluid" id="top-items">
      <div id="navbar-pic1">
      <Link to="/">
          <img src="imagesfolder/goodreads.png" alt="Goodreads" />
        </Link>
      </div>

      <div className="search-bar">
        <input type="text" className="search-bar" placeholder="Search Books.." />
      </div>
      <div className="call">
        <a href="tel:+923324855062" className="btn btn-lg" style={{ width: '200px', fontSize: 'medium', marginLeft:'-100px' }}>
          <b>Call Us For Info 545332 0061</b>
        </a>
      </div>
      <div id="navbar-part2">
        <Link to="/login" className="btn" style={{ fontWeight: 'bold', fontSize: 'medium', width: '100px' }}>
          Log in/ Sign Up
        </Link>
      </div>
      <div id="cart">
        <Link to="/cart" className="btn">
          <i className="fas fa-shopping-cart"></i>
        </Link>
      </div>
    </div>

    <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" id="home" to="/">Home</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle active" href="#" id="navbarDropdown" role="button">
                Genre
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown" style={{ width: '800px' }}>
                <div className="container-fluid" style={{ height: '300px' }}>
                <div className="row industry-items" style={{ marginLeft:'60px' }}>
                <div className="col-md-4">
                      <Link className="dropdown-item dropdown-btn" to="/genre/fantasy"><i className="fas fa-dragon"></i> Fantasy</Link>
                      <Link className="dropdown-item dropdown-btn" to="/genre/science-fiction"><i className="fas fa-rocket"></i> Science Fiction</Link>
                      <Link className="dropdown-item dropdown-btn" to="/genre/horror"><i className="fas fa-skull-crossbones"></i> Horror</Link>
                      <Link className="dropdown-item dropdown-btn" to="/genre/romance"><i className="fas fa-heart"></i> Romance</Link>
                      <Link className="dropdown-item dropdown-btn" to="/genre/mystery"><i className="fas fa-search"></i> Mystery</Link>
                    </div>
                    <div className="col-md-4">
                      <Link className="dropdown-item dropdown-btn" to="/genre/thriller"><i className="fas fa-book-dead"></i> Thriller</Link>
                      <Link className="dropdown-item dropdown-btn" to="/genre/historical"><i className="fas fa-landmark"></i> Historical Fiction</Link>
                      <Link className="dropdown-item dropdown-btn" to="/genre/children"><i className="fas fa-child"></i> Children's</Link>
                      <Link className="dropdown-item dropdown-btn" to="/genre/science"><i className="fas fa-cog"></i> Science</Link>
                      <Link className="dropdown-item dropdown-btn" to="/genre/non-fiction"><i className="fas fa-brain"></i> Non-Fiction</Link>
                    </div>
                    <div className="col-md-4">
                      <Link className="dropdown-item dropdown-btn" to="/genre/adventure"><i className="fas fa-globe"></i> Adventure</Link>
                      <Link className="dropdown-item dropdown-btn" to="/genre/spirituality"><i className="fas fa-dove"></i> Spirituality</Link>
                      <Link className="dropdown-item dropdown-btn" to="/genre/legal-thriller"><i className="fas fa-gavel"></i> Legal Thriller</Link>
                      <Link className="dropdown-item dropdown-btn" to="/genre/biography"><i className="fas fa-book-open"></i> Biography</Link>
                      <Link className="dropdown-item dropdown-btn" to="/genre/crime"><i className="fas fa-user-secret"></i> Crime</Link>
                    </div>
                  </div>
                </div>
              </div>
           
            </li>
            <li className="nav-item">
              <Link className="nav-link"to="/HotItems">Hot Items</Link></li>
              
            
          </ul>
        </div>
      </div>
    </nav>
  </header>
);

export default Header;
