import React from "react";
import Blocverse from "../assets/BlocVerse BrainStorming-1.jpg";
import Bundle from "../assets/bundle png.png";
import Cent from "../assets/cent logo.png";


export default function Partners() {
    return(
        <section className="Collection-group">
        <h1 className="Collection-name">Partners</h1>
     
        <div className="logos mt-10  lg:mt-20">
        <div className="flex  justify-around">
            <a href="https://blocverse.com">
          <img className="h-[30px] object-scale-down w-24 md:w-auto md:object-fit md:h-[50px] lg:h-20" src={Blocverse} alt="Blocverse" />
          </a>
          <a href="https://www.bundle.africa/">
          <img className="h-[30px] md:h-[50px] lg:h-20" src={Bundle} alt="Bundle" />
          </a>
            <a href="https://www.cent.co/">
          <img className="h-[30px]  object-scale-down w-24 md:w-auto md:object-fit md:h-[50px] lg:h-20" src={Cent} alt="Cent" />
          </a>
        </div>
        <div className="flex mt-10 md:mt-20 justify-around">
         
        </div>
      </div>
      </section>
    );

}