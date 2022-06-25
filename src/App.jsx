import { useState, useRef, useEffect } from "react";
import logo from "./AVC_Logo-White.png";
import curve from "./curve.svg";
import "./App.css";
import { Link, Outlet, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner, faTimes } from "@fortawesome/free-solid-svg-icons";
import "react-loading-skeleton/dist/skeleton.css";
import "animate.css/animate.min.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import {
  Link as ScrollLink,
  Events,
  scroller,
  animateScroll as scroll,
} from "react-scroll";
import { useQuery } from "./hooks/useQuery";
import { gsap } from "gsap";
//import ScrollTrigger from "gsap/ScrollTrigger";
import WalletConnect from "./components/WalletConnect";

function App() {
  const [modal, setModalOpen] = useState(false);
  const location = useLocation();
  let query = useQuery();
  let view = query.get("view");

  useEffect(() => {
    gsap.to("progress", {
      value: 100,
      ease: "none",
      scrollTrigger: { scrub: 0.3 },
    });
    /*
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
    }); */
    Events.scrollEvent.register("end", function (to, element) {
      setModalOpen(false);
    });

    let mybutton = document.getElementById("btn-back-to-top");
    window.onscroll = function () {
      scrollFunction();
    };
    function scrollFunction() {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    }
    mybutton.addEventListener("click", () => scroll.scrollToTop());
  }, []);
  useEffect(() => {
    if (view) {
      scroller.scrollTo(view, {
        duration: 500,
        spy: true,
        smooth: true,
        offset: 50,
      });
      return;
    }
    window.scrollTo(0, 0);
  }, [location]);
  const navItems = [
    { title: "Getting Started", to: "gettingStarted" },
    { title: "Our Collections", to: "ourCollection" },
    { title: "Our Roadmap", to: "roadMap" },
    { title: "Our Partners", to: "Partners" },
    { title: "Contact Us", to: "contactUs" },
  ];
  const isHome = location.pathname === "/";
  const hideElipsis = !isHome ? "hidden" : "";
  const ref = useRef(null);

  return (
    <div ref={ref} className="App">
      <progress max="100" value="0"></progress>
      <button
        type="button"
        data-mdb-ripple="true"
        data-mdb-ripple-color="light"
        className="App-scroll-to-top"
        id="btn-back-to-top"
      >
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          className="w-4 h-4"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path
            fill="currentColor"
            d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"
          ></path>
        </svg>
      </button>
      <section className="App-container">
        <header className="App-header">
          <Link to="/">
            <img src={logo} className="App-logo" alt="logo" />
          </Link>
          <nav className={`lg:flex-1`}>
            <ul
              className={`Nav-list ${
                modal
                  ? "fixed lg:p-0 w-[230px] backdrop-blur-md z-[10000] bg-[rgba(4,5,25,1)] lg:bg-transparent bottom-0 top-0 p-5 transition-all duration-100 ease-in-out right-0"
                  : "w-0 h-0"
              } overflow-y-hidden overflow-x-hidden lg:w-full lg:static z-0 lg:h-auto`}
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
                      ? "mb-[2.5625rem] lg:mb-0 lg:mr-[2.3rem] xl:mr-[3.3rem] 2xl:mr-[4.5625rem]"
                      : ""
                  } cursor-pointer hover:underline`}
                >
                  {isHome ? (
                    <ScrollLink
                      to={item.to}
                      spy={true}
                      smooth={true}
                      offset={50}
                      duration={500}
                    >
                      {item.title}
                    </ScrollLink>
                  ) : (
                    <Link to={`/?view=${item.to}`}>{item.title}</Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <div
            className={`flex justify-center flex-1 ${
              modal ? "hidden" : ""
            } lg:hidden`}
          >
            <WalletConnect /> 
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
          <div className="lg-only">
            <WalletConnect />
          </div>
        </header>
      </section>
      <main>
        <Outlet />
      </main>
      <div>
        <img
          src={curve}
          className="transition-all duration-300 ease-in-out Home-curve"
          alt="curve"
        />
      </div>
      <div className="App-ellipsis-1"></div>
      <div className="App-ellipsis-2"></div>
      <div className={`App-ellipsis-3 ${hideElipsis}`}></div>
      <div className={`App-ellipsis-4 ${hideElipsis}`}></div>
    </div>
  );
}

export default App;
