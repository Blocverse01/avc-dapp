import { useState, useRef, useEffect } from "react";
import logo from "./AVC_Logo-White.png";
import curve from "./curve.svg";
import "./App.css";
import { Outlet, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import instagram from "./assets/instagram.png";
import discord from "./assets/discord.svg";
import twitter from "./assets/twitter.png";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

function App() {
  useEffect(() => {
    gsap.to("progress", {
      value: 100,
      ease: "none",
      scrollTrigger: { scrub: 0.3 },
    });
    const element = ref.current;
    let proxy = { skew: 0 },
      skewSetter = gsap.quickSetter(
        element.querySelectorAll(".skewElem"),
        "skewY",
        "deg"
      ), // fast
      clamp = gsap.utils.clamp(-20, 20); // don't let the skew go beyond 20 degrees.

    ScrollTrigger.create({
      onUpdate: (self) => {
        let skew = clamp(self.getVelocity() / -300);
        // only do something if the skew is MORE severe. Remember, we're always tweening back to 0, so if the user slows their scrolling quickly, it's more natural to just let the tween handle that smoothly rather than jumping to the smaller skew.
        if (Math.abs(skew) > Math.abs(proxy.skew)) {
          proxy.skew = skew;
          gsap.to(proxy, {
            skew: 0,
            duration: 0.8,
            ease: "power3",
            overwrite: true,
            onUpdate: () => skewSetter(proxy.skew),
          });
        }
      },
    });

    // make the right edge "stick" to the scroll bar. force3D: true improves performance
    gsap.set(element.querySelectorAll(".skewElem"), {
      transformOrigin: "right center",
      force3D: true,
    });
  }, []);

  const navItems = ["Getting Started", "Our Collections", "Contact Us"];
  const [modal, setModalOpen] = useState(false);
  const location = useLocation();
  const ref = useRef(null);
  return (
    <div ref={ref} className="App">
      <progress max="100" value="0"></progress>
      <section className="App-container">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <nav className={`lg:flex-1`}>
            <ul
              className={`Nav-list ${
                modal
                  ? "fixed lg:relative lg:p-0 w-[230px] backdrop-blur-md z-[9999] bg-[rgba(4,5,25,1)] lg:bg-transparent bottom-0 top-0 p-5 transition-all duration-100 ease-in-out right-0"
                  : "w-0 h-0"
              } overflow-y-hidden overflow-x-hidden lg:w-full lg:h-auto`}
            >
              <li
                className={`text-right mb-12 ${
                  modal ? "" : "hidden"
                } lg:hidden`}
              >
                <button onClick={() => setModalOpen(false)}>
                  <FontAwesomeIcon
                    icon={faTimes}
                    className="text-3xl text-white"
                  />
                </button>
              </li>
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className={`${
                    index !== parseInt(navItems.length) - 1
                      ? "mb-[2.5625rem] lg:mb-0 lg:mr-[4.5625rem]"
                      : ""
                  }`}
                >
                  {item}
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex justify-center flex-1 lg:hidden">
            <button className="Nav-button">Connect Wallet</button>
          </div>
          <button className="mobile-only" onClick={() => setModalOpen(true)}>
            <svg
              width="23"
              height="16"
              viewBox="0 0 23 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="23" height="2" fill="white" />
              <rect y="7" width="23" height="2" fill="white" />
              <rect y="14" width="23" height="2" fill="white" />
            </svg>
          </button>
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
              className="App-footer-social-image w-[26.55px] h-[26.55px] lg:w-[153.96px] lg:h-[153.96px] xl:w-[183.96px] xl:h-[183.96px]"
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
              className="App-footer-social-image w-[38.62px] h-[28.97px] lg:w-[237.56px] lg:h-[170.68px] xl:w-[267.56px] xl:h-[200.68px]"
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
              className="App-footer-social-image w-[27.41px] h-[22.28px] lg:w-[159.86px] lg:h-[124.34px] xl:w-[189.86px] xl:h-[154.34px]"
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
