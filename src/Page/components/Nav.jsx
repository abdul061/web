import React from 'react';

const Nav = () => {
  return (
    <div
      data-collapse="medium"
      data-animation="default"
      data-duration="400"
      data-easing="ease"
      data-easing2="ease"
      role="banner"
      className="navigation w-nav"
    >
      <div className="navigation-wrap">
        <a href="/" className="logo-link w-nav-brand">
          <img
            src="/assets/img/website-logo.jpeg" // Use the correct relative path
            width="108"
            sizes="107.99107360839844px"
            alt="Website Logo"
            className="logo-image"
          />
        </a>
        <div className="menu">
          <nav role="navigation" id="nav" className="navigation-items w-nav-menu">
            <a href="/about" aria-current="page" className="navigation-item w-nav-link w--current">
              About
            </a>
            <a href="/work" className="navigation-item w-nav-link">
              Work
            </a>
            <a href="/service" className="navigation-item w-nav-link">
              Services
            </a>
            <a href="/contact" className="navigation-item w-nav-link">
              Contact
            </a>
          </nav>
          <div className="menu-button w-nav-button">
            <img
              src="/assets/img/icon.png" // Use the correct relative path
              width="22"
              alt="Menu Icon"
              className="menu-icon"
            />
          </div>
        </div>
        <a href="Contact.html" className="primary-button cc-contact-us w-inline-block">
          <div>Contact us</div>
        </a>
      </div>
    </div>
  );
};

export default Nav;
