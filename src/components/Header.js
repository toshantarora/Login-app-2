import React from 'react'
import {Link} from 'react-router-dom';
function Header() {
    return (
     <div>
        <nav className="navbar is-primary" role="navigation" aria-label="main navigation" >
  <div className="navbar-brand">
    <a className="navbar-item" href="https://bulma.io">
      {/* <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"> */}
    </a>

    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" className="navbar-menu">
    <div className="navbar-start">

      <a className="navbar-item">
        Home
      </a>

      <a className="navbar-item">
        Services
      </a>

      
      <a className="navbar-item">
        Products
      </a>

      
      <a className="navbar-item">
        Contact
      </a>

      
    </div>

    <div className="navbar-end">
      <div className="navbar-item">
        <div className="buttons">
          <Link to='/SignUp' className="button is-primary">
            <strong>Sign up</strong>
          </Link>
          <Link to='/Login' className="button is-light">
            Log in
          </Link>
        </div>
      </div>
    </div>
  </div>
</nav>
     </div>
    )
}


document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
  
      // Add a click event on each of them
      $navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {
  
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);
  
          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
  
        });
      });
    }
  
  });
  

export default Header
