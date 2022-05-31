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
import avc2 from "./assets/Avc2.png";

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
  { image: leriq, title: "LeriQ" },
  { image: avc2, title: "AVC Collection" },
];

function Home() {
  return (
    <section className="Home">
      <h1 className="Home-hero-header skewElem">Curating African NFT Assets</h1>
      <div className="relative">
        <div className="flex justify-center">
          <div className="Home-hero-img-container skewElem">
            <img src={heroImg1} className="Home-hero-img-2" alt="heroImg1" />
            <img src={heroImg2} className="Home-hero-img-1" alt="heroImg2" />
          </div>
        </div>
        <div className="Home-hero-text-container skewElem">
          <article className="Home-hero-text">
            Empowering creatives across industries of art, music, film, sports,
            real estate and beyond
          </article>
        </div>
      </div>
      <section className="page-section-padding">
        <h2 className="page-section-header">How to get started</h2>
        <div className="grid grid-cols-1 md:hidden mt-[33.46px] gap-8">
          {steps.map((step, index) => (
            <div key={index} className="Home-how-to-item-container skewElem">
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
      <section className="page-section-padding">
        <h2 className="page-section-header">Our Collections</h2>
        <div className="grid grid-cols-1 md:hidden mt-[33.46px] gap-14">
          {collections.map((collection, index) => (
            <div key={index} className="flex justify-center">
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
            </div>
          ))}
        </div>
        <div className="hidden Home-collection-splide md:block">
          <Splide aria-label="Our Collections">
            {collections.map((collection, index) => (
              <SplideSlide key={index}>
                <div className="flex lg:h-[560px] xl:h-[660px] py-5 justify-center">
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
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </section>
      <section className="page-section-padding">
        <h2 className="page-section-header">Get in touch</h2>
        <form className="Home-contact-form">
          <div>
            <label htmlFor="first-name" className="Home-contact-form-label">
              First Name
            </label>
            <input
              id="first-name"
              className="Home-contact-form-input"
              type="text"
            />
          </div>
          <div>
            <label htmlFor="last-name" className="Home-contact-form-label">
              Last Name
            </label>
            <input
              id="last-name"
              className="Home-contact-form-input"
              type="text"
            />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="email" className="Home-contact-form-label">
              Your E-mail
            </label>
            <input
              id="email"
              className="Home-contact-form-input"
              type="email"
            />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="message" className="Home-contact-form-label">
              Your Message
            </label>
            <textarea
              rows={6}
              id="message"
              className="Home-contact-form-textarea"
            ></textarea>
          </div>
          <div className="md:col-span-2">
            <button className="Home-contact-form-button">Send Message</button>
          </div>
        </form>
      </section>
    </section>
  );
}

export default Home;
