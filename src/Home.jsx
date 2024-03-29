import heroImg1 from "./assets/Rectangle1.jpg";
import heroImg2 from "./assets/Rectangle1-1.png";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import one from "./assets/1.png";
import two from "./assets/2.png";
import three from "./assets/3.png";
import four from "./assets/4.png";
import leriq from "./assets/Rectangle4.png";
import weirdImage from "./assets/Rectangle3.jpg";
import Team from "./components/Team";
import { Link } from "react-router-dom";
import instagram from "./assets/instagram.png";
import RoadMap from "./components/RoadMap";
import Partners from "./components/Partners";
import Newsletter from "./components/Newsletter";
import discord from "./assets/discord.svg";
import twitter from "./assets/twitter.png";
import { faChevronDown, faQ } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Element } from "react-scroll";
import Faq from "./components/Faq";
import faqs from "../src/data/faq";
import { AnimationOnScroll } from "react-animation-on-scroll";

const steps = [
  {
    explainer: "Apply to join African Valuables Collective as a Creator.",
    image: one,
  },
  { explainer: "Upload your digital content and generate NFTs.", image: two },
  {
    explainer:
      " African Valuables Collective will list your NFTs across multiple marketplaces.",
    image: three,
  },
  { explainer: "Manage your profile and grow your portfolio.", image: four },
];
const collections = [
  { id: "ghost-diamond", image: leriq, title: "LeriQ" },
  // { id: "avc-collection", image: avc2, title: "AVC Collection" },
];

function Home() {
  return (
    <section className="Home">
      <h1 className="Home-hero-header skewElem">Curating African NFT Assets</h1>
      <div className="relative">
        <div className="flex justify-center">
          <AnimationOnScroll animateIn="animate__swing">
            <div className="Home-hero-img-container skewElem">
              <img src={heroImg1} className="Home-hero-img-2" alt="heroImg1" />
              <img src={heroImg2} className="Home-hero-img-1" alt="heroImg2" />
            </div>
          </AnimationOnScroll>
        </div>

        <div className="Home-hero-text-container skewElem">
          <article className="Home-hero-text">
            Empowering creatives across industries of art, music, film, sports,
            real estate and beyond
          </article>
        </div>
        <div className="md:flex w-fit mt-10 md:w-[410px] lg:w-[466px] justify-between mx-auto ">
          <a
            href="https://fbgkk0t0oct.typeform.com/to/UlplMkQn"
            target="_blank"
            className="text-white  bg-[#7F1C97] hero-btns "
          >
            Become a Creator
          </a>
          <a
            href="https://fbgkk0t0oct.typeform.com/to/HtRycNXz"
            target="_blank"
            className=" md:mt-0 mt-2 w-fit  glass-bg hero-btns"
          >
            Join the Team
          </a>
        </div>
      </div>
      <Element name="gettingStarted">
        <section id="gettingStarted" className="page-section-padding">
          <h2 className="page-section-header">How to get started</h2>
          <div className="grid grid-cols-1 md:hidden mt-[33.46px] gap-8">
            {steps.map((step, index) => (
              <div key={index} className="Home-how-to-item-container">
                <img
                  src={step.image}
                  alt="one"
                  className="Home-how-to-item-img"
                />
                <div className="Home-how-to-item">
                  <p className="Home-how-to-item-text">{step.explainer}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="lg:-mt-[65px] hidden md:block">
            <Splide aria-label="How to get started">
              {steps.map((step, index) => (
                <SplideSlide key={index}>
                  <div className="Home-how-to-item-container">
                    <img
                      src={step.image}
                      alt="one"
                      className="Home-how-to-item-img"
                    />
                    <div className="Home-how-to-item">
                      <p className="Home-how-to-item-text">{step.explainer}</p>
                    </div>
                  </div>
                </SplideSlide>
              ))}
            </Splide>
          </div>
        </section>
      </Element>
      <Element name="ourCollection">
        <section id="ourCollection" className="page-section-padding">
          <h2 className="page-section-header">Our Collections</h2>
          <div className="grid grid-cols-1 md:hidden mt-[33.46px] gap-14">
            {collections.map((collection, index) => (
              <Link
                to={`/collections/${collection.id}`}
                key={index}
                className="flex justify-center"
              >
                <div className="Home-hero-img-container">
                  <img
                    src={weirdImage}
                    className="Home-hero-img-3"
                    alt="heroImg1"
                  />
                  <img
                    src={collection.image}
                    className="Home-hero-img-1"
                    alt="heroImg2"
                  />
                  <h3 className="pt-8 collection-name">{collection.title}</h3>
                </div>
              </Link>
            ))}
          </div>
          <div className="hidden Home-collection-splide md:block">
            <Splide aria-label="Our Collections">
              {collections.map((collection, index) => (
                <SplideSlide key={index}>
                  <Link
                    to={`/collections/${collection.id}`}
                    className="flex lg:h-[560px] xl:h-[660px] py-5 justify-center"
                  >
                    <div className="Home-hero-img-container">
                      <img
                        src={weirdImage}
                        className="Home-hero-img-3"
                        alt="heroImg1"
                      />
                      <img
                        src={collection.image}
                        className="Home-hero-img-1"
                        alt="heroImg2"
                      />
                      <h3 className="pt-8 collection-name">
                        {collection.title}
                      </h3>
                    </div>
                  </Link>
                </SplideSlide>
              ))}
            </Splide>
          </div>
          <Link
            to={`/collections/ghost-diamond`}
            className="Collection-group__buy-btn mx-auto font-medium text-base mt-3 lg:mt-3"
          >
            Mint
          </Link>
        </section>
      </Element>

      <Element name="roadMap">
        <section className="page-section-padding" id="roadMap">
          <h2 className="page-section-header">Next Launch Timeline</h2>
          <RoadMap />
        </section>
      </Element>

      <Element name="team">
        <section className="page-section-padding" id="Team">
          <h2 className="page-section-header mb-[33.46px] lg:mb-[3.1169rem]">
            Team
          </h2>

          <Team />
        </section>
      </Element>

      <Element name="partners">
        <section className="page-section-padding" id="Partners">
          <h2 className="page-section-header mb-[33.46px] lg:mb-[3.1169rem]">
            Partners
          </h2>
          <Partners />
        </section>
      </Element>

      <Element name="faq">
        <section className="page-section-padding px-4 md:px-20" id="Faq">
          <h2 className="page-section-header  mb-[33.46px] lg:mb-[3.1169rem]">
            Frequently asked questions
          </h2>

          {faqs.map(({ question, answer }, index) => (
            <Faq key={index} question={question} answer={answer} />
          ))}
        </section>
      </Element>

      <Element name="contactUs">
        <Newsletter />
      </Element>

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
    </section>
  );
}

export default Home;
