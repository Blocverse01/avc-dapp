import React from "react";
import Blocverse from "../assets/BlocVerse BrainStorming-1.jpg";
import Bundle from "../assets/bundle png.png";
import Cent from "../assets/cent logo.png";

export default function Partners() {
  return (
    <section className="Partners">
      <div className="md:flex justify-around">
        <a href="https://blocverse.com">
          <img className="Partners-logo Partner" src={Blocverse} alt="Blocverse" />
        </a>
        <a href="https://www.bundle.africa/">
          <img className="Partners-logo Partner" src={Bundle} alt="Bundle" />
        </a>
        <a href="https://www.cent.co/">
          <img className="Partners-logo Partner" src={Cent} alt="Cent" />
        </a>
      </div>
    </section>
  );
}
