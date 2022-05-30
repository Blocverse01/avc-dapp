import { useState } from "react";
import logo from "./AVC_Logo-White.png";
import curve from "./curve.svg";
import "./App.css";
import { Outlet, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import instagram from "./assets/instagram.png";
import discord from "./assets/discord.svg";
import twitter from "./assets/twitter.png";

function App() {
  const navItems = ["Getting Started", "Our Collections", "Contact Us"];
  const location = useLocation();
  return (
    <div className="App">
      <section className="App-container">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <nav className="lg-only">
            <ul className="Nav-list">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className={`${
                    index !== parseInt(navItems.length) - 1
                      ? "mb-[4.5625rem] lg:mb-0 lg:mr-[4.5625rem]"
                      : ""
                  }`}
                >
                  {item}
                </li>
              ))}
            </ul>
            <button className="Nav-button mobile-only">Connect Wallet</button>
          </nav>
          <button className="Nav-button lg-only">Connect Wallet</button>
        </header>
      </section>
      <main>
        <Outlet />
      </main>
      <div>
        <img src={curve} className="Home-curve" alt="curve" />
      </div>
      <div className="App-ellipsis-1"></div>
      <div className="App-ellipsis-2"></div>
      <div className="App-ellipsis-3"></div>
      <div className="App-ellipsis-4"></div>
      <footer className="App-footer">
        <section className="App-footer-socials">
          <div className="App-footer-socials-item">
            <div>
              <h3 className="App-footer-header">Follow on Instagram</h3>
              <div className="text-center">
                <FontAwesomeIcon icon={faChevronDown} />
              </div>
            </div>
            <img
              src={instagram}
              alt="follow on instagram"
              className="App-footer-social-image"
            />
          </div>
          <div className="App-footer-socials-item">
            <div>
              <h3 className="App-footer-header">Join Our Discord</h3>
              <div className="text-center">
                <FontAwesomeIcon icon={faChevronDown} />
              </div>
            </div>
            <img
              src={discord}
              alt="join discord"
              className="App-footer-social-image"
            />
          </div>
          <div className="App-footer-socials-item">
            <div>
              <h3 className="App-footer-header">Follow on Twitter</h3>
              <div className="text-center">
                <FontAwesomeIcon icon={faChevronDown} />
              </div>
            </div>
            <img
              src={twitter}
              alt="follow on twitter"
              className="App-footer-social-image"
            />
          </div>
        </section>
        <div className="App-footer-copyright">
          (c) Copyright African Valuables Collective, 2022. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
