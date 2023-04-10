import React from "react";
import instagram from "../assets/instagram.png";
import discord from "../assets/discord.svg";
import twitter from "../assets/twitter.png";
import { faChevronDown, faQ } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import avcCamp from "../assets/avcCamp.png";
import khanyisa from "../assets/khanyisa.png";
import teni from "../assets/teni.png";
import raspy from "../assets/raspy.png";
import shun from "../assets/shun.png";
import telz from "../assets/telz.png";
import ucee from "../assets/ucee.png";

export default function MusicCamp() {
  return (
    <div>
      <div className="w-full z-10 relative">
        <h1 className="Home-hero-header skewElem mt-24">
          AVC MUSIC CAMP
        </h1>

        <div className=" w-fit mx-auto  scale-75">
          <img src={avcCamp} alt="Picture" />
        </div>

        <p className=" px-8 lg:text-center mx-auto w-auto lg:w-[935px] text-white font-regular-text text-[14px] md:text-[16px] lg:text-[22px] ">
          African Valuables in conjunction with Cassava Network presents the
          first ever NFT Music Camp, happening on the 12th-16th of April,2023 in
          Lagos, Nigeria which aims to develop and empower emerging talent in
          the African music industry ,providing them with tools ,knowledge and
          network they need to succeed in an evolving industry.
        </p>
      </div>

      <div className="px-6">
        <h1 className="Home-hero-header skewElem mt-24 md:mt-32">
          FEATURED ARTISTES
        </h1>
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-3  gap-8 glass-bg  p-6 ">
          <img src={teni} className="scale-90" />
          <img src={khanyisa} className="scale-90" />
          <img src={raspy} className="scale-90" />
          <img src={shun} className="scale-90" />
          <img src={telz} className="scale-90" />
          <img src={ucee} className="scale-90" />
        </div>
      </div>

      <footer className="App-footer">
        <section className="App-footer-socials">
          <div className="App-footer-socials-item">
            <div>
              <h3 className="App-footer-header">Follow on Instagram</h3>
              <div className="App-footer-social-dropdown">
                <FontAwesomeIcon icon={faChevronDown} />
              </div>
            </div>
            <a href="https://instagram.com/african.valuables.collective?igshid=YmMyMTA2M2Y=">
              <img
                src={instagram}
                alt="follow on instagram"
                className="App-footer-social-image w-[26.55px] h-[26.55px] lg:w-[83.96px] lg:h-[83.96px] xl:w-[103.96px] xl:h-[103.96px]"
                to="https://instagram.com/african.valuables.collective?igshid=YmMyMTA2M2Y="
              />
            </a>
          </div>
          <div className="App-footer-socials-item">
            <div>
              <h3 className="App-footer-header">Join Our Discord</h3>
              <div className="App-footer-social-dropdown">
                <FontAwesomeIcon icon={faChevronDown} />
              </div>
            </div>
            <a href="https://discord.com/invite/africanvaluables">
              <img
                src={discord}
                alt="join discord"
                className="App-footer-social-image w-[38.62px] h-[28.97px] lg:w-[137.56px] lg:h-[70.68px] xl:w-[167.56px] xl:h-[100.68px]"
              />
            </a>
          </div>
          <div className="App-footer-socials-item">
            <div>
              <h3 className="App-footer-header">Follow on Twitter</h3>
              <div className="App-footer-social-dropdown">
                <FontAwesomeIcon icon={faChevronDown} />
              </div>
            </div>
            <a href="https://twitter.com/afri_valuables?lang=en">
              <img
                src={twitter}
                alt="follow on twitter"
                className="App-footer-social-image w-[27.41px] h-[22.28px] lg:w-[89.86px] lg:h-[64.34px] xl:w-[105.86px] xl:h-[85.34px]"
                to="https://twitter.com/afri_valuables?lang=en"
              />
            </a>
          </div>
        </section>
        <div className="App-footer-copyright">
          (c) Copyright African Valuables Collective, 2022. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}
