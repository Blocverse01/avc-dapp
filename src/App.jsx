import { useState } from "react";
import logo from "./AVC_Logo-White.png";
import curve from "./curve.svg";
import "./App.css";
import { Outlet, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faBars } from "@fortawesome/free-solid-svg-icons";
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
          </nav>
          <button className="Nav-button mobile-only">Connect Wallet</button>
          <FontAwesomeIcon
            icon={faBars}
            className="text-3xl lg:hidden text-white"
          />
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
              <div className="App-footer-social-dropdown">
                <FontAwesomeIcon icon={faChevronDown} />
              </div>
            </div>
            <img
              src={instagram}
              alt="follow on instagram"
              className="App-footer-social-image w-[26.55px] h-[26.55px] lg:w-[183.96px] lg:h-[183.96px]"
            />
          </div>
          <div className="App-footer-socials-item">
            <div>
              <h3 className="App-footer-header">Join Our Discord</h3>
              <div className="App-footer-social-dropdown">
                <FontAwesomeIcon icon={faChevronDown} />
              </div>
            </div>
            <img
              src={discord}
              alt="join discord"
              className="App-footer-social-image w-[38.62px] h-[28.97px] lg:w-[267.56px] lg:h-[200.68px]"
            />
          </div>
          <div className="App-footer-socials-item">
            <div>
              <h3 className="App-footer-header">Follow on Twitter</h3>
              <div className="App-footer-social-dropdown">
                <FontAwesomeIcon icon={faChevronDown} />
              </div>
            </div>
            <img
              src={twitter}
              alt="follow on twitter"
              className="App-footer-social-image w-[27.41px] h-[22.28px] lg:w-[189.86px] lg:h-[154.34px]"
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
