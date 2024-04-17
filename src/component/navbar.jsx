import React from "react";
import "./navbar.css";

function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <span class="material-symbols-outlined">
sdk
</span>
        <a class="navbar-brand" href="#">TECHNOSOFT</a>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item active">
              <a class="nav-link" href="#">ANASAYFA <span class="sr-only">(HOMEPAGE)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">PRODUCTS</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">CONTACT</a>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
          </form>
        </div>
      </nav>
    );
    }

    export default Navbar;