import React from "react";
import Blocverse from "../assets/BlocVerse BrainStorming-1.jpg";
import Bundle from "../assets/BNDLE_White_LOGO.svg";
import Cent from "../assets/cent logo.png";
import Liveart from "../assets/liveart_logo.svg";
import Jendaya from "../assets/jendaya_logo.webp";
import Cassava from "../assets/cassava_logo.png";

export default function Partners() {
  return (
    <section className="Partners">
      <div className="grid grid-cols-3 gap-5 md:gap-8">
        <a href="https://blocverse.com">
          <img
            className="Partners-logo Partner"
            src={Blocverse}
            alt="Blocverse"
          />
        </a>
        <a href="https://www.bundle.africa/">
          <img className="Partners-logo Partner" src={Bundle} alt="Bundle" />
        </a>
        <a href="https://www.cent.co/">
          <img className="Partners-logo Partner" src={Cent} alt="Cent" />
        </a>
        <a href="https://liveart.io/">
          <img className="Partners-logo Partner" src={Liveart} alt="Liveart" />
        </a>
        <a href="https://www.shopjendaya.com/">
          <img className="Partners-logo Partner" src={Jendaya} alt="Jendaya" />
        </a>
        <a href="https://www.cassava.network/">
          <img className="Partners-logo Partner" src={Cassava} alt="Cassava" />
        </a>
      </div>
    </section>
  );
}
